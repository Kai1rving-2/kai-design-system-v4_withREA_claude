/** Theme authoring stays independent of React and product-specific requests. */
export const actionRoles = {
  'action-bg': 'graphite', 'action-fg': 'text-inverse',
  'action-hover-bg': 'graphite-deep', 'action-hover-fg': 'text-inverse',
  'action-pressed-bg': 'graphite-deep', 'action-pressed-fg': 'text-inverse',
  'focus-ring': 'accent',
};

export function colorContrast(first, second) {
  const luminance = hex => {
    const full = hex.length === 4 ? '#' + [...hex.slice(1)].map(value => value + value).join('') : hex;
    return full.slice(1).match(/../g).map(value => parseInt(value, 16) / 255)
      .map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4)
      .reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0);
  };
  const [low, high] = [luminance(first), luminance(second)].sort((a, b) => a - b);
  return (high + .05) / (low + .05);
}

export function resolveTheme(baseColors, overrides = {}) {
  const colors = { ...baseColors, ...overrides };
  for (const [role, fallback] of Object.entries(actionRoles)) colors[role] = overrides[role] ?? colors[fallback];
  return colors;
}

export function validateTheme(colors, requiredKeys, name = 'theme') {
  for (const key of [...requiredKeys, ...Object.keys(actionRoles)]) {
    if (!/^#[\da-f]{6}$/i.test(colors[key] ?? '')) throw new Error(`${name}: missing or invalid color ${key}; use six-digit hex.`);
  }
  for (const [key, value] of Object.entries(colors)) {
    if (!/^[a-z][\w-]*$/.test(key) || !/^#[\da-f]{6}$/i.test(value)) throw new Error(`${name}: invalid color entry ${key}`);
  }
  const pairs = ['text-1', 'text-2', 'text-3', 'danger', 'fresh-deep', 'warm-600']
    .flatMap(fg => ['page', 'surface'].map(bg => [fg, bg]));
  pairs.push(['action-fg', 'action-bg'], ['action-hover-fg', 'action-hover-bg'], ['action-pressed-fg', 'action-pressed-bg'],
    ['accent', 'accent-wash'], ['accent-deep', 'accent-wash'], ['fresh-deep', 'fresh-wash']);
  const results = pairs.map(([foreground, background]) => ({ foreground, background, contrast: colorContrast(colors[foreground], colors[background]) }));
  for (const result of results) {
    if (result.contrast < 4.5) throw new Error(`${name}: ${result.foreground}/${result.background} contrast ${result.contrast.toFixed(2)} is below 4.5.`);
  }
  for (const background of ['page', 'surface']) {
    const contrast = colorContrast(colors['focus-ring'], colors[background]);
    if (contrast < 3) throw new Error(`${name}: focus-ring/${background} contrast ${contrast.toFixed(2)} is below 3.`);
  }
  return results;
}

export function themeRule(selector, colors, colorScheme = 'light') {
  if (!/^[\w\s.:#\[\]="'-]+$/.test(selector) || !['light', 'dark'].includes(colorScheme)) throw new Error('Invalid theme selector or color scheme.');
  return `${selector} {\n  color-scheme: ${colorScheme};\n` + Object.entries(colors).map(([key, value]) => {
    const channels = value.slice(1).match(/../g).map(channel => parseInt(channel, 16)).join(', ');
    return `  --${key}: ${value};\n  --${key}-rgb: ${channels};`;
  }).join('\n') + '\n}\n';
}
