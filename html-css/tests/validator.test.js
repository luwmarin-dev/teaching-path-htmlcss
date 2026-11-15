import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateChallenge } from '../src/modules/validator.js';

describe('Challenge Validator Engine', () => {
  it('handles empty or non-string code gracefully', () => {
    const res1 = validateChallenge('', []);
    assert.equal(res1.passed, false);

    const res2 = validateChallenge(null, []);
    assert.equal(res2.passed, false);
  });

  it('passes when required tag is present', () => {
    const code = '<h1>Super Dino</h1><p>Roar!</p>';
    const rules = [
      { type: 'hasTag', tag: 'h1', message: 'You need an <h1> heading tag!' }
    ];
    const result = validateChallenge(code, rules);
    assert.equal(result.passed, true);
    assert.equal(result.feedback.length, 0);
  });

  it('fails with helpful message when required tag is missing', () => {
    const code = '<p>Just a paragraph</p>';
    const rules = [
      { type: 'hasTag', tag: 'h1', message: 'You need an <h1> heading tag!' }
    ];
    const result = validateChallenge(code, rules);
    assert.equal(result.passed, false);
    assert.equal(result.feedback[0], 'You need an <h1> heading tag!');
  });

  it('checks for required attribute e.g. alt on img', () => {
    const codeWithAlt = '<img src="cat.png" alt="Cute kitten">';
    const codeWithoutAlt = '<img src="cat.png">';
    const rules = [
      { type: 'hasAttribute', tag: 'img', attribute: 'alt', message: 'Remember to add an alt description to your <img>!' }
    ];

    const passResult = validateChallenge(codeWithAlt, rules);
    assert.equal(passResult.passed, true);

    const failResult = validateChallenge(codeWithoutAlt, rules);
    assert.equal(failResult.passed, false);
    assert.equal(failResult.feedback[0], 'Remember to add an alt description to your <img>!');
  });

  it('checks for CSS property and value', () => {
    const code = '<style>h1 { color: hotpink; font-size: 32px; }</style><h1>Hi</h1>';
    const rules = [
      { type: 'hasCssProperty', property: 'color', valuePattern: /hotpink|pink/i, message: 'Set the color to hotpink!' },
      { type: 'hasCssProperty', property: 'font-size', message: 'Set font size!' }
    ];
    const result = validateChallenge(code, rules);
    assert.equal(result.passed, true);
  });

  it('checks for text content inside a tag with string or regexp or general text', () => {
    const code = '<button>Feed the Dino</button>';
    const rules = [
      { type: 'tagContainsText', tag: 'button', pattern: /feed/i, message: 'Your button text should mention "Feed"!' },
      { type: 'tagContainsText', tag: 'button', pattern: 'Dino', message: 'Your button should say Dino!' },
      { type: 'tagContainsText', tag: 'button', message: 'Your button should have text!' }
    ];
    const result = validateChallenge(code, rules);
    assert.equal(result.passed, true);
  });

  it('supports custom function validators and handles throws safely', () => {
    const code = '<div class="card">Hello</div>';
    const rules = [
      {
        type: 'custom',
        check: (src) => src.includes('class="card"'),
        message: 'Must have a class named "card"'
      },
      {
        type: 'custom',
        check: () => { throw new Error('Oops'); },
        message: 'Fails safely on throwing check'
      }
    ];
    const result = validateChallenge(code, rules);
    assert.equal(result.passed, false);
    assert.equal(result.feedback[0], 'Fails safely on throwing check');
  });
});
