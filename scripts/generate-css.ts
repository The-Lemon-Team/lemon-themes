import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateTokensCss } from '../src/css/generateCss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const targetPath = path.join(rootDir, 'src', 'css', 'tokens.css');

fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, generateTokensCss(), 'utf8');
console.log(`Generated ${path.relative(rootDir, targetPath)}`);
