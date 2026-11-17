import { LESSONS } from '../javascript/src/modules/curriculum.js';

console.log('Total JS lessons:', LESSONS.length);
LESSONS.forEach((l, i) => {
  console.log(i + 1, l.id, {
    hasTargetDesc: !!l.targetDescription,
    hasTargetCode: !!l.targetCode,
    hasCommands: !!l.listOfCommands,
    hasBreakdown: !!l.stepBreakdown,
    hasFormula: !!l.secretSandwich,
    hasHuman: !!l.humanLanguage,
  });
});
