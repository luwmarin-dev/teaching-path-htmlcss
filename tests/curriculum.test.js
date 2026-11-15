import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { LESSONS, MODULES, getLessonById, getLessonsByModule } from '../src/modules/curriculum.js';
import { validateChallenge } from '../src/modules/validator.js';

describe('Curriculum Data Integrity', () => {
  it('contains modules for HTML, CSS, and Projects', () => {
    assert.equal(MODULES.length >= 3, true);
    const moduleIds = MODULES.map(m => m.id);
    assert.equal(moduleIds.includes('html'), true);
    assert.equal(moduleIds.includes('css'), true);
    assert.equal(moduleIds.includes('projects'), true);
  });

  it('contains rich lessons covering foundational and creative topics', () => {
    assert.equal(LESSONS.length >= 8, true);
  });

  it('ensures every lesson has bite-sized code and step-by-step anatomy breakdowns', () => {
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

      for (const step of lesson.anatomy) {
        assert.ok(step.part, `Step in ${lesson.id} missing part`);
        assert.ok(step.role, `Step in ${lesson.id} missing role`);
        assert.ok(step.explanation, `Step in ${lesson.id} missing explanation`);
        assert.ok(step.effect, `Step in ${lesson.id} missing effect on result`);
      }
    }
  });

  it('verifies targetCode passes its own challenge validator', () => {
    for (const lesson of LESSONS) {
      if (lesson.challenge && lesson.challenge.rules.length > 0) {
        const result = validateChallenge(lesson.targetCode, lesson.challenge.rules);
        assert.equal(
          result.passed,
          true,
          `Lesson ${lesson.id} targetCode did not pass its own challenge rules: ${result.feedback.join('; ')}`
        );
      }
    }
  });

  it('allows fetching lessons by id and module', () => {
    const lesson = getLessonById('html-headings');
    assert.ok(lesson);
    assert.equal(lesson.id, 'html-headings');

    const htmlLessons = getLessonsByModule('html');
    assert.ok(htmlLessons.length > 0);
    assert.equal(htmlLessons.every(l => l.module === 'html'), true);
  });
});
