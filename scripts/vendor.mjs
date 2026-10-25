import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('..', import.meta.url));
const destination = process.argv[2];
if (!destination) throw new Error('Usage: node scripts/vendor.mjs <destination> [--check]');
const target = path.resolve(destination);
if (target === root || root.startsWith(target + path.sep)) throw new Error('Destination must not contain the source system');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const files = ['index.js','index.d.ts','styles.css', ...['components','tokens','fonts'].flatMap(dir => walk(path.join(root,dir)).filter(p => /\.(jsx|js|ts|css|json|woff2|txt)$/.test(p)).map(p => path.relative(root,p)))];
const hash = p => createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const manifestFile = path.join(target,'.kai-source.json');
const previous = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile,'utf8')) : null;
if (previous) {
  for (const [file, expected] of Object.entries(previous.files)) {
    const current = path.join(target,file);
    if (!fs.existsSync(current) || hash(current) !== expected) throw new Error(`Vendored file changed locally: ${file}. Move overrides to the product layer before syncing.`);
  }
}
const pkg = JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const fileHashes = Object.fromEntries(files.map(file => [file,hash(path.join(root,file))]));
const manifest = { format: 1, package: pkg.name, version: pkg.version, consumptionMode: 'module-or-html', source: root.replace(/\/$/, ''),
  sourceHash: createHash('sha256').update(JSON.stringify(fileHashes)).digest('hex'), files: fileHashes };
if (process.argv.includes('--check')) {
  if (!previous || JSON.stringify(previous) !== JSON.stringify(manifest)) throw new Error('Consumer and source snapshots differ; run the sync command.');
} else {
  for (const file of files) { const dest = path.join(target,file); fs.mkdirSync(path.dirname(dest),{recursive:true}); fs.copyFileSync(path.join(root,file),dest); }
  for (const file of Object.keys(previous?.files || {})) if (!files.includes(file)) fs.unlinkSync(path.join(target,file));
  fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2)+'\n');
}
console.log(`KAI ${manifest.version}: ${files.length} files ${process.argv.includes('--check') ? 'verified' : 'synced'}.`);
