/**
 * JavaScript Free Sandbox Starter Templates for Kids
 * 100% Offline, ready-to-play mini-games and experiments.
 */

export const JS_STARTER_TEMPLATES = [
  {
    id: 'template-clicker',
    name: { uz: "🏆 Kliker Mini-O'yini", en: "🏆 Clicker Mini-Game" },
    desc: { uz: "Tugmani bosib ochko to'plash va 20 ballga yetganda g'alaba qilish!", en: "Click to gain points and win at 20 clicks!" },
    code: `// 🏆 Super Kliker O'yini
let score = 0;
const countEl = document.querySelector("#count");
const clickBtn = document.querySelector("#click-btn");
const box = document.querySelector("#box");

box.textContent = "O'yinni Boshlang! 🚀";

clickBtn.addEventListener("click", () => {
  score++;
  countEl.textContent = score;
  
  if (score % 2 === 0) {
    box.style.backgroundColor = "#10b981";
    box.textContent = "Super! +1 ⭐";
  } else {
    box.style.backgroundColor = "#8b5cf6";
    box.textContent = "Davom eting! 🔥";
  }

  if (score === 20) {
    alert("G'ALABA! SIZ 20 BALL TO'PLADINGIZ! 🏆🎉");
    box.style.backgroundColor = "gold";
    box.textContent = "CHEMPION! 👑";
  }
});
`
  },
  {
    id: 'template-dice',
    name: { uz: "🎲 O'yin Kubigi (Dice Roller)", en: "🎲 Dice Roller Simulator" },
    desc: { uz: "Tugmani bosib 1 dan 6 gacha tasodifiy son chiqaruvchi zar!", en: "Roll a random die 1 to 6 every time you click!" },
    code: `// 🎲 O'yin Kubigi (Zar) Simulyatori
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");

btn.textContent = "Zar Tashlash 🎲";
box.textContent = "Kubik tayyor!";

btn.addEventListener("click", () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  const diceIcons = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  
  box.textContent = \`\${diceIcons[dice - 1]} Son: \${dice}\`;
  box.style.fontSize = "22px";
  box.style.backgroundColor = dice === 6 ? "gold" : "#3b82f6";
  
  console.log("Tushgan zar:", dice);
});
`
  },
  {
    id: 'template-disco',
    name: { uz: "🌈 Rangli Disko Chiroqlar", en: "🌈 Color Disco Light Show" },
    desc: { uz: "setInterval taymeri orqali fon ranglarini har soniyada o'zgartirish!", en: "Automatic color changing light show using setInterval!" },
    code: `// 🌈 Rangli Disko Chiroqlar
const box = document.querySelector("#box");
const colors = ["#ef4444", "#f97316", "#eab308", "#10b981", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];
let index = 0;

box.textContent = "DISKO! 🪩";
box.style.color = "white";

setInterval(() => {
  box.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 500);

console.log("Disko chiroqlar yoqildi! 🎶");
`
  }
];

export function getStarterTemplateById(id) {
  return JS_STARTER_TEMPLATES.find(t => t.id === id) || JS_STARTER_TEMPLATES[0];
}
