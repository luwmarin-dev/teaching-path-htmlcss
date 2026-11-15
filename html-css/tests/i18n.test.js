import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { t, UI_TEXT } from '../src/modules/i18n.js';
import { localize, escapeHtml, formatProse } from '../src/app.js';

describe('i18n Localization Engine', () => {
  it('returns english translations by default', () => {
    assert.equal(t('startPractice', 'en'), '🚀 Start Practice');
    assert.equal(t('listOfTags', 'en'), '📋 List of Tags');
    assert.equal(t('codeEditorTitle', 'en'), 'Code (Edit Here)');
  });

  it('returns uzbek translations when lang is uz', () => {
    assert.equal(t('startPractice', 'uz'), '🚀 Amaliyotni boshlash');
    assert.equal(t('listOfTags', 'uz'), '📋 Teglar ro\'yxati');
    assert.equal(t('codeEditorTitle', 'uz'), 'Kod (Shu yerda tahrirlang)');
  });

  it('handles localize helper with objects and strings', () => {
    const bilingualObj = { en: 'Hello World', uz: 'Salom Dunyo' };
    assert.equal(localize(bilingualObj, 'en'), 'Hello World');
    assert.equal(localize(bilingualObj, 'uz'), 'Salom Dunyo');

    // Plain string fallback
    assert.equal(localize('Static String', 'en'), 'Static String');
    assert.equal(localize('Static String', 'uz'), 'Static String');

    // Null or undefined
    assert.equal(localize(null, 'en'), '');
    assert.equal(localize(undefined, 'uz'), '');
  });

  it('safely escapes HTML characters to protect DOM layout', () => {
    assert.equal(escapeHtml('<table><tr><td>'), '&lt;table&gt;&lt;tr&gt;&lt;td&gt;');
    assert.equal(escapeHtml('<script>alert("xss")</script>'), '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    assert.equal(escapeHtml(null), '');
  });

  it('formats prose with code pills and bold without allowing raw HTML elements', () => {
    const raw = 'HTML builds tables: `<table>` is frame, `<tr>` is **Table Row**.\nNext line.';
    const formatted = formatProse(raw);

    assert.equal(formatted.includes('<code class="inline-code">&lt;table&gt;</code>'), true);
    assert.equal(formatted.includes('<strong>Table Row</strong>'), true);
    assert.equal(formatted.includes('<br>Next line.'), true);
    // Crucial: No raw unescaped table tags that could break DOM table foster-parenting
    assert.equal(formatted.includes('<table>'), false);
    assert.equal(formatted.includes('<tr>'), false);
  });
});
