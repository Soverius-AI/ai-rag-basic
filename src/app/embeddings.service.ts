import { Injectable } from '@angular/core';
import type { EmbeddingsRequest, EmbeddingsResponse } from './workers/protocol';

@Injectable({ providedIn: 'root' })
export class EmbeddingsService {
  private readonly worker = new Worker(new URL('./workers/embeddings.worker', import.meta.url), {
    type: 'module',
  });
  private nextId = 0;
  private readonly pending = new Map<number, (response: EmbeddingsResponse) => void>();

  constructor() {
    this.worker.addEventListener('message', (e: MessageEvent<EmbeddingsResponse>) => {
      const msg = e.data;
      const settle = this.pending.get(msg.id);
      if (!settle) return;
      this.pending.delete(msg.id);
      settle(msg);
    });
  }

  embed(text: string): Promise<number[]> {
    const id = this.nextId++;
    return new Promise<number[]>((resolve, reject) => {
      this.pending.set(id, (msg) => {
        if ('embedding' in msg) resolve(msg.embedding);
        else reject(new Error(msg.error));
      });
      const request: EmbeddingsRequest = { id, text };
      this.worker.postMessage(request);
    });
  }
}
