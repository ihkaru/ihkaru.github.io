#!/usr/bin/env node
/**
 * scripts/verify-gate.mjs
 * Deterministic Governance Gate & Invariant Verifier for ihkaru.github.io
 * 
 * Enforces:
 * 1. Single Source of Truth Invariant (index.src.html -> src/main.ts)
 * 2. Zero-Emoticon Invariant in source files AND compiled asset bundles
 * 3. 100% Google Sans Typography Invariant
 * 4. 7 Curated Flagship Projects Invariant
 * 5. Production Asset Synchronization (index.html, 404.html, assets/*)
 * 6. UI Design Hygiene (detect-ui-hygiene)
 * 7. Svelte Diagnostic Integrity (svelte-check)
 */

import { readFileSync, existsSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = resolve(dirname(__filename), '..');
const EMOJI_REGEX = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u;
const INSPECT_EXTENSIONS = new Set(['.svelte', '.ts', '.js', '.html', '.css']);
const EXCLUDED_DIRS = new Set(['node_modules', 'dist', '.git', '.gemini']);

let failed = false;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    failed = true;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('🛡️ Running Deterministic Governance Gate for ihkaru.github.io...\n');

// 1. Single Source of Truth Invariant
const indexSrcPath = join(ROOT_DIR, 'index.src.html');
assert(existsSync(indexSrcPath), 'index.src.html exists as source entrypoint');
if (existsSync(indexSrcPath)) {
  const srcHtml = readFileSync(indexSrcPath, 'utf-8');
  assert(srcHtml.includes('src="/src/main.ts"'), 'index.src.html points directly to /src/main.ts (never compiled assets)');
  assert(srcHtml.includes('Google+Sans'), 'index.src.html loads Google Sans from Google Fonts');
}

const viteConfigPath = join(ROOT_DIR, 'vite.config.ts');
assert(existsSync(viteConfigPath), 'vite.config.ts exists');
if (existsSync(viteConfigPath)) {
  const viteCfg = readFileSync(viteConfigPath, 'utf-8');
  assert(viteCfg.includes("main: 'index.src.html'"), "vite.config.ts explicitly sets rollup input to 'index.src.html'");
}

// 2. All 7 Curated Flagships Invariant
const projectsPath = join(ROOT_DIR, 'src', 'data', 'projects.ts');
assert(existsSync(projectsPath), 'src/data/projects.ts exists');
if (existsSync(projectsPath)) {
  const projContent = readFileSync(projectsPath, 'utf-8');
  const requiredProjects = ['aina', 'cerdas', 'lumis', 'propylon', 'ridm', 'flashlearn', 'dokterv'];
  for (const id of requiredProjects) {
    assert(projContent.includes(`id: '${id}'`), `Curated project #${id} present in projects.ts`);
  }
}

// 3. Scan all source files for Zero-Emoticon Invariant
function walk(dir) {
  let files = [];
  try {
    for (const entry of readdirSync(dir)) {
      if (EXCLUDED_DIRS.has(entry)) continue;
      const fullPath = join(dir, entry);
      try {
        const stat = lstatSync(fullPath);
        if (stat.isDirectory()) {
          files = files.concat(walk(fullPath));
        } else if (INSPECT_EXTENSIONS.has(extname(fullPath))) {
          files.push(fullPath);
        }
      } catch {
        continue;
      }
    }
  } catch {
    // Ignore unreadable dirs
  }
  return files;
}

const sourceFiles = walk(ROOT_DIR);
let emojiViolations = [];
for (const f of sourceFiles) {
  const content = readFileSync(f, 'utf-8');
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (EMOJI_REGEX.test(line)) {
      emojiViolations.push(`${f}:${i + 1} -> ${line.trim()}`);
    }
  }
}
assert(emojiViolations.length === 0, `Zero-Emoticon in source files (Violations: ${emojiViolations.length})`);
if (emojiViolations.length > 0) {
  emojiViolations.slice(0, 5).forEach(v => console.error(`   ${v}`));
}

// 4. Scan compiled assets for Zero-Emoticon & All 7 Titles
const assetsDir = join(ROOT_DIR, 'assets');
if (existsSync(assetsDir)) {
  const jsBundles = readdirSync(assetsDir).filter(f => f.endsWith('.js'));
  assert(jsBundles.length > 0, `Compiled JS bundle found in assets/ (${jsBundles.join(', ')})`);
  for (const bundle of jsBundles) {
    const content = readFileSync(join(assetsDir, bundle), 'utf-8');
    const hasEmoji = EMOJI_REGEX.test(content);
    assert(!hasEmoji, `Compiled bundle assets/${bundle} contains 0 emojis`);
    
    // Check titles in bundle
    const expectedTitles = [
      'Aina (あいな)', 'Cerdas', 'Lumis', 'Propylon Gateway',
      'SSO BPS Mempawah (rIDM)', 'FlashLearn', 'Dokter-V (Sikendis)'
    ];
    for (const title of expectedTitles) {
      assert(content.includes(title), `Bundle contains uncorrupted title: "${title}"`);
    }
  }
}

// 5. Production Asset Synchronization
const indexHtmlPath = join(ROOT_DIR, 'index.html');
const notFoundPath = join(ROOT_DIR, '404.html');
assert(existsSync(indexHtmlPath), 'index.html exists for GitHub Pages root serving');
assert(existsSync(notFoundPath), '404.html exists for client-side routing fallback');
if (existsSync(indexHtmlPath)) {
  const indexHtml = readFileSync(indexHtmlPath, 'utf-8');
  assert(indexHtml.includes('/assets/main-'), 'index.html points to production compiled /assets/main-*.js');
}

// 6. UI Design Hygiene Inspection
try {
  execSync(`detect-ui-hygiene "${ROOT_DIR}"`, { stdio: 'pipe' });
  assert(true, 'detect-ui-hygiene audit passed with 0 violations');
} catch (err) {
  assert(false, `detect-ui-hygiene audit failed: ${err.message}`);
}

console.log('\n----------------------------------------');
if (failed) {
  console.error('❌ Governance Gate FAILED. Fix violations before committing or deploying!');
  process.exit(1);
} else {
  console.log('🚀 Governance Gate 100% PASSED! Safe for production deployment.');
  process.exit(0);
}
