import test from 'node:test';
import assert from 'node:assert/strict';
import { TYPING_TEXTS, calculateTypingStats, renderTypingLabHtml } from '../src/modules/typingDiagnostic.js';

test('Typing Diagnostic Engine Unit Tests', async (t) => {
  await t.test('has English and Russian text passages', () => {
    assert.ok(TYPING_TEXTS.en);
    assert.ok(TYPING_TEXTS.ru);
    assert.ok(TYPING_TEXTS.en.text.length > 200, 'English text is substantial');
    assert.ok(TYPING_TEXTS.ru.text.length > 200, 'Russian text is substantial');
  });

  await t.test('calculateTypingStats calculates WPM, CPM, and Accuracy cleanly', () => {
    const targetText = 'Hello World';
    const typedText = 'Hello World';
    const elapsedSeconds = 60;

    const stats = calculateTypingStats({ targetText, typedText, elapsedSeconds });
    assert.equal(stats.correctChars, 11);
    assert.equal(stats.errors, 0);
    assert.equal(stats.accuracy, 100);
    assert.equal(stats.cpm, 11);
    assert.equal(stats.wpm, 2);
    assert.equal(stats.isFinished, true);
  });

  await t.test('calculateTypingStats tracks errors accurately', () => {
    const targetText = 'Hello World';
    const typedText = 'Hello Wurld';
    const elapsedSeconds = 30;

    const stats = calculateTypingStats({ targetText, typedText, elapsedSeconds });
    assert.equal(stats.errors, 1);
    assert.equal(stats.accuracy, 91);
  });

  await t.test('renderTypingLabHtml generates complete interactive UI markup', () => {
    const htmlUz = renderTypingLabHtml('en', 'uz');
    assert.ok(htmlUz.includes('KLAVIATURA DIAGNOSTIKASI'));
    assert.ok(htmlUz.includes('typing-lang-btn'));
    assert.ok(htmlUz.includes('typing-input-box'));

    const htmlRu = renderTypingLabHtml('ru', 'en');
    assert.ok(htmlRu.includes('KEYBOARD DIAGNOSTIC'));
    assert.ok(htmlRu.includes('Технологии и Путь Программиста'));
  });
});
