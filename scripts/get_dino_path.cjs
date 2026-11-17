const fs = require('fs');

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

let pathParts = [];
for (let y = 0; y < DINO_PIXELS.length; y++) {
  const row = DINO_PIXELS[y];
  let start = -1;
  for (let x = 0; x <= row.length; x++) {
    if (x < row.length && row[x] === 'x') {
      if (start === -1) start = x;
    } else {
      if (start !== -1) {
        pathParts.push(`M${start} ${y}h${x - start}v1h-${x - start}z`);
        start = -1;
      }
    }
  }
}

const pathStr = pathParts.join(' ');
console.log('Path length:', pathStr.length);
fs.writeFileSync('dino_path.txt', pathStr);
