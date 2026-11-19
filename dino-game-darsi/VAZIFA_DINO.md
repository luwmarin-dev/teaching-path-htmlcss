# 🦖 Chrome Dino Game — 1-Dars: HTML, CSS & JavaScript Uzviy Zanjiri

Ushbu amaliy darslik o'quvchiga **HTML**, **CSS** va **JavaScript (OOP Class)** tushunchalarini bir-biridan ajratmasdan, ular o'yinda qanday qilib yagona tirik tizim sifatida ishlashini bosqichma-bosqich o'rgatadi.

---

## 📂 Faylni Ochish:
`dino-game-darsi/index.html` faylini brauzeringizda shunchaki 2 marta bosib oching. Hech qanday internet yoki server talab qilinmaydi (100% oflayn).

---

## 🔗 Asosiy Mantiqiy Qoida: HTML ➔ CSS ➔ JavaScript Uchligi

> [!IMPORTANT]
> **Nega shunchaki JavaScript klassida `this.width = 44` deb yozish bilan ekranda tayyor quti paydo bo'lib qolmaydi?**  
> Chunki JavaScript — bu faqat hisob-kitob va miya! U ekranga o'z-o'zidan quti chizmaydi. Personaj paydo bo'lishi uchun 3 ta til birlashishi shart:
> 1. **HTML** sahifada uning uchun uy/konteyner yaratadi: `<div id="dino" class="dino"></div>`.
> 2. **CSS** bo'sh qutiga aniq shakl, o'lcham, rang va joy beradi: `#dino { width: 44px; height: 48px; background: #10b981; }`.
> 3. **JavaScript (Class Dino)** esa o'sha qutining o'lchamlarini xotirada eslab qolib, klaviatura orqali uni harakatlantiradi va sakratadi!

---

## 🎯 5 Bosqichli O'qitish Metodikasi:

### 1-Qadam: Dino Qutisi va Class Skeleti (HTML, CSS va JS Zanjiri)
O'quvchi avval quti qanday ochilishini ko'radi:
- **HTML**: `<div id="dino" class="dino"></div>`
- **CSS**: `#dino { width: 44px; height: 48px; background: #10b981; }`
- **JavaScript**: Shu qutining boshqaruv markazini (sinf qolipini) e'lon qilamiz:
```javascript
class Dino {
  // Skelet qolip
}

// Qolip asosida dasturdagi ilk tirik obyektni yaratamiz:
const dino = new Dino();
```
* **Pedagogik Maqsad:** O'quvchi HTML qutisi va JS `class` qolipi o'rtasidagi bog'liqlikni tushunadi.

---

### 2-Qadam: O'lchamlar, Hitbox & CSS Bog'liqligi (`this.width` va `this.height`)
Nega `constructor()` ichida `this.width = 44` va `this.height = 48` deb yozamiz?
Chunki bu sonlar CSS'dagi qutining aniq fizik o'lchamlariga 1:1 teng bo'lishi shart!
```javascript
class Dino {
  constructor() {
    // 1. Fazoviy o'lchamlar (CSS width: 44px va height: 48px ga teng)
    this.width = 44;
    this.height = 48;

    // 2. Koordinatalar (CSS left: 60px va bottom: 0px ga teng)
    this.x = 60;
    this.y = 0;

    // 3. Mantiqiy harakat holati bayroqlari
    this.isJumping = false;
    this.isDucking = false;
  }
}

const dino = new Dino();
```
* **Pedagogik Maqsad:** O'quvchi `constructor()` nima uchun avtomatik ishga tushishi va `this` orqali CSS qutisining o'lchamlari xotiraga qanday biriktirilishini amalda anglaydi.

---

### 3-Qadam: Boshqaruv & Shakl O'zgarishi: Sakrash (Jump) va Egilish (Duck)
Dinozavr kaktuslardan sakrashi, uchar qushlar kelganda esa **EGILISHI** kerak:
- **Egilganda:** CSS qutisining bo'yi 26px ga tushadi, eni 55px ga cho'ziladi. JS'da ham xuddi shunday: `this.height = 26; this.width = 55;`. Shunda qush dinozavr ustidan tegmasdan o'tib ketadi!
- **Qad rostlaganda:** Asl o'lchamga qaytadi: `this.height = 48; this.width = 44;`.
```javascript
class Dino {
  constructor() {
    this.width = 44; this.height = 48;
    this.x = 60; this.y = 0;
    this.isJumping = false; this.isDucking = false;
  }

  jump() {
    if (!this.isJumping && !this.isDucking && this.y === 0) {
      this.isJumping = true;
    }
  }

  duck() {
    if (this.y === 0 && !this.isJumping) {
      this.isDucking = true;
      this.height = 26; // Shakl o'zgarishi
      this.width = 55;
    }
  }

  standUp() {
    this.isDucking = false;
    this.height = 48; // Qad rostlash
    this.width = 44;
  }
}

const dino = new Dino();

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') dino.jump();
  if (e.code === 'ArrowDown') dino.duck();
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowDown') dino.standUp();
});
```

---

### 4-Qadam: 60 FPS Gravitatsiya & Vertikal Harakat (`update()`)
Dinozavr osmonga uchib ketmay, fizik tortish kuchi orqali mayin yerga qaytib tushishi uchun har kadrda tezlik va balandlikni hisoblaymiz:
```javascript
class Dino {
  constructor() {
    this.width = 44; this.height = 48;
    this.x = 60; this.y = 0;
    this.isJumping = false; this.isDucking = false;
    this.velocityY = 0;
    this.jumpForce = 12;
    this.gravity = 0.6;
  }

  jump() {
    if (!this.isJumping && !this.isDucking && this.y === 0) {
      this.isJumping = true;
      this.velocityY = this.jumpForce;
    }
  }

  update() {
    if (this.isJumping) {
      this.y += this.velocityY;
      this.velocityY -= this.gravity;
      if (this.y <= 0) {
        this.y = 0;
        this.isJumping = false;
        this.velocityY = 0;
      }
    }
  }
}
```

---

### 5-Qadam: To'siqlar xilma-xilligi va AABB To'qnashuv Formulasi
3 xil kaktus va havoda uchuvchi qushlar bilan to'qnashuvni geometrik to'rtburchaklar kesishuvi (AABB) orqali hisoblaymiz:
```javascript
function checkCollision(dinoX, dinoY, dinoW, dinoH, obsX, obsY, obsW, obsH) {
  return (
    dinoX < obsX + obsW &&
    dinoX + dinoW > obsX &&
    dinoY + dinoH > obsY &&
    dinoY < obsY + obsH
  );
}
```

---

## 🛡️ Anti-Ko'chirish va Xavfsiz Ta'lim Himoyasi:

1. **Tayyor Nusxa Olish Tugmalari Olib Tashlandi:**
   - Dars boshida o'quvchi tayyor kodni shunchaki ko'chirib, Bloknot (Notepad)'ga tashlab tayyor natijaga erishmasligi uchun barcha erta "Copy Code" tugmalari olib tashlandi.
2. **Kod Ustidagi Yakuniy Nusxalash Tugmasi:**
   - Kod muharririning yuqorisida maxsus `[📋 To'liq O'yin Kodini Nusxalash]` tugmasi joylashtirildi.
   - Ushbu tugma **faqat va faqat barcha 5 ta bosqich to'liq o'z qo'li bilan yozilib muvaffaqiyatli yakunlangandagina** ochiladi!
   - Barcha qadamlar bajarilmaguncha bu tugma ko'rinmaydi.
