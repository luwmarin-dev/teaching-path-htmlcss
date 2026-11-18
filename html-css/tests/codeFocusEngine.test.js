import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TASK_CSS_START,
  TASK_CSS_END,
  TASK_HTML_START,
  TASK_HTML_END,
  hasTaskMarkers,
  extractTaskCode,
  mergeTaskIntoFullCode
} from '../src/modules/codeFocusEngine.js';

test('Code Focus Engine Unit Tests', async (t) => {
  await t.test('hasTaskMarkers detects task markers accurately', () => {
    assert.equal(hasTaskMarkers(''), false);
    assert.equal(hasTaskMarkers(null), false);
    assert.equal(hasTaskMarkers('<p>Simple code</p>'), false);
    assert.equal(hasTaskMarkers(`/* ${TASK_CSS_START} */`), true);
    assert.equal(hasTaskMarkers(`<!-- ${TASK_HTML_START} -->`), true);
  });

  await t.test('extractTaskCode returns full code when no markers exist', () => {
    const raw = '<div class="box">Hello</div>';
    assert.equal(extractTaskCode(raw), raw);
  });

  await t.test('extractTaskCode extracts CSS and HTML cleanly without base boilerplate', () => {
    const fullCode = `
<style>
  * { box-sizing: border-box; }
  .hub { background: #000; padding: 20px; }
  ${TASK_CSS_START}
  .hero-img {
    aspect-ratio: 16/9;
  }
  ${TASK_CSS_END}
  .footer { color: #888; }
</style>

<div class="hub">
  ${TASK_HTML_START}
  <figure>
    <img src="test.jpg" class="hero-img">
  </figure>
  ${TASK_HTML_END}
  <div class="footer">Copyright</div>
</div>
`;

    const extracted = extractTaskCode(fullCode);
    assert.ok(extracted.includes('.hero-img {'));
    assert.ok(extracted.includes('aspect-ratio: 16/9;'));
    assert.ok(extracted.includes('<figure>'));
    assert.ok(!extracted.includes('.hub { background: #000; padding: 20px; }'));
    assert.ok(!extracted.includes('.footer { color: #888; }'));
    assert.ok(!extracted.includes('<div class="footer">Copyright</div>'));
  });

  await t.test('mergeTaskIntoFullCode recombines user edits into base template', () => {
    const fullTemplate = `
<style>
  .hub { background: #000; }
  ${TASK_CSS_START}
  .hero-img { width: 100%; }
  ${TASK_CSS_END}
</style>
<div class="hub">
  ${TASK_HTML_START}
  <img src="test.jpg" class="hero-img">
  ${TASK_HTML_END}
</div>
`;

    const userTaskCode = `
<style>
  .hero-img {
    aspect-ratio: 16/9;
    object-fit: cover;
  }
</style>
<figure>
  <img src="test.jpg" class="hero-img">
  <figcaption>Rover</figcaption>
</figure>
`;

    const merged = mergeTaskIntoFullCode(fullTemplate, userTaskCode);
    assert.ok(merged.includes('.hub { background: #000; }'));
    assert.ok(merged.includes('aspect-ratio: 16/9;'));
    assert.ok(merged.includes('object-fit: cover;'));
    assert.ok(merged.includes('<figcaption>Rover</figcaption>'));
  });
});
