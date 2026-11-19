import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const srcCssDir = path.join(rootDir, 'src', 'css');
const distCssDir = path.join(rootDir, 'dist', 'css');

fs.mkdirSync(distCssDir, { recursive: true });

for (const file of ['tokens.css', 'surfaces.css']) {
  fs.copyFileSync(path.join(srcCssDir, file), path.join(distCssDir, file));
}

console.log('Copied CSS theme files to dist/css');
