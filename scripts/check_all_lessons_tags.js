import { LESSONS } from '../src/modules/curriculum.js';

LESSONS.forEach(l => {
  const checkStr = (val, path) => {
    if (typeof val === 'string' && /<[a-z!/][^>]*>/i.test(val)) {
      console.log(`Lesson ${l.id} [${path}]: ${val}`);
    } else if (typeof val === 'object' && val !== null) {
      for (const [k, v] of Object.entries(val)) {
        checkStr(v, `${path}.${k}`);
      }
    }
  };

  checkStr(l.teacherGuide, 'teacherGuide');
  checkStr(l.humanIntro, 'humanIntro');
  checkStr(l.summary, 'summary');
  checkStr(l.tag, 'tag');
});
