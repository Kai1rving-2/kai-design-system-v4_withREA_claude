import { createRequire } from 'node:module';
import path from 'node:path';

// Optional offline toolchain reuse; no developer-specific path is committed.
export const requireTool = createRequire(process.env.KAI_TOOLCHAIN_ROOT
  ? path.resolve(process.env.KAI_TOOLCHAIN_ROOT, 'package.json')
  : new URL('../package.json', import.meta.url));
export function esbuild() {
  try { return requireTool('esbuild'); }
  catch { return createRequire(requireTool.resolve('vite'))('esbuild'); }
}
