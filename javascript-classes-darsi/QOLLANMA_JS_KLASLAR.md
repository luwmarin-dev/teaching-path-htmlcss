# ⚡ JavaScript Klasslar (OOP) Mukammal O'quv Qo'llanmasi

Ushbu qo'llanma **JavaScript Classes (Obyektga Yo'naltirilgan Dasturlash - OOP)** konsepsiyalarini noldan boshlab professional darajagacha o'quvchilarga qiziqarli, o'yinbop va mustahkam o'rgatish uchun ishlab chiqilgan.

---

## 🗺️ 7 Bosqichli Ta'lim Yo'l Xaritasi

| Qadam | Mavzu | Asosiy Konsepsiya | Hayotiy O'xshatish |
| :---: | :--- | :--- | :--- |
| **1** | **Class & new** | Nega class kerak? Qolip vs Obyekt | Bino chizmasi va qurilgan uylar |
| **2** | **constructor & this** | Shaxsiy xususiyatlar va o'zlik | Tug'uruqxona anketasi |
| **3** | **Metodlar (Methods)** | Qobiliyatlar va o'zaro ta'sir | Insonning yurishi va gapirishi |
| **4** | **Vorislik (extends & super)**| Meros olish (Ota -> Bola klass) | Otasining ko'z rangini olgan bola |
| **5** | **Getter & Setter** | Xususiyatlarni xavfsiz himoyalash | Bankomatdagi mablag' tekshiruvi |
| **6** | **static** | Butun sinfga tegishli vositalar | Zavod peshtaxtasidagi hisoblagich |
| **7** | **#private Fields** | 100% yopiq maxfiy ma'lumotlar | Uy devori ortidagi temir seyf |

---

## 1-QADAM: Class nima va Nega kerak?

### 🎯 Maqsad
O'quvchiga 100 ta qahramon kerak bo'lsa, har birini qo'lda alohida `{ name: 'Artur', hp: 100 }` deb yozib chiqish qanchalik noqulay ekanini ko'rsatish va `class` qolipini kashf qilish.

```javascript
// 1. Qolip (class) yaratamiz:
class Hero {
  // Hozircha bo'sh chizma
}

// 2. 'new' orqali jonli obyektlar (instansiyalar) yasaymiz:
const hero1 = new Hero();
const hero2 = new Hero();

console.log(hero1); // Hero {}
```

* 🧠 **Mantiqiy Sir**: `class` — bu shunchaki qog'ozdagi reja. O'yinda harakatlanishi uchun `new` orqali xotirada joy ajratib obyekt yaratish shart!

---

## 2-QADAM: Konstruktor va `this`

### 🎯 Maqsad
Har bir obyektga shaxsiy ism, jon (HP) va parametrlar berish. `this` so'zining o'zlikni ifodalashini o'rganish.

```javascript
class Hero {
  constructor(name, hp) {
    this.name = name; // Mening ismim
    this.hp = hp;     // Mening jonim
    this.level = 1;   // Boshlang'ich darajam
  }
}

const artur = new Hero('Artur', 100);
const lanselot = new Hero('Lanselot', 120);

console.log(artur.name);    // 'Artur'
console.log(lanselot.hp);   // 120
```

* 🧠 **Mantiqiy Sir**: `this` doimo aynan shu daqiqada `new` orqali tug'ilayotgan bitta qahramonning o'ziga qaraydi.

---

## 3-QADAM: Metodlar — Harakatlar va Qobiliyatlar

### 🎯 Maqsad
Obyektlarga nafaqat xususiyat, balki harakat (funksiya) qo'shish.

```javascript
class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  // Hujum qilish metodi:
  attack(target) {
    target.hp -= 20;
    console.log(`${this.name} ${target.name}ga 20 zarba berdi!`);
  }

  // Davolanish metodi:
  heal() {
    this.hp += 15;
    console.log(`${this.name} o'zini 15 HP davoladi!`);
  }
}

const artur = new Hero('Artur', 100);
const dushman = new Hero('Monster', 80);

artur.attack(dushman); // Monster HP: 60 qoldi
artur.heal();          // Artur HP: 115 bo'ldi
```

---

## 4-QADAM: Meros Olish (`extends` va `super()`)

### 🎯 Maqsad
Kodni takrorlamasdan, mavjud Hero asosida yangi Sehrgar (Mage) va Jangchi (Warrior) turlarini yaratish.

```javascript
class Mage extends Hero {
  constructor(name, hp, mana) {
    // 1. Ota klassning (Hero) konstruktoriga ism va jonni topshiramiz:
    super(name, hp);

    // 2. Sehrgarning qo'shimcha shaxsiy kuchi:
    this.mana = mana;
  }

  castSpell(target) {
    if (this.mana >= 15) {
      this.mana -= 15;
      target.hp -= 35;
      console.log(`${this.name} olovli shar otdi!`);
    }
  }
}

const merlin = new Mage('Merlin', 80, 50);
merlin.attack(dushman);   // Ota klassdan meros bo'lgan metod
merlin.castSpell(dushman);// O'zining shaxsiy sehr metodi
```

---

## 5-QADAM: Getter va Setter (`get` va `set`)

### 🎯 Maqsad
O'yin qoidalarini tasodifiy buzulishdan saqlash (masalan, HP manfiy songa tushib ketmasligi).

```javascript
class SafeHero {
  constructor(name, hp) {
    this.name = name;
    this._hp = hp;
  }

  get hp() {
    return this._hp;
  }

  set hp(val) {
    // Xavfsizlik tekshiruvi:
    if (val < 0) {
      this._hp = 0; // Jon 0 dan past bo'lmaydi!
    } else {
      this._hp = val;
    }
  }
}

const hero = new SafeHero('Ragnar', 100);
hero.hp = -50;
console.log(hero.hp); // Natija: 0 (Manfiy bo'lishdan saqlandi!)
```

---

## 6-QADAM: Statik Metodlar (`static`)

### 🎯 Maqsad
Bitta qahramonga emas, balki butun `Hero` sinfiga tegishli umumiy statistika va yordamchi vositalar.

```javascript
class Hero {
  static totalHeroesCount = 0; // Global hisoblagich

  constructor(name) {
    this.name = name;
    Hero.totalHeroesCount++;   // Har gal yangi qahramonda oshadi
  }

  static compare(h1, h2) {
    return h1.hp > h2.hp ? h1.name : h2.name;
  }
}

const h1 = new Hero('Artur');
const h2 = new Hero('Lanselot');

console.log(Hero.totalHeroesCount); // 2
```

---

## 7-QADAM: Haqiqiy Xususiy Maydonlar (`#private`)

### 🎯 Maqsad
Sinf tashqarisidan turib mutlaqo ko'rib va o'zgartirib bo'lmaydigan maxfiy maydonlar (ES2022+).

```javascript
class VaultHero {
  #secretPin; // Maxfiy maydon

  constructor(name, pin) {
    this.name = name;
    this.#secretPin = pin;
  }

  unlock(enteredPin) {
    if (enteredPin === this.#secretPin) {
      return 'Xazina ochildi!';
    }
    return 'Xato parol!';
  }
}

const v = new VaultHero('Guardian', 1234);
// console.log(v.#secretPin); // ❌ SyntaxError: Private field
console.log(v.unlock(1234));  // ✅ 'Xazina ochildi!'
```

---

## 🚀 O'qituvchi Uchun Tavsiyalar
1. **Nazariyani oldin ochiq ko'rsating**: O'quvchi kodni ekranda to'liq ko'rsin, o'qisin, ranglarini tahlil qilsin.
2. **Mantiqiy savol bilan sinang**: Faqatgina savolga to'g'ri javob bergach, keyingi qadamga o'tishiga imkon bering.
3. **Jonli Arenada sinang**: Yuqoridagi "Qahramonlar Laboratoriyasi"da tugmalarni bosib, HP va Mana barlarining qanday o'zgarishini o'quvchiga ko'rsating!
