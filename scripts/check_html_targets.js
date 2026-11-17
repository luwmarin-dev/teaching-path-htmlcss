import { getLessonById } from '../html-css/src/modules/curriculum.js';

['theme-2-structure', 'theme-4-pictures', 'theme-5-divs', 'theme-6-classes', 'theme-7-box-model'].forEach(id => {
  const l = getLessonById(id);
  console.log(`\n=== ${id} ===`);
  console.log('Current targetDescription:', l.targetDescription);
});
