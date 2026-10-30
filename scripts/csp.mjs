// Pós-build: calcula o hash dos scripts inline gerados e grava a CSP em vercel.json e dist/_headers.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const hashes = new Set();
for (const f of readdirSync('dist').filter((x) => x.endsWith('.html'))) {
  const html = readFileSync(`dist/${f}`, 'utf8');
  for (const m of html.matchAll(/<script(?![^>]*(?:src=|application\/ld\+json))[^>]*>([\s\S]*?)<\/script>/g)) {
    hashes.add(`'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`);
  }
}
const csp = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const cfg = JSON.parse(readFileSync('vercel.json', 'utf8'));
const h = cfg.headers[0].headers.find((x) => x.key === 'Content-Security-Policy');
h.value = csp;
writeFileSync('vercel.json', JSON.stringify(cfg, null, 2) + '\n');
console.log(`CSP atualizada com ${hashes.size} hash(es) de script inline.`);
