import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LESSONS, MODULES } from '../src/modules/curriculum.js';
import { escapeHtml, localize } from '../src/app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('Visual Labs and Pedagogical Enhancements', () => {
  it('has dedicated topic visual labs implemented for all 24 themes', () => {
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/topicLabs.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/boxModelLab.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/flexboxLab.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/colorLab.js')), true);
    assert.equal(fs.existsSync(path.join(rootDir, 'src/labs/gridLab.js')), true);

    const topicLabsContent = fs.readFileSync(path.join(rootDir, 'src/labs/topicLabs.js'), 'utf-8');
    for (const lesson of LESSONS) {
      assert.equal(topicLabsContent.includes(lesson.id), true, `Topic lab missing for ${lesson.id}`);
    }
  });

  it('includes Per-Topic Visual Lab button and views in index.html', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
    assert.equal(html.includes('btn-topic-lab'), true);
    assert.equal(html.includes('renderTopicLab'), true);
    assert.equal(html.includes('openTopicLabModal'), true);
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

    assert.equal(uzHtml.includes('btn-topic-lab'), true);
    assert.equal(uzHtml.includes('renderTopicLab'), true);
    assert.equal(uzHtml.includes('theme-24-filters'), true);

    assert.equal(enHtml.includes('btn-topic-lab'), true);
    assert.equal(enHtml.includes('renderTopicLab'), true);
    assert.equal(enHtml.includes('theme-24-filters'), true);
  });

  it('renders sidebar cleanly with exactly 24 un-nested list items in both languages', () => {
    ['en', 'uz'].forEach(lang => {
      let html = '';
      MODULES.forEach(mod => {
        const modLessons = LESSONS.filter(l => l.module === mod.id);
        if (modLessons.length === 0) return;
        html += `<div class="nav-section-title">${escapeHtml(localize(mod.title, lang))}</div>`;
        html += `<ul class="lesson-list">`;
        modLessons.forEach(lesson => {
          html += `
            <li class="lesson-item" data-lesson-id="${lesson.id}">
              <span class="lesson-item-icon">${lesson.icon}</span>
              <span class="lesson-item-text">${escapeHtml(localize(lesson.title, lang))}</span>
            </li>
          `;
        });
        html += `</ul>`;
      });

      const openLi = (html.match(/<li\b/g) || []).length;
      const closeLi = (html.match(/<\/li>/g) || []).length;
      assert.equal(openLi, 24, `Expected 24 <li> for ${lang}`);
      assert.equal(closeLi, 24, `Expected 24 </li> for ${lang}`);

      // Ensure no raw unescaped < or > inside lesson titles
      for (const lesson of LESSONS) {
        const titleStr = localize(lesson.title, lang);
        assert.equal(titleStr.includes('<'), false, `Lesson ${lesson.id} has raw < in title`);
        assert.equal(titleStr.includes('>'), false, `Lesson ${lesson.id} has raw > in title`);
      }
    });
  });
});
