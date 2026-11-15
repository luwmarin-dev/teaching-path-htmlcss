import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getTopicLab } from '../src/modules/labs.js';
import { LESSONS } from '../src/modules/curriculum.js';
import { JS_STARTER_TEMPLATES } from '../src/modules/sandbox.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('JavaScript Features and Pedagogical Tools', () => {
  it('has 4-stage visual labs for all 24 JS themes', () => {
    LESSONS.forEach(l => {
      const lab = getTopicLab(l.id, l);
      assert.ok(lab, `Missing lab for ${l.id}`);
      assert.equal(lab.stages.length, 4, `Lab for ${l.id} must have 4 stages`);
      assert.ok(lab.stages[0].renderVisual(), `Stage 1 missing visual for ${l.id}`);
      assert.ok(lab.stages[3].renderVisual(), `Stage 4 missing visual for ${l.id}`);
    });
  });

  it('contains creative starter templates in sandbox', () => {
    assert.ok(JS_STARTER_TEMPLATES.length >= 3);
    assert.ok(JS_STARTER_TEMPLATES.some(t => t.id === 'template-clicker'));
    assert.ok(JS_STARTER_TEMPLATES.some(t => t.id === 'template-dice'));
    assert.ok(JS_STARTER_TEMPLATES.some(t => t.id === 'template-disco'));
  });

  it('verifies generated standalone files exist and contain full inlined code', () => {
    const mainHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
    const uzHtml = fs.readFileSync(path.join(rootDir, 'index_uz.html'), 'utf8');
    const enHtml = fs.readFileSync(path.join(rootDir, 'index_en.html'), 'utf8');

    assert.ok(mainHtml.includes('CodeCraft JS'));
    assert.ok(mainHtml.includes('btn-student-profile'));
    assert.ok(mainHtml.includes('js-console-body'));

    assert.ok(uzHtml.includes("Bolalar uchun JavaScript"));
    assert.ok(enHtml.includes("JavaScript for Kids"));
  });
});
