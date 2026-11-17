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

  it('ensures every lesson has humanLanguage, secretSandwich, stepBreakdown, tagShowcase, targetDescription, and listOfCommands', () => {
    LESSONS.forEach(l => {
      assert.ok(l.title.uz && l.title.en, `Lesson ${l.id} missing title`);
      assert.ok(l.concept.uz && l.concept.en, `Lesson ${l.id} missing concept`);
      assert.ok(l.humanLanguage.uz && l.humanLanguage.en, `Lesson ${l.id} missing humanLanguage`);
      assert.ok(l.secretSandwich.uz && l.secretSandwich.en, `Lesson ${l.id} missing secretSandwich`);
      assert.ok(l.targetDescription && l.targetDescription.uz && l.targetDescription.en, `Lesson ${l.id} missing targetDescription`);
      assert.ok(Array.isArray(l.listOfCommands) && l.listOfCommands.length > 0, `Lesson ${l.id} missing listOfCommands`);
      for (const cmd of l.listOfCommands) {
        assert.ok(cmd.code, `Command in ${l.id} missing code`);
        assert.ok(cmd.name, `Command in ${l.id} missing name`);
        assert.ok(cmd.description, `Command in ${l.id} missing description`);
      }
      assert.ok(Array.isArray(l.stepBreakdown) && l.stepBreakdown.length > 0, `Lesson ${l.id} missing stepBreakdown`);
      assert.ok(Array.isArray(l.tagShowcase) && l.tagShowcase.length > 0, `Lesson ${l.id} missing tagShowcase`);
      assert.ok(typeof l.validate === 'function', `Lesson ${l.id} missing validate`);
    });
  });

  it('verifies all 24 lessons pass their own targetCode validation in both English and Uzbek', () => {
    LESSONS.forEach(l => {
      const enCode = typeof l.targetCode === 'object' ? l.targetCode.en : l.targetCode;
      const uzCode = typeof l.targetCode === 'object' ? l.targetCode.uz : l.targetCode;

      const resEn = l.validate(enCode);
      assert.equal(resEn.passed, true, `Lesson ${l.id} targetCode (EN) failed validation: ${resEn.message}`);

      const resUz = l.validate(uzCode);
      assert.equal(resUz.passed, true, `Lesson ${l.id} targetCode (UZ) failed validation: ${resUz.message}`);
    });
  });

  it('verifies all 24 initialCodes do not prematurely pass validation in either English or Uzbek', () => {
    LESSONS.forEach(l => {
      const enCode = typeof l.initialCode === 'object' ? l.initialCode.en : l.initialCode;
      const uzCode = typeof l.initialCode === 'object' ? l.initialCode.uz : l.initialCode;

      const resEn = l.validate(enCode);
      assert.equal(resEn.passed, false, `Lesson ${l.id} initialCode (EN) prematurely passed validation without student action!`);

      const resUz = l.validate(uzCode);
      assert.equal(resUz.passed, false, `Lesson ${l.id} initialCode (UZ) prematurely passed validation without student action!`);
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
