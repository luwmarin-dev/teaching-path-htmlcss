const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../dino-game-darsi/index.html');
let content = fs.readFileSync(filePath, 'utf8');

const oldCheckBlockRegex = /else if \(currentStep === 7\) \{[\s\S]*?\n        \/\/ QAT'IY NATIJA:/m;

const newCheckBlock = `else if (currentStep === 7) {
            // 7-Qadam: checkCollision (supports both (dino, obs) objects and (dinoX, dinoY, ...) coordinates)
            if (typeof exports.checkCollision !== 'function') {
              message = "❌ 2-Talab: 'checkCollision(dino, obstacle)' to'qnashuv funksiyasi topilmadi!";
            } else {
              let collidesWhenHit = false;
              let collidesWhenMiss = true;

              if (exports.checkCollision.length > 2) {
                // Koordinata shakli: checkCollision(dinoX, dinoY, dinoW, dinoH, obsX, obsY, obsW, obsH)
                try {
                  collidesWhenHit = exports.checkCollision(60, 0, 44, 48, 70, 0, 25, 46);
                  collidesWhenMiss = exports.checkCollision(60, 0, 44, 48, 300, 0, 25, 46);
                } catch (_) {}
              } else {
                // Obyekt shakli: checkCollision(dino, obstacle)
                try {
                  const d = { x: 60, y: 0, width: 44, height: 48 };
                  const obsHit = { x: 70, y: 0, width: 25, height: 46 };
                  const obsMiss = { x: 300, y: 0, width: 25, height: 46 };
                  collidesWhenHit = exports.checkCollision(d, obsHit);
                  collidesWhenMiss = exports.checkCollision(d, obsMiss);
                } catch (_) {}
              }

              // Double check fallback
              if (collidesWhenHit !== true || collidesWhenMiss !== false) {
                try {
                  collidesWhenHit = exports.checkCollision(60, 0, 44, 48, 70, 0, 25, 46);
                  collidesWhenMiss = exports.checkCollision(60, 0, 44, 48, 300, 0, 25, 46);
                } catch (_) {}
              }

              if (collidesWhenHit !== true || collidesWhenMiss !== false) {
                message = "❌ AABB to'qnashuv matematikasi noto'g'ri ishlamoqda. 4 ta chegarani tekshiring: (dino.x < obs.x + obs.width && dino.x + dino.width > obs.x && dino.y < obs.y + obs.height && dino.y + dino.height > obs.y)";
              } else {
                isValid = true;
                message = "🏆 TABRIKLAYMIZ! Siz butun Chrome Dino o'yinini HTML, CSS va JavaScript Sinflari bilan NOLDAN O'Z QO'LINGIZ BILAN QURDINGIZ! Barcha to'siqlar va o'yin to'liq ishga tushdi!";
              }
            }
          }
        }

        // QAT'IY NATIJA:`;

if (!oldCheckBlockRegex.test(content)) {
  throw new Error('oldCheckBlockRegex did not match!');
}
content = content.replace(oldCheckBlockRegex, newCheckBlock);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Step 7 checkCollision logic updated successfully!');
