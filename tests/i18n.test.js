import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { t, UI_TEXT } from '../src/modules/i18n.js';
import { localize } from '../src/app.js';

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
});
