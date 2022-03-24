# 12-17 15-ned: Interakcija ar lietotāju - JS Notikumi

- Prot izveidot jaunu HTML elementu izmantojot JavaScript.
- Prot pievienot HTML elementu eksistējošam HTML elementa saturam.

## Atsākam, kur palikām

- Ja Koda nav es iedodu (Github)
- Atkārtojam, kas ir Notikumi (event)

---

## 1. Nodarbība

### Sagatavojam vidi

- Nodzēšam lieko JS un pogas id
- Mums vairs nav nepieciešams klausīties uz pogu, jo klausīsimies formu

### Uzdevums

Pievienot klausītāju uz pogas `submit` notikumu. Kad notiek formas `submit`, izvadām konsolē "SUBMIT".

### Uzdevums:

Apturēt formas noklusēto darbību, kadnotiek `submit`.

### Izveidojam HTML elementu ar JS

```js
let paragrafs = document.createElement('p');
console.log('p', paragrafs);
```

---

## 2. Nodarbība

### Pievienojam mūsu elementam saturu

```js
paragrafs.innerHTML = 'Čau visiem!';
console.log('p', paragrafs);
```

### Pievienojam mūsu paragrāfu dokumenta saturam

- Atrodam `<body>` elementu - `document.body`
- Pievienojam elementu

```js
document.body.append(paragrafs);
```

### Uzdevums

Kad notiek formas `submit`:
- [x] Atrodam todo saraksta elementu
- [x] Izveidojam jaunu `li` elementu
- [x] Ierakstam šī `li` elementa saturā vērtību no `input`
- [x] Pievienojam šo `li` elementu darbu sarakstam

---
---

# 12-10 14-ned: Interakcija ar lietotāju - JS Notikumi

Prot izveidot funkciju, kas klausās uz notikumiem HTML dokumentā.

## Atsākam, kur palikām

- Ja Koda nav es iedodu (Github)
- Atkārtojam kas ir funkcija

### Uzdevums:

Pievienot jaunu teksta lauku mūsu formai ar sākotnējo vērtību. Nolasīt vērtību no šī lauka izmantojot formas elementu.

---

## 1. Nodarbība

### Notikumi

> Nodzēšam liekos formas elementus un pievinojam pogu

- Lai zinātu, kad lietotājs veic kādud arbību mēs klausāmies uz "notikumiem" (event)
- Interneta pārlūks piedāvā dažādus notikumus:

    * Kad lapa ielādējas
    * Kad nospiesta poga
    * Kad pakustināta pele
    * utt...

#### Uzdevums:

Atrast pogu un izvadīt konsolē.

#### Klausāmies uz pogas klikšķa

```js
poga.addEventListener('click', function() {
    console.log('click');
});
```

- Notikuma klausītājs saņem `event` parametru

```js
poga.addEventListener('click', function(event) {
    console.log('notikums', event);
});
```

#### Uzdevums:

Izmantojot teksta lauka `keydown` notikumu, izvadīt teksta lauka vērtīb pēc taustiņa nospiešanas.

---

## 2. Nodarbība

### Klausāmies uz formas apstiprināšanu

- Mēs varam apstiprināt visu formas elementu izmaiņas vienlaicīgi.

```js
forma.addEventListener('submit', function(event) {
    console.log(event);
});
```

- Ar `event` parametra palīdzību mēs varam mainīt interneta pārlūka darbību.
- Apturam lapas refrešošanu ar `event.preventDefault()`

#### Uzdevums:

Nolasām teksta lauka vērtību un izvadām to konsolē, kad notiek formas `submit` notikums.

---
---

# 12-02 13-ned: Formas un datu ievade

- Prot izveidot formas elementu.
- Prot izveidot HTML ievad elementu.
- Prot izveidot HTML pogu.
- Prot izveidot funkciju, kas klausās uz notikumiem HTML dokumentā.

## 1. Nodarbība

### Atsākam, kur palikām

- Ja Koda nav es iedodu (Github)
- Atkārtojam kas ir funkcija
- Izveidojam formu:

```html
<form>
    <input type="text" name="teksts" />
    <button>Pievienot</button>
</form>
```

### Uzdevums:

Uzrakstīt funkciju, kas sareizina 2 skaitļus un izvada konsolē.

### Funkcijas atgriezeniskā vertība

- Funkcija var atgriezt vērtību ar `return` atslēgvārdu
- Kad funkcija atgriež vērtību, tās izpilde beidzās. Neatkarīgi no tā vai ir vēl kods pēc `return` rindiņas sasniegšanas.

```js
function saskaitit(a, b) {
    return a + b;
}
```

### HTML Forma

- Lai iegūtu datus no lietotāja mēs izmantojam Formas. Līdzīgi, kā veidlapas.
- Formas laukos lietotājs vari ievadīt prasīto informāciju.
- Tālāk mēs šo informāciju varam apstrādāt.

```html
<form>
    <!-- Formas saturs -->
</form>
```

### HTML Formas elementi

- Ir speciāli elementi ko raksta iekšā HTML formā, kas ir domāti datu savākšanai.
- Tos sauc par ievad elementiem:

```html
<input type="text" name="teksts">
<input type="checkbox" name="keksis">
<select name="izvele">
    <option value="">--Izvēlies vienu--</option>
    <option value="viens">Pirmā iespēja</option>
    <option value="divi">Otrā iespēja</option>
</select>
<button>Spied šeit</button>
```

### Pievienojam mūsu formai vajadzīgos ielementus

- Ko mums vajag rezultātā?
- Teksta ievade
- Poga

### Uzdevums:

Atrast HTML formu JS un izvadīt konsolē.

---

## 2. Notikumi

- Lai zinātu, kad lietotājs veic kādud arbību mēs klausāmies uz "notikumiem" (event)
- Interneta pārlūks piedāvā dažādus notikumus:

    * Kad lapa ielādējas
    * Kad nospiesta poga
    * Kad pakustināta pele
    * utt...

### Uzdevums:

Atrast pogu un izvadīt konsolē.

### Klausāmies uz pogas klikšķa

```js
poga.addEventListener('click', function() {
    console.log('click');
});
```

- Notikuma klausītājs saņem `event` parametru

```js
poga.addEventListener('click', function(event) {
    console.log('notikums', event);
});
```

- Ar `event` parametra palīdzību mēs varam mainīt interneta pārlūka darbību

### Klausāmies uz formas apstiprināšanu

```js
forma.addEventListener('submit', function(event) {
    console.log(event);
});
```

- Apstrādājam "submit" notikumu - mainām tā sākotnējo darbību
- Iegūstam formas lauku izmantojot lauka vārdu (`name`):

```js
let tekstaLauks = forma.elements["teksts"];
```

- Iegūstam ievad-lauka vērtību ar `.value` atribūtu:

```js
let lietotajsIevadija = tekstaLauks.value;
```

---
---

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
