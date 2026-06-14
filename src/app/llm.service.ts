import { Injectable } from '@angular/core';
import type { ConversationTurn, I18nParams } from './types';
import type { LlmRequest, LlmResponse } from './workers/protocol';

export type LlmProgress = (key: string, params: I18nParams | undefined, percent: number | null) => void;

@Injectable({ providedIn: 'root' })
export class LlmService {
  private readonly worker = new Worker(new URL('./workers/llm.worker', import.meta.url), {
    type: 'module',
  });

  load(onProgress: LlmProgress): Promise<'webgpu' | 'wasm'> {
    return new Promise<'webgpu' | 'wasm'>((resolve, reject) => {
      const onMessage = (e: MessageEvent<LlmResponse>) => {
        const msg = e.data;
        if (msg.type === 'status') {
          onProgress(msg.key, msg.params, msg.progress ?? null);
        } else if (msg.type === 'ready') {
          this.worker.removeEventListener('message', onMessage);
          resolve(msg.device);
        } else if (msg.type === 'error') {
          this.worker.removeEventListener('message', onMessage);
          reject(new Error(msg.error));
        }
      };
      this.worker.addEventListener('message', onMessage);
      const request: LlmRequest = { type: 'init' };
      this.worker.postMessage(request);
    });
  }

  generate(
    system: string,
    history: ConversationTurn[],
    prompt: string,
    onToken: (token: string) => void,
  ): Promise<void> {
    return this.run(system, history, prompt, 2048, onToken);
  }

  async complete(system: string, prompt: string, maxNewTokens = 256): Promise<string> {
    let text = '';
    await this.run(system, [], prompt, maxNewTokens, (token) => {
      text += token;
    });
    return text;
  }

  private run(
    system: string,
    history: ConversationTurn[],
    prompt: string,
    maxNewTokens: number,
    onToken: (token: string) => void,
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const onMessage = (e: MessageEvent<LlmResponse>) => {
        const msg = e.data;
        if (msg.type === 'token') onToken(msg.token);
        else if (msg.type === 'done') {
          this.worker.removeEventListener('message', onMessage);
          resolve();
        } else if (msg.type === 'error') {
          this.worker.removeEventListener('message', onMessage);
          reject(new Error(msg.error));
        }
      };
      this.worker.addEventListener('message', onMessage);
      const request: LlmRequest = { type: 'generate', system, history, prompt, maxNewTokens };
      this.worker.postMessage(request);
    });
  }
}
