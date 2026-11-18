import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LESSONS, MODULES, getLessonById, getLessonsByModule } from '../src/modules/curriculum.js';
import { validateChallenge } from '../src/modules/validator.js';

describe('Curriculum Data Integrity', () => {
  it('contains modules for HTML Core, CSS Core, Layout, Modern Mastery, Third-Party, and Bootstrap', () => {
    assert.equal(MODULES.length, 6);
    const moduleIds = MODULES.map(m => m.id);
    assert.equal(moduleIds.includes('html-core'), true);
    assert.equal(moduleIds.includes('css-core'), true);
    assert.equal(moduleIds.includes('full-powers'), true);
    assert.equal(moduleIds.includes('modern-mastery'), true);
    assert.equal(moduleIds.includes('third-party'), true);
    assert.equal(moduleIds.includes('bootstrap'), true);
  });

  it('contains all 32 foundational, intermediate, modern, third-party, and bootstrap themes', () => {
    assert.equal(LESSONS.length, 33);
  });

  it('strictly covers the teacher\'s initial 8 themes in order', () => {
    assert.equal(LESSONS[0].id, 'theme-0-typing');
    assert.equal(LESSONS[1].id, 'theme-1-tags');
    assert.equal(LESSONS[2].id, 'theme-2-structure');
    assert.equal(LESSONS[3].id, 'theme-3-tables');
    assert.equal(LESSONS[4].id, 'theme-4-pictures');
    assert.equal(LESSONS[5].id, 'theme-5-divs');
    assert.equal(LESSONS[6].id, 'theme-6-classes');
    assert.equal(LESSONS[7].id, 'theme-7-box-model');
    assert.equal(LESSONS[8].id, 'theme-8-transform');
  });

  it('ensures every lesson has bite-sized code, anatomy breakdowns, and list of tags', () => {
    for (const lesson of LESSONS) {
      assert.ok(lesson.id, `Lesson missing id`);
      assert.ok(lesson.title, `Lesson ${lesson.id} missing title`);
      assert.ok(lesson.module, `Lesson ${lesson.id} missing module`);
      assert.ok(lesson.icon, `Lesson ${lesson.id} missing icon`);
      assert.ok(lesson.initialCode, `Lesson ${lesson.id} missing initialCode`);
      assert.ok(lesson.targetCode, `Lesson ${lesson.id} missing targetCode`);
      assert.ok(lesson.targetDescription, `Lesson ${lesson.id} missing targetDescription`);
      assert.ok(lesson.teacherGuide, `Lesson ${lesson.id} missing teacherGuide`);
      assert.ok(lesson.challenge, `Lesson ${lesson.id} missing challenge`);
      assert.ok(Array.isArray(lesson.anatomy), `Lesson ${lesson.id} missing anatomy breakdown`);
      assert.ok(lesson.anatomy.length > 0, `Lesson ${lesson.id} anatomy is empty`);

      // Verify list of tags exists on every lesson for the "List of Tags" button
      assert.ok(Array.isArray(lesson.listOfTags), `Lesson ${lesson.id} missing listOfTags`);
      assert.ok(lesson.listOfTags.length > 0, `Lesson ${lesson.id} listOfTags is empty`);

      for (const t of lesson.listOfTags) {
        assert.ok(t.code, `Tag in ${lesson.id} missing code`);
        assert.ok(t.name, `Tag in ${lesson.id} missing name`);
        assert.ok(t.description, `Tag in ${lesson.id} missing description`);
      }
    }
  });

  it('verifies targetCode passes its own challenge validator in both English and Uzbek', () => {
    for (const lesson of LESSONS) {
      if (lesson.challenge && lesson.challenge.rules.length > 0) {
        const enCode = typeof lesson.targetCode === 'object' ? lesson.targetCode.en : lesson.targetCode;
        const uzCode = typeof lesson.targetCode === 'object' ? lesson.targetCode.uz : lesson.targetCode;

        const resultEn = validateChallenge(enCode, lesson.challenge.rules);
        assert.equal(
          resultEn.passed,
          true,
          `Lesson ${lesson.id} targetCode (EN) did not pass its own challenge rules: ${resultEn.feedback.join('; ')}`
        );

        const resultUz = validateChallenge(uzCode, lesson.challenge.rules);
        assert.equal(
          resultUz.passed,
          true,
          `Lesson ${lesson.id} targetCode (UZ) did not pass its own challenge rules: ${resultUz.feedback.join('; ')}`
        );
      }
    }
  });

  it('verifies initialCode does not prematurely pass its own challenge validator in either English or Uzbek', () => {
    for (const lesson of LESSONS) {
      if (lesson.challenge && lesson.challenge.rules.length > 0) {
        const enCode = typeof lesson.initialCode === 'object' ? lesson.initialCode.en : lesson.initialCode;
        const uzCode = typeof lesson.initialCode === 'object' ? lesson.initialCode.uz : lesson.initialCode;

        const resultEn = validateChallenge(enCode, lesson.challenge.rules);
        assert.equal(
          resultEn.passed,
          false,
          `Lesson ${lesson.id} initialCode (EN) prematurely passed its own challenge rules without student action!`
        );

        const resultUz = validateChallenge(uzCode, lesson.challenge.rules);
        assert.equal(
          resultUz.passed,
          false,
          `Lesson ${lesson.id} initialCode (UZ) prematurely passed its own challenge rules without student action!`
        );
      }
    }
  });

  it('allows fetching lessons by id and module', () => {
    const lesson = getLessonById('theme-1-tags');
    assert.ok(lesson);
    assert.equal(lesson.id, 'theme-1-tags');

    const htmlLessons = getLessonsByModule('html-core');
    assert.ok(htmlLessons.length > 0);
    assert.equal(htmlLessons.every(l => l.module === 'html-core'), true);
  });
});
