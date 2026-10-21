import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { requireTool } from './toolchain.mjs';

const ts = requireTool('typescript');
const root = fileURLToPath(new URL('..', import.meta.url));
const reactTypes = path.dirname(requireTool.resolve('@types/react/package.json'));
const program = ts.createProgram([path.join(root,'tests/consumer.tsx')], {
  noEmit: true, strict: true, skipLibCheck: false, jsx: ts.JsxEmit.React,
  target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext, moduleResolution: ts.ModuleResolutionKind.Bundler,
  types: [], baseUrl: root, paths: { react: [path.join(reactTypes,'index.d.ts')], 'react/*': [path.join(reactTypes,'*')] },
});
const errors = ts.getPreEmitDiagnostics(program);
if (errors.length) {
  console.error(ts.formatDiagnosticsWithColorAndContext(errors, { getCurrentDirectory: () => root, getCanonicalFileName: f => f, getNewLine: () => '\n' }));
  process.exitCode = 1;
} else console.log('Public TypeScript consumer passed (including invalid-prop checks).');
