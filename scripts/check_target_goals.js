import { LESSONS } from '../html-css/src/modules/curriculum.js';

LESSONS.forEach((l, idx) => {
  console.log(`\n=== [${idx + 1}] ${l.id} ===`);
  console.log('targetDescription:', JSON.stringify(l.targetDescription));
  console.log('targetCode length:', typeof l.targetCode === 'object' ? `EN:${l.targetCode.en.length}, UZ:${l.targetCode.uz.length}` : l.targetCode.length);
});
