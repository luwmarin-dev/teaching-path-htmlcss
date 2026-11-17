const fs = require('fs');
const { chromium } = require('playwright');
const path = require('path');

// Google Chrome T-Rex 44x47 pixel grid
// 1 = solid, 0 = transparent, 2 = eye (transparent/white)
const DINO_PIXELS = [
  "......................xxxxxxxxxxxxxx........", // 0
  ".....................xxxxxxxxxxxxxxxx.......", // 1
  ".....................xx..xxxxxxxxxxxx.......", // 2 (eye at 23,24)
  ".....................xx..xxxxxxxxxxxx.......", // 3 (eye at 23,24)
  ".....................xxxxxxxxxxxxxxxx.......", // 4
  ".....................xxxxxxxxxxxxxxxx.......", // 5
  ".....................xxxxxxxxxxxxxxxx.......", // 6
  ".....................xxxxxxxxxxxxxxx........", // 7
  ".....................xxxxxxxx...............", // 8
  ".....................xxxxxxxxxxxxxx.........", // 9 (jaw)
  ".....................xxxxxxxx...............", // 10
  ".....................xxxxxxx................", // 11
  ".....................xxxxxx.................", // 12
  "....................xxxxxxx.................", // 13
  "...................xxxxxxxx.................", // 14
  "..................xxxxxxxxx.................", // 15
  ".................xxxxxxxxxx.................", // 16
  "x...............xxxxxxxxxxxx................", // 17 (tail tip)
  "xxx............xxxxxxxxxxxxx................", // 18
  "xxxx..........xxxxxxxxxxxxxx................", // 19
  "xxxxx........xxxxxxxxxxxxxxx................", // 20
  "xxxxxx......xxxxxxxxxxxxxxxxx...............", // 21
  "xxxxxxx....xxxxxxxxxxxxxxxxxxxx.............", // 22 (arm)
  "xxxxxxxx..xxxxxxxxxxxxxxxxxxxxx.............", // 23
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxx................", // 24
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxx................", // 25
  "xxxxxxxxxxxxxxxxxxxxxxxxxxx.................", // 26
  "xxxxxxxxxxxxxxxxxxxxxxxxxx..................", // 27
  ".xxxxxxxxxxxxxxxxxxxxxxxxx..................", // 28
  "..xxxxxxxxxxxxxxxxxxxxxxx...................", // 29
  "...xxxxxxxxxxxxxxxxxxxxx....................", // 30
  "....xxxxxxxxxxxxxxxxxxx.....................", // 31
  ".....xxxxxxxxxxxxxxxxx......................", // 32
  "......xxxxxxxxxxxxxxx.......................", // 33
  ".......xxxxxxxxxxxxx........................", // 34
  "........xxxxxxxxxxx.........................", // 35
  ".........xxxx.xxxx..........................", // 36 (legs split)
  ".........xxxx.xxxx..........................", // 37
  ".........xxxx.xxxx..........................", // 38
  ".........xxxx.xxxx..........................", // 39
  ".........xxxx.xxxx..........................", // 40
  ".........xxxx.xxxx..........................", // 41
  ".........xxxx.xxxx..........................", // 42
  ".........xxxx.xxxx..........................", // 43
  ".........xxxx.xxxx..........................", // 44
  ".........xxxxxx.xxxxxx......................", // 45 (feet)
  ".........xxxxxx.xxxxxx......................"  // 46
];

let rects = [];
for (let y = 0; y < DINO_PIXELS.length; y++) {
  const row = DINO_PIXELS[y];
  for (let x = 0; x < row.length; x++) {
    if (row[x] === 'x') {
      rects.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
    }
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 47" class="dino-svg" shape-rendering="crispEdges" fill="#535353">
  ${rects.join('')}
</svg>`;

const html = `
<!DOCTYPE html>
<html>
<body style="background: #111; display:flex; justify-content:center; align-items:center; height:100vh;">
  <div style="width: 132px; height: 141px; background: white; padding: 20px; border-radius: 8px;">
    ${svg}
  </div>
</body>
</html>
`;

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.screenshot({ path: path.join(__dirname, 'test_dino_pixel.png') });
  await browser.close();
  console.log('Saved test_dino_pixel.png');
}
main();
