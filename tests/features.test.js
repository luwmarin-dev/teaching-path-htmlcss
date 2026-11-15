import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Visual Labs and Pedagogical Enhancements', () => {
  it('has all 4 visual interactive labs implemented', () => {
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/boxModelLab.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/flexboxLab.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/colorLab.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/gridLab.js')), true);
  });

  it('includes Visual Labs button and views in index.html', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
    assert.equal(html.includes('id="btn-labs"'), true);
    assert.equal(html.includes('renderLabsView'), true);
    assert.equal(html.includes('renderBoxModelLab'), true);
    assert.equal(html.includes('renderFlexboxLab'), true);
    assert.equal(html.includes('renderColorLab'), true);
    assert.equal(html.includes('renderGridLab'), true);
  });

  it('includes Quick Tag chips and speech narrator in index.html', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
    assert.equal(html.includes('editor-quick-tags-bar'), true);
    assert.equal(html.includes('tag-insert-chip'), true);
    assert.equal(html.includes('btn-mission-read'), true);
    assert.equal(html.includes('speakText'), true);
  });

  it('verifies dedicated Uzbek and English standalone builds exist and contain all features', () => {
    const uzHtml = fs.readFileSync(path.join(rootDir, 'index_uz.html'), 'utf-8');
    const enHtml = fs.readFileSync(path.join(rootDir, 'index_en.html'), 'utf-8');

    assert.equal(uzHtml.includes('id="btn-labs"'), true);
    assert.equal(uzHtml.includes('renderLabsView'), true);
    assert.equal(uzHtml.includes('theme-24-filters'), true);

    assert.equal(enHtml.includes('id="btn-labs"'), true);
    assert.equal(enHtml.includes('renderLabsView'), true);
    assert.equal(enHtml.includes('theme-24-filters'), true);
  });
});
