#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS_DIR = join(here, 'corpus');
const API = 'https://de.wikipedia.org/w/api.php';
const USER_AGENT = 'browser-rag-gemma4-corpus/1.0 (educational RAG demo; +https://de.wikipedia.org)';
const DELAY_MS = 150;

const DROP_SECTIONS = new Set([
  'einzelnachweise', 'weblinks', 'literatur', 'siehe auch', 'anmerkungen',
  'quellen', 'fußnoten', 'fussnoten', 'belege', 'rezeption und kritik',
]);

interface WikiPage { extract?: string; missing?: string; }
interface WikiResponse { query?: { pages?: Record<string, WikiPage> }; }

const args = process.argv.slice(2);
const arg = (name: string): string | undefined => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];
const limit = arg('limit') ? Number(arg('limit')) : Infinity;
const only = arg('only')?.split(',').map((s) => s.trim());

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

function parseFile(raw: string): { url: string; title: string } {
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const url = fm?.[1].match(/^url:\s*(\S+)\s*$/m)?.[1] ?? '';
  const title = raw.match(/^#\s+(.+)$/m)?.[1].trim() ?? '';
  return { url, title };
}

function articleTitle(url: string): string {
  const slug = url.split('/wiki/')[1] ?? '';
  return decodeURIComponent(slug).replace(/_/g, ' ');
}

async function fetchExtract(title: string): Promise<string> {
  const params = new URLSearchParams({
    action: 'query', format: 'json', prop: 'extracts',
    explaintext: '1', exsectionformat: 'wiki', redirects: '1', titles: title,
  });
  const res = await fetch(`${API}?${params}`, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for "${title}"`);
  const data = await res.json() as WikiResponse;
  const pages = data.query?.pages ?? {};
  const page = Object.values(pages)[0];
  if (!page || page.missing !== undefined) throw new Error(`article not found: "${title}"`);
  return page.extract ?? '';
}

function toMarkdown(extract: string): string {
  const out: string[] = [];
  let dropping = false;
  let leadEmitted = false;
  let sawHeading = false;

  for (const block of extract.split('\n')) {
    const heading = block.match(/^(=={1,5})\s*(.+?)\s*\1=?$/) || block.match(/^(={2,6})\s*(.+?)\s*\1$/);
    if (heading) {
      sawHeading = true;
      const level = heading[1].length;
      const name = heading[2].trim();
      if (level === 2) dropping = DROP_SECTIONS.has(name.toLowerCase());
      if (dropping) continue;
      out.push('', '#'.repeat(level) + ' ' + name, '');
      continue;
    }
    if (dropping) continue;
    const text = block.trim();
    if (!sawHeading && text && !leadEmitted) { out.push('## Überblick', ''); leadEmitted = true; }
    out.push(block);
  }

  return out.join('\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';
}

async function main(): Promise<void> {
  let files = readdirSync(CORPUS_DIR).filter((f) => f.endsWith('.md')).sort();
  if (only) files = files.filter((f) => only.some((p) => f.startsWith(p)));
  files = files.slice(0, limit);

  console.log(`▶ Aktualisiere ${files.length} Artikel aus de.wikipedia …`);
  let ok = 0, failed = 0, totalBytes = 0;
  for (const file of files) {
    const path = join(CORPUS_DIR, file);
    const { url, title } = parseFile(readFileSync(path, 'utf8'));
    if (!url) { console.warn(`  ⚠ ${file}: kein url-Header — übersprungen`); failed++; continue; }
    const apiTitle = articleTitle(url);
    try {
      const extract = await fetchExtract(apiTitle);
      const body = toMarkdown(extract);
      const content = `---\nurl: ${url}\n---\n\n# ${title}\n\n${body}`;
      writeFileSync(path, content);
      const kb = (Buffer.byteLength(content) / 1024).toFixed(1);
      totalBytes += Buffer.byteLength(content);
      console.log(`  ✓ ${file}  (${apiTitle}, ${kb} KB)`);
      ok++;
    } catch (err) {
      console.warn(`  ✗ ${file}: ${err instanceof Error ? err.message : String(err)}`);
      failed++;
    }
    await sleep(DELAY_MS);
  }
  const mb = (totalBytes / 1048576).toFixed(1);
  console.log(`\n✓ Fertig: ${ok} aktualisiert, ${failed} fehlgeschlagen, ${mb} MB Korpus.`);
  if (failed) process.exitCode = 1;
}

main().catch((err) => { console.error(err); process.exit(1); });
