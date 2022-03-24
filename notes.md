# 11-26-12-ned: JS Funkcijas

Prot definēt JavaScript funkciju. Saprot parametru konceptu. Prot padot funkcijai parametrus. Prot izmantot funkcijas parametrus. Prot atgriezt vērtību no funkcijas.

## 1. Nodarbība

###  Atsākam, kur palikām

- Ja Koda nav es iedodu (Github)
- Atskatāmies uz "Todo aplikācijas" prasībām
    * Nepieciešams saraksts, kur attēlot darbus
    * Nepieciešams veids, kā ievadīt datus
- Pievienojam Sarakstu:

```html
<ul>
    <li>Viens</li>
    <li>Divi</li>
</ul>
```

### Uzdevums:

Atrast saraksta elementu JS un izvadīt to konsolē.

### Funkcijas:

- Funkcijas skaidrojums
> Funkcija ir kā mainīgais, kurā var saglabāt kodu. Mēs rakstam funkcijas, lai organizētu kodu. Kā arī, lai mijiedarbotos ar citu cilvēku rakstītu kodu (API).

- Mēs jau pazīstam funkcijas:

    * `console.log('čau')`
    * `document.querySelector('#my-element-id')`

- Definējam funkcijas
```js
function sveiciens() {
    console.log('čau');
}
```

- Funkcijas izsaukums:
```js
sveiciens();
```

### Uzdevums

Definēt funkciju, kas atrod un izvada HTML elementu.

---

## 2. Nodarbība

### Parametri

- Funkcijas var pieņemt mainīgos, kā parametrus
- Tas ļauj pielietot vienu un to pašu loģiku dažādai informācijai

```js
function sveiciens(vards) {
    console.log(`Čau, ${vards}!`);
}
```

2. Papildinām mūsu funkciju ar parametriem un izmantojam tos

### Uzdevums:

Definēt funkciju `saskaitit`, kas pieņem 2 skaitļus un izvada to summu konsolē.

### Funkcijas atgriezeniskā vertība

- Funkcija var atgriezt vērtību ar `return` atslēgvārdu
- Kad funkcija atgriež vērtību, tās izpilde beidzās. Neatkarīgi no tā vai ir vēl kods pēc `return` rindiņas sasniegšanas.

```js
function saskaitit(a, b) {
    return a + b;
}
```

---
---

## HTML Elementa atrašana JS:

- Izmantojam `id` atribūtu
- Selektors līdzīgi kā CSS tikai sākas ar `#` - `#id`
- Izmantojam `document.querySelector` funkciju
- Piemērs:

```html
<p id="teksts">Šeit ir teksts!</p>
```

```js
let tekstsElem = document.querySelector('#teksts');
```

---

# HTML elementu atrašana JS
Saprot, kā darbojas `id` atribūts. Saprot, kā darbojas `id` atribūts. Spēj atrast HTML elementu izmantojot JS.

---
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

---
---

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
