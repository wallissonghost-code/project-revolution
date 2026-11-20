import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
test('projeto inclui entrada e controles touch',()=>{const source=readFileSync('src/main.ts','utf8');assert.match(source,/pointerdown/);assert.match(source,/THREE\.WebGLRenderer/);});
