# 🚀 CodeCraft Academy: Offline Coding School for Kids

An interactive, 100% offline educational coding platform divided into two comprehensive tracks: **HTML & CSS** and **JavaScript**, specifically designed for classroom computer labs with rotating student shifts.

---

## 📁 Project Structure (Divided Workspace)

```
project teacher jarvis/
├── index.html                   🚀 Academy Launchpad (Choose course with 1 click)
├── start.bat                    🖥️ Windows 1-click offline launcher
├── package.json                 📦 Root test & build runner (53 passing tests)
│
├── html-css/                    🎨 Track 1: HTML & CSS (24 Themes)
│   ├── index.html               🇬🇧 English Standalone Build
│   ├── index_uz.html            🇺🇿 100% Pure Uzbek Standalone Build
│   ├── index_en.html            🇬🇧 Dedicated English Edition
│   ├── src/                     🧩 Modular source code & curriculum
│   ├── public/                  🎨 Stylesheets & assets
│   ├── scripts/build.js         ⚡ Single-file bundler
│   ├── tests/                   🧪 40 Automated unit tests
│   └── start.bat                🚀 1-Click launcher
│
└── javascript/                  ⚡ Track 2: JavaScript (24 Themes)
    ├── index.html               🇬🇧 English Standalone Build
    ├── index_uz.html            🇺🇿 100% Pure Uzbek Standalone Build
    ├── index_en.html            🇬🇧 Dedicated English Edition
    ├── src/                     🧩 Modular source code, curriculum & labs
    ├── public/                  🎨 Stylesheets & assets
    ├── scripts/build.js         ⚡ Single-file bundler
    ├── tests/                   🧪 13 Automated unit tests
    └── start.bat                🚀 1-Click launcher
```

---

## ⚡ 100% Offline & Zero Server Requirements

- **Runs natively via `file://` protocol**: Double-click `index.html` on any PC running Windows 7, 8, 10, or modern macOS/Linux.
- **No Node.js, XAMPP, or web server needed**: Everything runs out-of-the-box directly inside the browser.
- **USB Portable**: Copy this whole folder to a flash drive to distribute across all 10 lab computers.

---

## 🕒 Lab Shift Management (3 Exact Shifts)

Both tracks are integrated with the offline `localStorage` multi-student profile system configured for your 3 classroom shifts:
1. **1-Smena**: 10:30 – 12:00
2. **2-Smena**: 14:00 – 15:30
3. **3-Smena**: 15:30 – 17:00

### Features:
- **Instant Student Switching**: Students choose their shift and avatar to immediately load their individual star count, completed lessons, and last saved code.
- **Shift Filter Pills**: Filter registered students with 1 click: `[Barcha Smenalar]` `[1-Smena]` `[2-Smena]` `[3-Smena]`.
- **USB Backup & Restore**: Teachers can export all student profiles from one PC to a `.json` backup and import them onto any of the other 9 computers.

---

## 📚 JavaScript Curriculum (24 Curated Themes)

### Modul 1: JS Boshlanishi va O'zgaruvchilar (Themes 1 - 6)
1. `console.log()` va `alert()` — Salom Dunyo!
2. `let` va `const` — Sehrli Qutilar (O'zgaruvchilar)
3. Ma'lumot Turlari — String, Number, Boolean
4. Matematik Amallar — Hisob-Kitob (+, -, *, /, %)
5. Sehrli Matnlar — Template Literals (``${}``)
6. Foydalanuvchidan Ma'lumot Olish — `prompt()` va `confirm()`

### Modul 2: Mantiq, Shartlar va Funksiyalar (Themes 7 - 12)
7. Shartlar — `if` va `else` (Qarorlar Qabul Qilish)
8. Taqqoslash va Mantiq — `===`, `>`, `<`, `&&`, `||`
9. Ko'p Shartli Tanlov — `else if` (Baholash Tizimi)
10. Funksiyalar — Qayta Ishlatiluvchi Sehrli Buyruqlar
11. Parametrlar va Natija Qaytarish (`return`)
12. Arrow Funksiyalar — Zamonaviy Qisqa Yozuv (`() => {}`)

### Modul 3: Massivlar, Tsikllar va Obyektlar (Themes 13 - 18)
13. Massivlar — Sehrli Ryukzak va Ro'yxatlar (`[]`)
14. Massiv Metodlari — `push()` va `pop()`
15. Takrorlash Mashinasi — `for` Tsikli
16. Shartli Takrorlash — `while` Tsikli
17. Obyektlar — Qahramon Xususiyatlari (`{}`)
18. O'yin Do'koni — Obyektlar Massivi

### Modul 4: Jonli Veb Sahifa va Mini-O'yinlar (Themes 19 - 24)
19. Sahifani Boshqarish — `querySelector()`
20. Matn va Rangni O'zgartirish — `textContent` va `style`
21. Hodisalar — `addEventListener('click')` (Jonli Tugma)
22. Taymerlar — `setTimeout()` va `setInterval()`
23. Tasodifiy Sonlar va O'yin Oshiqlari — `Math.random()`
24. Super Mini-Loyiha — Jonli Kliker O'yini (Clicker Game)

---

## 🧪 Testing Both Projects

Run all 53 automated unit tests from the root directory:
```bash
npm test
```
Or test each project individually:
```bash
npm run test:html
npm run test:js
```
