# ⚔️ Amaliy Loyiha: Kiber Qahramonlar Arenasi (Cyber Hero Arena)

Ushbu loyiha **CSS Grid**, **CSS Flexbox** va **JavaScript Class (OOP)** mavzularini bitta mukammal, interaktiv va qiziqarli amaliyotga jamlaydi.

---

## 📂 Faylni Ochish:
`ertangi-loyiha/index.html` faylini istalgan brauzerda (Chrome, Edge, Firefox) shunchaki sichqoncha bilan ikki marta bosib oching. Hech qanday internet yoki server kerak emas (100% oflayn ishlaydi).

---

## 🎯 O'quvchi Bajarishi Kerak Bo'lgan 4 Ta Asosiy Vazifa:

### 1-Vazifa: CSS Grid (2D Maket va Ustunlar)
* `.arena-container` ga qarang: Sahifa 2 ta asosiy ustunga bo'lingan: `grid-template-columns: 280px 1fr;` (chapda boshqaruv paneli, o'ngda jang maydoni).
* `.arena-header` va `.arena-footer` da `grid-column: 1 / -1;` ishlatilgan (butun eni bo'ylab cho'zilishi uchun).
* `.heroes-grid` da `grid-template-columns: repeat(3, 1fr);` orqali qahramonlar 3 ustunli panjaraga terilgan.

### 2-Vazifa: CSS Flexbox (Ichki Elementlarni Tartiblash)
* `.arena-header` da `display: flex; justify-content: space-between; align-items: center;` orqali logotip chapga, yashil nishon o'ng chetga tekislangan.
* Har bir `.hero-card` ichida `display: flex; flex-direction: column; justify-content: space-between;` yordamida yuqori qism (nom, belgi) va pastki qism (jon indikatori, holat) mukammal ajratilgan.

### 3-Vazifa: JavaScript Class (OOP Asoslari)
* Kod ichidagi `class Hero { ... }` sinfiga qarang:
  1. `constructor(id, name, role, hp, maxHp, attackPower, icon)` — har bir yangi qahramonga o'z xususiyatlarini biriktiradi.
  2. `attack(target)` — boshqa qahramonga zarba beruvchi metod.
  3. `heal()` — qahramon o'z jonini +20 ga oshiruvchi metod.

### 4-Vazifa: Yangi Qahramon Qo'shish (Amaliyot)
O'quvchi `heroes` massiviga 4-qahramonni qo'shsin:
```javascript
new Hero(4, "Kiber Paladin", "Qalqonchi", 150, 150, 15, "🛡️✨")
```
Va sahifani yangilab, yangi qahramon avtomatik ravishda Grid panjarasiga qo'shilganini va jangga kirisha olishini ko'rsin!

---

## 👨‍🏫 O'qituvchi Uchun Baholash Mezonlari:
1. **Grid tushunchasi**: 2D joylashuv va `repeat(3, 1fr)` ustunlarini tushuntira olishi.
2. **Flexbox tushunchasi**: Kartochka ichini vertikal tartiblashda `flex-direction: column` va `justify-content`ni bilishi.
3. **Class tushunchasi**: `class`, `constructor`, `this` va `new Hero(...)` ning vazifasini to'g'ri ayta olishi.
