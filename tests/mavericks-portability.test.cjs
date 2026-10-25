const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { execFileSync } = require('node:child_process');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');

test('Dallas skill works after installing only its own folder and refuses overwrites', () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'kai-other-machine-'));
  try {
    const installed = path.join(temp, 'installed skill');
    fs.cpSync(path.join(root, 'skills/kai-mavericks'), installed, { recursive: true });
    const manifest = JSON.parse(fs.readFileSync(path.join(installed, 'template-manifest.json'), 'utf8'));
    for (const [name, expected] of Object.entries(manifest.files)) {
      const bytes = fs.readFileSync(path.join(installed, 'assets/template', name));
      assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), expected);
    }
    const script = path.join(installed, 'scripts/create-project.py');
    const project = path.join(temp, 'new project');
    execFileSync('python3', [script, project, '--palette', 'C'], { stdio: 'pipe' });
    const html = fs.readFileSync(path.join(project, 'index.html'), 'utf8');
    assert.match(html, /location.hash = "C"/);
    assert.ok(!html.includes('/Users/'));
    for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
      assert.ok(!/^https?:/.test(match[1]), `External dependency: ${match[1]}`);
      assert.ok(fs.existsSync(path.join(project, match[1])), match[1]);
    }
    assert.throws(() => execFileSync('python3', [script, project], { stdio: 'pipe' }));
    assert.equal(fs.readFileSync(path.join(project, 'index.html'), 'utf8'), html);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});
