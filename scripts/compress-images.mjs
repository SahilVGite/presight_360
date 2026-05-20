#!/usr/bin/env node
/**
 * One-shot image compressor for src/assets/images.
 *
 * - Compresses every PNG / JPG / JPEG in place (overwrites originals).
 * - Skips already-tiny files (< 50 KB) and SVG / GIF (GIFs handled separately).
 * - Keeps the same filename + extension so component code keeps working.
 *
 * Usage:
 *   npm install --no-save sharp
 *   npm run compress:images
 *
 * Recommended PNG max quality:   90
 * Recommended JPG max quality:   82
 *
 * Re-run after adding new artwork. Output is logged so you can review savings.
 */

import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error(
    '\nMissing dependency: sharp.\n' +
      'Install it (one-time, no need to commit) with:\n' +
      '  npm install --no-save sharp\n'
  );
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const ROOT = join(__filename, '..', '..');
const IMAGES_DIR = join(ROOT, 'src', 'assets', 'images');

const PNG_QUALITY = 90;
const JPG_QUALITY = 82;
const MIN_BYTES_TO_PROCESS = 50 * 1024; // skip files smaller than 50 KB

const fmt = (n) => `${(n / 1024).toFixed(1)} KB`;

async function processFile(absPath) {
  const ext = extname(absPath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  const before = (await stat(absPath)).size;
  if (before < MIN_BYTES_TO_PROCESS) return null;

  const tmp = `${absPath}.tmp`;
  const pipeline = sharp(absPath).rotate();

  if (ext === '.png') {
    await pipeline
      .png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
      .toFile(tmp);
  } else {
    await pipeline
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
      .toFile(tmp);
  }

  const after = (await stat(tmp)).size;

  // Only replace original if we actually saved bytes
  if (after < before) {
    await unlink(absPath);
    await rename(tmp, absPath);
    return { name: absPath.replace(ROOT, ''), before, after, saved: before - after };
  }
  await unlink(tmp);
  return { name: absPath.replace(ROOT, ''), before, after: before, saved: 0, skipped: true };
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walk(p)));
    } else {
      out.push(p);
    }
  }
  return out;
}

const all = await walk(IMAGES_DIR);
console.log(`Scanning ${all.length} files in ${IMAGES_DIR.replace(ROOT, '')}\n`);

let totalBefore = 0;
let totalAfter = 0;
let touched = 0;

for (const f of all) {
  try {
    const r = await processFile(f);
    if (!r) continue;
    totalBefore += r.before;
    totalAfter += r.after;
    if (!r.skipped) touched += 1;
    const pct = ((1 - r.after / r.before) * 100).toFixed(1);
    const tag = r.skipped ? 'skip' : `-${pct}%`;
    console.log(`${tag.padStart(8)}  ${fmt(r.before).padStart(10)} -> ${fmt(r.after).padStart(10)}  ${r.name}`);
  } catch (err) {
    console.warn(`  ! failed: ${f.replace(ROOT, '')} (${err.message})`);
  }
}

console.log(
  `\nDone. ${touched} files re-encoded. ` +
    `Total: ${fmt(totalBefore)} -> ${fmt(totalAfter)} ` +
    `(saved ${fmt(totalBefore - totalAfter)}).\n` +
    `\nNote: GIF files (whyChooseUsBg.gif, bgGif.gif) are NOT processed.\n` +
    `      Convert them manually to MP4/WebM for the biggest single win.\n`
);
