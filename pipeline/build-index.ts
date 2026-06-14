#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadChunks, type Chunk } from './chunking.ts';
import { createEmbedder, EMBEDDING_MODEL, EMBEDDING_DIM } from './embedding.ts';

interface RagIndex {
  embeddingModel: string;
  dim: number;
  chunks: Array<Chunk & { embedding: number[] }>;
}

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS_DIR = join(here, 'corpus');
const OUTPUT = join(here, '..', 'public', 'rag-index.json');
const BATCH = 64;

async function main(): Promise<void> {
  console.log('▶ Lese Korpus und bilde Chunks …');
  const chunks = loadChunks(CORPUS_DIR);
  console.log(`  ${chunks.length} Chunks gefunden.`);

  console.log(`▶ Lade Embedding-Modell (${EMBEDDING_MODEL}) …`);
  const embed = await createEmbedder();

  console.log('▶ Berechne Embeddings (Präfix "passage: ") …');
  const vectors: number[][] = [];
  for (let i = 0; i < chunks.length; i += BATCH) {
    const vecs = await embed(chunks.slice(i, i + BATCH).map((c) => c.content), 'passage: ');
    for (const v of vecs) vectors.push(round(v));
    process.stdout.write(`\r  ${Math.min(i + BATCH, chunks.length)}/${chunks.length}`);
  }
  process.stdout.write('\n');

  const index: RagIndex = {
    embeddingModel: EMBEDDING_MODEL,
    dim: EMBEDDING_DIM,
    chunks: chunks.map((chunk, i) => ({ ...chunk, embedding: vectors[i] })),
  };

  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify(index));
  const mb = (Buffer.byteLength(JSON.stringify(index)) / 1048576).toFixed(1);
  console.log(`✓ Index geschrieben: ${OUTPUT} (${chunks.length} Chunks, ${mb} MB)`);
}

const round = (vector: number[]): number[] => vector.map((v) => Math.round(v * 1e6) / 1e6);

main().catch((err) => { console.error(err); process.exit(1); });
