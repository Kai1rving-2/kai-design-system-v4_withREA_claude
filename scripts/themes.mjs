import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveTheme, validateTheme, themeRule } from './theme-utils.mjs';

/** Build or verify the authored Dallas themes. Does not mutate the system palette. */
export function buildThemes(root = fileURLToPath(new URL('..', import.meta.url)), { check = false } = {}) {
  const baseColors = JSON.parse(fs.readFileSync(path.join(root, 'tokens/colors.json'), 'utf8'));
  validateTheme(resolveTheme(baseColors), Object.keys(baseColors), 'KAI default');
  const folder = path.join(root, 'designs/mavericks-colors');
  const source = path.join(folder, 'themes.json');
  if (!fs.existsSync(source)) return [];
  const { themes } = JSON.parse(fs.readFileSync(source, 'utf8'));
  const results = [];
  const css = '/* Generated from themes.json by scripts/themes.mjs. Do not edit directly. */\n' + Object.entries(themes).map(([name, theme]) => {
    const colors = resolveTheme(baseColors, theme.colors);
    const pairs = validateTheme(colors, Object.keys(baseColors), name);
    results.push({ name, pairs });
    return themeRule(theme.selector, colors, theme.colorScheme);
  }).join('\n');
  const output = path.join(folder, 'themes.css');
  if (check) {
    if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== css) throw new Error('Dallas themes.css differs from themes.json; run node scripts/themes.mjs.');
  } else fs.writeFileSync(output, css);
  return results;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const results = buildThemes(undefined, { check: process.argv.includes('--check') });
  console.log(`Validated default theme and ${results.length} Dallas themes (text/action contrast ≥4.5, focus ≥3).`);
}
