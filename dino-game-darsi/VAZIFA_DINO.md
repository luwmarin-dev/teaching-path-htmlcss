# 🦖 Chrome Dino Game — 1-Dars: JS Class va Sakrash Mexanikasi

Ushbu amaliy darslik o'quvchiga **JavaScript Class (OOP)** tushunchasini o'yin dasturlash orqali bosqichma-bosqich, eng sodda poydevordan boshlab tushuntiradi.

---

## 📂 Faylni Ochish:
`dino-game-darsi/index.html` faylini brauzeringizda shunchaki 2 marta bosib oching. Internet yoki maxsus server shart emas (100% oflayn).

---

## 🎯 5 Bosqichli O'qitish Metodikasi:

### 1-Qadam: Bo'sh Class E'lon Qilish (Skelet)
O'quvchi boshida hech qanday metod yoki konstruktorsiz, shunchaki sinf e'lon qilishni o'rganadi:
```javascript
class Dino {
  // Hozircha ichi bo'sh
}

const dino = new Dino();
console.log(dino); // Dino {}
```
* **Maqsad:** O'quvchi sinf e'lon qilish sintaksisini tushunadi.

---

### 2-Qadam: O'lchamlar va Yashil Karobka (Hitbox)
Barcha 2D va 3D o'yinlarda avval personaj oddiy to'rtburchak (hitbox / karobka) sifatida yaratiladi:
```javascript
class Dino {
  constructor() {
    this.width = 50;        // Eni (piksel)
    this.height = 50;       // Bo'yi (piksel)
    this.x = 60;            // Chapdan joylashuv
    this.y = 0;             // Yerdan balandlik
    this.isJumping = false; // Hozir sakrayaptimi?
  }
}
```
* **Maqsad:** Konstruktor (`constructor`) va `this` orqali obyekt xususiyatlarini saqlashni o'rganadi.

---

### 3-Qadam: Klaviaturani Tinglash (EventListener)
Kompyuterga "Space" (Bo'sh joy) yoki "⬆️ Tepaga strelka" bosilganda nima qilish kerakligini ulaymiz:
```javascript
window.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'ArrowUp') {
    event.preventDefault();
    dino.jump(); // Dinozavrga sakrash buyrug'i
  }
});
```
* **Maqsad:** Hodisalar (Events) va sinf metodini bog'lash.

---

### 4-Qadam: jump() Metodi va Yerga Qaytish (Fizika)
Dino havoga sakrashi va ma'lum vaqtdan so'ng yana yerga tushishi kerak:
```javascript
class Dino {
  constructor() {
    this.isJumping = false;
    this.jumpHeight = 110;
  }

  jump() {
    // Agar allaqachon havoda bo'lsa, ikkinchi marta sakramaydi:
    if (this.isJumping) return;

    this.isJumping = true;
    dinoElement.style.bottom = `${34 + this.jumpHeight}px`;

    // 500 millisekunddan so'ng pastga qaytarish:
    setTimeout(() => {
      dinoElement.style.bottom = '34px';
      this.isJumping = false; // Yana sakrashga ruxsat ochildi
    }, 500);
  }
}
```
* **Maqsad:** `setTimeout`, holatni boshqarish (`isJumping`) va cheklovlar qo'yish.

---

### 5-Qadam: Karobkani Haqiqiy Dinozavr Rasmiga Almashtirish!
Mexanika tayyor bo'lgach, yashil karobka o'rniga haqiqiy Chrome T-Rex pikselli rasmi (SVG) qo'yiladi:
* Sahifadagi **"📦 Karobka Rejimi"** va **"🦖 Haqiqiy Dinozavr"** slayderini yoqib ko'ring!
* O'quvchi o'z ko'zi bilan kod xuddi o'sha to'rtburchakni boshqarayotgani va rasm faqat uning ustiga kiygizilgan "kostyum" ekanini anglaydi!

---

## 🚀 O'quvchi Uchun Qiziqarli Amaliy Topshiriqlar:
1. **Sakrash balandligini oshirish:** Slayder orqali yoki kod ichidagi `jumpHeight` qiymatini `150px` qilib ko'ring.
2. **Kaktus tezligi:** Slayder orqali o'yin tezligini oshirib, o'z rekordingizni yangilang.
3. **Qo'shimcha boshqaruv:** Sichqoncha yoki barmoq bilan ekrandagi **"🚀 SAKRASH (JUMP)"** tugmasini bosib o'ynab ko'ring.

---

## 👨‍🏫 O'qituvchi Uchun Baholash Savollari:
1. `class Dino` nega kerak va `new Dino()` nima qiladi?
2. `this.isJumping` bayrog'i (flag) nima uchun zarur? (Agar u bo'lmasa nima bo'ladi?)
3. O'yinlarda nima uchun avval personaj "karobka" (hitbox) sifatida yaratiladi?
