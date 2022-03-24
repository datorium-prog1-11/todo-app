# To do projekta sākums

- Paraug demonstrējums
- Programmas izstrādes plānošana
- Iepriekšējās nodarbības atkārtojums

## Programmas plānojums

- Kādas funkcijas mēs gribētu aplikācijā
- Dizaina skice
- Prasību pilnveide izstrādes laikā

## Uzdevums nr 1.

Sarakstīt 4 funkcijas, kam ir jābūt mūsu aplikācijā.

## Paraug demonstrējums

---

## Sākuma kods

index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>
  <body>
    <script src="./script.js"></script>
  </body>
</html>
```

---

# Atkārtojums

## Interneta pārlūka izstrādes rīki:

- f12
- ctrl+shift+i
- `...` -> Papildus rīki -> izstrādātāja rīki
- `console.log('čau')` lai izvadītu

---

## Mainīgo definīcija:

```js
let sveiciens = "Čau";
```

- Mainīgo definīciju sāk ar atslēgvārdu `let` vai `const`
- Tam seko mainīgā nosaukums `sveiciens`
- Tam seko vienādības zīme (`=`) (piešķiršanas operators)
- Tam seko mainīgā vērtība (`'Čau'`)
- Rindu beidzam ar semikolu `;`

Varam izveidot arī skaitliskus mainīgos vai pat saglabāt vairākas vērtības:

```js
let skaitlis = 6; // Skaitlis Number
const dalSkaitlis = 4.2; // daļskaitlis Number
let patiess = true; // Boolean
const nepatiess = false; // Boolean
let tukšs = undefined; // undefined

const saraksts = [1, 2, 3]; // Array
let telGramata = {
  // Object
  Luna: "21234556",
  Jura: "22334455",
};
```

---

## 2. Uzdevums:

Izveidot sekojošus mainīgos:

- 2. Teksta mainīgie
- 2. Skaitliski mainīgie

Izvadīt šos mainīgos konsolē.

---

# Uzdevumi

- Ievietot lapā bildi no interneta
- Pievienojam lapai Ikonu
- Uzģenerējam nejaušu skaitli izmantojot `Math.random()` funkciju

  - Saglabājam to mainīgajā
  - Izvadām konsolē

- Pajautājam lietotājam vai skaitlis ir lielāks par 5
  - Sareizinām nejuašo skaitli ar `10`, lai dabūtu nejaušu vērtību no 1 līdz 10
  - Izmantojam `confirm()` funkciju lai paprasītu izvēli no lietotāja
  - Izmantojam `if` izteiksmi, lai salīzinātu rezultātus
