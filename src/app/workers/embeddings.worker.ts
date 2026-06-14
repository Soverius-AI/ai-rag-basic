/// <reference lib="webworker" />
import { pipeline, type FeatureExtractionPipeline } from '@huggingface/transformers';
import type { EmbeddingsRequest, EmbeddingsResponse } from './protocol';

const MODEL_ID = 'Xenova/multilingual-e5-base';

let extractor: FeatureExtractionPipeline | null = null;

async function getExtractor(): Promise<FeatureExtractionPipeline> {
  if (extractor) return extractor;
  const device = 'gpu' in navigator ? 'webgpu' : 'wasm';
  extractor = await pipeline('feature-extraction', MODEL_ID, { device });
  return extractor;
}

addEventListener('message', async (event: MessageEvent<EmbeddingsRequest>) => {
  const { id, text } = event.data;
  try {
    const extract = await getExtractor();
    // E5 uses "query:" for questions and "passage:" for indexed text.
    const output = await extract('query: ' + text, { pooling: 'mean', normalize: true });
    const embedding = Array.from(output.data as Float32Array);
    const response: EmbeddingsResponse = { id, embedding };
    postMessage(response);
  } catch (error) {
    const response: EmbeddingsResponse = { id, error: error instanceof Error ? error.message : String(error) };
    postMessage(response);
  }
});
