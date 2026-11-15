#!/usr/bin/env node
import { copyFileSync, cpSync, readdirSync, unlinkSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve('.');
const dist = join(root, 'dist');
const assets = join(root, 'assets');

if (!existsSync(dist)) {
  console.error('❌ dist/ directory not found. Run vite build first.');
  process.exit(1);
}

// 1. Copy compiled index.src.html to index.html and 404.html
copyFileSync(join(dist, 'index.src.html'), join(root, 'index.html'));
copyFileSync(join(dist, 'index.src.html'), join(root, '404.html'));

// 2. Clean old assets
if (existsSync(assets)) {
  for (const f of readdirSync(assets)) {
    unlinkSync(join(assets, f));
  }
}

// 3. Copy new assets
cpSync(join(dist, 'assets'), assets, { recursive: true });

console.log('✅ Synchronized dist output to root and assets directory.');
