#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEmbedder } from './embedding.ts';
import type { Chunk } from './chunking.ts';

type EmbeddedChunk = Chunk & { embedding: number[] };

interface RagIndex {
  embeddingModel: string;
  dim: number;
  chunks: EmbeddedChunk[];
}

interface EvalQuery {
  query: string;
  expectedSections: string[];
  keywords: string[];
}

const here = dirname(fileURLToPath(import.meta.url));
const index: RagIndex = JSON.parse(readFileSync(join(here, '..', 'public', 'rag-index.json'), 'utf8'));
const queries: EvalQuery[] = JSON.parse(readFileSync(join(here, 'eval-queries.json'), 'utf8'));

function isRelevant(chunk: EmbeddedChunk, query: EvalQuery): boolean {
  const path = chunk.sectionPath.toLowerCase();
  const content = chunk.content.toLowerCase();
  if (query.expectedSections.some((s) => path.includes(s.toLowerCase()))) return true;
  return query.keywords.some((k) => content.includes(k.toLowerCase()));
}

function cosine(a: number[], b: number[]): number {
  let dot = 0;
  for (let i = 0; i < a.length; i++) dot += a[i] * b[i];
  return dot;
}

function search(queryVec: number[], topK: number): Array<{ chunk: EmbeddedChunk; score: number }> {
  return index.chunks
    .map((chunk) => ({ chunk, score: cosine(queryVec, chunk.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

async function main(): Promise<void> {
  console.log(`▶ Lade Embedding-Modell und bette ${queries.length} Testfragen ein …\n`);
  const embed = await createEmbedder();
  const queryVecs = await embed(queries.map((q) => q.query), 'query: ');

  const totals = { r1: 0, r3: 0, r5: 0 };

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const top = search(queryVecs[i], 5);
    const rank = top.findIndex((hit) => isRelevant(hit.chunk, query)) + 1;

    const hit1 = rank === 1;
    const hit3 = rank >= 1 && rank <= 3;
    const hit5 = rank >= 1 && rank <= 5;
    totals.r1 += hit1 ? 1 : 0;
    totals.r3 += hit3 ? 1 : 0;
    totals.r5 += hit5 ? 1 : 0;

    const mark = hit1 ? '✓1' : hit3 ? '·3' : hit5 ? '·5' : '✗ ';
    console.log(`  ${mark}  Rang ${rank || '—'}  „${query.query}“`);
    console.log(`        top: ${top[0].chunk.sectionPath} (${top[0].score.toFixed(3)})`);
  }

  const n = queries.length;
  const pct = (x: number): string => `${((x / n) * 100).toFixed(0)}%`;
  console.log('\n── Ergebnis ──────────────────────────────');
  console.log(`  Recall@1: ${pct(totals.r1)}   Recall@3: ${pct(totals.r3)}   Recall@5: ${pct(totals.r5)}`);
  console.log(`  (${n} Testfragen)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
