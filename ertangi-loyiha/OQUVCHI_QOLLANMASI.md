# ⚔️ Amaliy Loyiha: Kiber Qahramonlar Arenasi & Dino Game Darsi

Ushbu amaliy to'plam **CSS Flexbox**, **CSS Grid** va **JavaScript Class (OOP)** mavzularini o'quvchiga 0 dan, qadamma-qadam (skeletdan to'liq loyihagacha) o'rgatish uchun ishlab chiqilgan.

---

## 📂 Fayllarni Ochish (100% Oflayn):
1. **Asosiy Arena va Laboratoriya:**
   `ertangi-loyiha/index.html` faylini brauzeringizda 2 marta bosing.
   * Yuqoridagi **"⚔️ Kiber Qahramonlar Arenasi"** tugmasi orqali to'liq ishlaydigan interaktiv o'yinni ko'ring.
   * **"🧪 5 Bosqichli O'quv Laboratoriyasi"** tugmasi orqali Flexbox, Grid va JS Class bosqichlarini amalda sinang.
2. **Dinozavr Sakrash O'yini (1-Dars):**
   `dino-game-darsi/index.html` faylini oching. O'yinni to'g'ridan-to'g'ri o'ynang va "Karobka Rejimi" bilan "Haqiqiy Dinozavr" rejimi o'rtasidagi farqni ko'ring!

---

## 🎯 3 Asosiy Mavzu Bo'yicha 5 Bosqichli Metodika:

### 1. CSS Flexbox (1D Ichki Tartiblash):
* **1-Qadam (Bo'sh Konteyner):** `display: flex;` beriladi, ichida element yo'q.
* **2-Qadam (1 ta Quti):** Bitta element qo'yilib, `justify-content: flex-end / center` orqali uni surish o'rganiladi.
* **3-Qadam (3 ta Quti & gap):** 3 ta element orasiga `gap: 16px` va `justify-content: space-between` beriladi.
* **4-Qadam (Vertikal Markazlash):** `align-items: center` va `flex-direction: column` tushuntiriladi.
* **5-Qadam (Haqiqiy Navbar):** Logotip chapda va yashil indikator o'ngda turadigan Kiber Arena sarlavhasi yasaladi.

---

### 2. CSS Grid (2D Maket va Ustunlar):
* **1-Qadam (Bo'sh Panjara):** `display: grid;` berilgan bo'sh panjara skeleti.
* **2-Qadam (Ustunlar):** `grid-template-columns: repeat(3, 1fr);` orqali maydon 3 teng ustunga bo'linadi.
* **3-Qadam (Yon Panel):** `grid-template-columns: 280px 1fr;` bilan chap tomonda asboblar paneli, o'ng tomonda jang maydoni ajratiladi.
* **4-Qadam (Cho'zilish):** `grid-column: 1 / -1;` orqali sarlavha va futerni butun sahifa bo'ylab yoyish o'rgatiladi.
* **5-Qadam (To'liq Dashboard):** Kiber Arenaning 2D arxitekturasi birlashtiriladi.

---

### 3. JavaScript Class (OOP va Dino Game):
* **1-Qadam (Bo'sh Sinf):** `class Dino {}` yoki `class Hero {}` — na konstruktor, na metod bor.
* **2-Qadam (O'lchamlar & Karobka):** `constructor()` orqali eni, bo'yi, boshlang'ich koordinatalari (`x, y, width, height`) beriladi. Ekranda yashil hitbox chiziladi.
* **3-Qadam (Klaviaturani Tinglash):** `window.addEventListener('keydown', ...)` orqali Space tugmasi bosilganini ushlash.
* **4-Qadam (jump() va Gravitatsiya):** `jump()` metodi yoziladi, `this.isJumping = true` qilinadi, `setTimeout` orqali 500ms dan so'ng yana pastga qaytariladi.
* **5-Qadam (Haqiqiy Sprite):** Yashil karobka o'rniga haqiqiy pikselli T-Rex rasmi qo'yilib, kaktuslar bilan to'qnashuv o'rnatiladi.

---

## 👨‍🏫 O'qituvchi Uchun Tavsiya:
Dars davomida o'quvchiga darhol kodni to'liq berib yubormang. Avval `ertangi-loyiha/index.html` dagi laboratoriya orqali 1-qadamdan 5-qadamgacha birma-bir ko'rsating, so'ng `dino-game-darsi/index.html` da Space tugmasini bosib dinozavrni sakratishni berib amaliyot qildiring!
