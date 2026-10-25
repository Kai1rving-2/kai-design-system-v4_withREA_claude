import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name))
  .flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);

/** Build a self-contained skill: no symlinks or paths outside its own directory. */
export function packageMavericks(root = fileURLToPath(new URL('..', import.meta.url)), { check = false } = {}) {
  const design = path.join(root, 'designs/mavericks-colors');
  if (!fs.existsSync(path.join(design, 'index.html'))) return;
  const skill = path.join(root, 'skills/kai-mavericks');
  const assets = path.join(skill, 'assets/template');
  const outputs = new Map();
  for (const name of ['index.html','preview.jsx','preview.css','design-canvas.jsx','themes.css','themes.json']) {
    outputs.set(name, fs.readFileSync(path.join(design, name)));
  }
  for (const name of ['react.js','react-dom.js','babel.js']) outputs.set(`vendor/${name}`, fs.readFileSync(path.join(design, 'vendor', name)));
  outputs.set('.design-canvas.state.json', Buffer.from('{"sections":{}}\n'));
  // Use the current system source rather than an author-machine vendored path.
  const systemFiles = ['styles.css','components/components.css','_ds_bundle.js','LICENSE','THIRD_PARTY_NOTICES.md',
    ...['tokens','fonts'].flatMap(dir => walk(path.join(root, dir)).filter(file => /\.(css|woff2|txt)$/.test(file)).map(file => path.relative(root, file)))];
  for (const name of systemFiles) outputs.set(`_ds/v4_withREA_claude/${name}`, fs.readFileSync(path.join(root, name)));
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const manifest = JSON.stringify({ package: pkg.name, version: pkg.version, defaultPalette: 'B',
    repository: 'https://github.com/Kai1rving-2/kai-design-system-v4_withREA_claude',
    files: Object.fromEntries([...outputs].map(([name, bytes]) => [name, hash(bytes)])) }, null, 2) + '\n';
  const contract = Buffer.from(fs.readFileSync(path.join(root, 'docs/html-consumption.md'), 'utf8')
    .replace(/\]\(\.\.\/([^\)]+)\)/g, '](' + 'https://github.com/Kai1rving-2/kai-design-system-v4_withREA_claude/blob/main/$1)'));
  const generated = new Map([...outputs].map(([name, bytes]) => [`assets/template/${name}`, bytes]));
  generated.set('template-manifest.json', Buffer.from(manifest));
  generated.set('references/design-contract.md', contract);
  for (const [name, bytes] of generated) {
    const destination = path.join(skill, name);
    if (check) {
      if (!fs.existsSync(destination) || !fs.readFileSync(destination).equals(bytes)) throw new Error(`Portable skill is stale: ${name}. Run npm run build.`);
    } else {
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.writeFileSync(destination, bytes);
    }
  }
  // Remove retired generated assets while preserving authored SKILL.md/scripts.
  if (fs.existsSync(assets)) for (const file of walk(assets)) {
    if (!outputs.has(path.relative(assets, file).split(path.sep).join('/'))) {
      if (check) throw new Error(`Retired portable asset remains: ${file}`);
      fs.unlinkSync(file);
    }
  }
  return outputs.size;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const count = packageMavericks(undefined, { check: process.argv.includes('--check') });
  console.log(`Portable kai-mavericks: ${count ?? 0} local assets ${process.argv.includes('--check') ? 'verified' : 'packaged'}.`);
}
