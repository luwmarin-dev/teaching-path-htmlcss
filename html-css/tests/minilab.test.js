import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getWhyNecessary, formatProse } from '../src/app.js';
import { LESSONS } from '../src/modules/curriculum.js';

describe('Interactive Mini-Lab & Spec Engine Tests', () => {
  it('provides comprehensive whyNecessary explanations for core tags and attributes in Uzbek and English', () => {
    const videoStep = { part: '<video controls width="320">', role: { en: 'Video Controls', uz: 'Video boshqaruvi' } };
    const whyUz = getWhyNecessary(videoStep, {}, 'uz');
    const whyEn = getWhyNecessary(videoStep, {}, 'en');

    assert.equal(whyUz.includes('controls') || whyUz.includes('foydalanuvchi'), true);
    assert.equal(whyEn.includes('controls') || whyEn.includes('player'), true);

    const doctypeStep = { part: '<!DOCTYPE html>', role: { en: 'HTML5 Standard', uz: 'HTML5 Standarti' } };
    const doctypeUz = getWhyNecessary(doctypeStep, {}, 'uz');
    assert.equal(doctypeUz.includes('Quirks Mode'), true);

    const titleStep = { part: '<title>', role: { en: 'Title', uz: 'Vkladka Nomi' } };
    const titleUz = getWhyNecessary(titleStep, {}, 'uz');
    assert.equal(titleUz.includes('xatcho\'p') || titleUz.includes('brauzer') || titleUz.includes('nomini'), true);
  });

  it('formatProse eliminates escaped literal \\n and transforms to <br>', () => {
    const rawWithLiteral = '1. <video>\\n2. controls\\n3. width="320"';
    const formatted = formatProse(rawWithLiteral);
    assert.equal(formatted.includes('\\n'), false);
    assert.equal(formatted.includes('<br>'), true);
    assert.equal(formatted.includes('<code class="inline-code">&lt;video&gt;</code>') || formatted.includes('&lt;video&gt;'), true);
  });

  it('theme-19 video anatomy provides complete working code and whyNecessary rationale', () => {
    const theme19 = LESSONS.find(l => l.id === 'theme-19-video');
    assert.ok(theme19, 'Theme 19 must exist');
    assert.ok(theme19.anatomy.length >= 2, 'Theme 19 must have multiple anatomy steps');

    const controlsStep = theme19.anatomy.find(a => a.part.includes('controls'));
    assert.ok(controlsStep, 'Controls step must be present');
    assert.ok(controlsStep.part.includes('<video'), 'Controls step must provide video tag context');
    assert.ok(controlsStep.whyNecessary, 'Controls step must have whyNecessary');
  });

  it('theme-2 structure anatomy provides complete doctype and title metadata', () => {
    const theme2 = LESSONS.find(l => l.id === 'theme-2-structure');
    assert.ok(theme2, 'Theme 2 must exist');
    const doctypeStep = theme2.anatomy.find(a => a.part.includes('DOCTYPE'));
    assert.ok(doctypeStep, 'Doctype step must exist');
  });
});
