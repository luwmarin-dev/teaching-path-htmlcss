import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { MODULES, LESSONS, getLessonById, getLessonsByModule } from '../src/modules/curriculum.js';

describe('JavaScript Curriculum Integrity', () => {
  it('contains all 4 core modules for Kids', () => {
    assert.equal(MODULES.length, 4);
    const modIds = MODULES.map(m => m.id);
    assert.deepEqual(modIds, ['mod-js-basics', 'mod-js-logic', 'mod-js-data', 'mod-js-dom']);
  });

  it('contains exactly 24 lessons', () => {
    assert.equal(LESSONS.length, 24);
  });

  it('ensures every lesson has humanLanguage, secretSandwich, stepBreakdown, and tagShowcase', () => {
    LESSONS.forEach(l => {
      assert.ok(l.title.uz && l.title.en, `Lesson ${l.id} missing title`);
      assert.ok(l.concept.uz && l.concept.en, `Lesson ${l.id} missing concept`);
      assert.ok(l.humanLanguage.uz && l.humanLanguage.en, `Lesson ${l.id} missing humanLanguage`);
      assert.ok(l.secretSandwich.uz && l.secretSandwich.en, `Lesson ${l.id} missing secretSandwich`);
      assert.ok(Array.isArray(l.stepBreakdown) && l.stepBreakdown.length > 0, `Lesson ${l.id} missing stepBreakdown`);
      assert.ok(Array.isArray(l.tagShowcase) && l.tagShowcase.length > 0, `Lesson ${l.id} missing tagShowcase`);
      assert.ok(typeof l.validate === 'function', `Lesson ${l.id} missing validate`);
    });
  });

  it('verifies all 24 lessons pass their own targetCode validation', () => {
    LESSONS.forEach(l => {
      const result = l.validate(l.targetCode);
      assert.equal(result.passed, true, `Lesson ${l.id} targetCode failed validation: ${result.message}`);
    });
  });

  it('allows fetching lessons by ID and Module', () => {
    const l1 = getLessonById('js-1-console');
    assert.ok(l1);
    assert.equal(l1.id, 'js-1-console');

    const mod1Lessons = getLessonsByModule('mod-js-basics');
    assert.equal(mod1Lessons.length, 6);
  });
});
