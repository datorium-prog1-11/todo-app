# Elementa dzēšana un uzdevuma izpildīšana 2

## Atsākam kur palikām

- Kods GitHub: https://github.com/datorium-prog1-11/todo-app

## 3. Uzdevums

Izmantojot `element.closest()` funkciju atrast un izvadīt todo elementu, kas būtu jādzēš.

---
---

# Elementa dzēšana un uzdevuma izpildīšana

## Iegūstam elementu no JS veidotām "dzēst" pogām

- Padodam caur event listener

## Iegūstam TODO elementu no "dzēst" notikuma.

- Katram notikumam ir `target` atribūts
- Pogas klikšķim `target` ir tā poga uz kā uzklikšķināts
- No pogas mēs varam iegūt ieraksta elementu apskatot tās "vecākus" (parents)
- `element.parent`
- `element.closest("[query]")`

---
---

# Koda sakārtošana

- Prot sadalīt un pārvietot savu kodu
- Prot izmantot komentārus, lai paskaidrotu, kas kodā notiek

## Sakārtojam kodu

- Šobrīd mums ir daudz lieka koda iekš `script.js`
- Mums vajadzētu kādu vietu kur varam eksperimentēt

### Mūsu tagadējā koda arhitektūra - Kur kas stāv?

- `index.html` - tas ir mūsu HTML kods - elementi ko mēs redzam kad ielādējas lapa
- `style.css` - šis ir mūsu galvenais CSS fails - tas nosaka lapas kopējo izskatu un izkārtojumu
- `script.js` - tas ir mūsu "galvenais" JS fails - tur sākas mūsu JS loģika
- `todo-ieraksts` - šī ir mape kur stāv visa kods, kas strādā ar individuāliem TODO ierakstiem
- `todo-ieraksts/todo-ieraksts.js` - šis ir JS kods, kas operē ar TODO ierakstu - veido, dzēš, izpilda?
- `todo-ieraksts/todo-ieraksts.css` - šis ir CSS fails, kas nosaka TODO ieraksta izskatu

### Uzdevums: Pārvietot visu kodu, kas nav saistīts ar Mūsu aplikāciju:

- No `script.js` faila
- Uz `piemers.js` failu

### Uzdevums: Pievienojam komentārus katrai `script.js` rindai

```js
// Sameklēsim mūsu dzēst pogas - `querySelectorAll` atradīs visas
let dzestPogaElems = document.querySelectorAll('.todo-ieraksts_dzest'); // atrod pogas pēc klases no HTML
// izejam cauri visām atrastajām pogām izmantojot `for..of` ciklu
for (const dzestElem of dzestPogaElems) {
    // Katrai atrastajai klausās uz peles klikšķi (`click`)
    dzestElem.addEventListener('click', function() {
        // Kad notiek klikšķis, izsaucam `dzest()` metodi no `todo-ieraksts.js`
        TodoIeraksts.dzest();
    });
}
```

---
---

# Darbības ar saraksta elementiem 3

- Prot patstāvīgi veidot projektu pēc dotajām prasībām.
- Saprot funkcijas darbības principus un tās iekļaušanu objektā.
- Prot patstāvīgi izveidot dzēšanas funkciju un savienot to ar attiecīgajiem koda elementiem.

## Elementa dzēšana

Mēs jau izveidojām `dzēst` pogu. Tagad tai jāpiešķir darbība.

### 1. Uzdevums

Pievienot klikšķa klausītāju dzēst pogām, kas ir HTML dokumentā. Kad lietotājs uzspiež uz pogas `dzēst`, izvadīt konsolē "DZĒST".

#### Risinājums:

```js
let dzestPogaElems = document.querySelectorAll('.todo-ieraksts_dzest');
for (const dzestPogaElem of dzestPogaElems) {
    dzestPogaElem.addEventListener('click', function() {
        console.log('dzēst');
    });
}
```

### 2. Uzdevums

Pievienot klikšķa klausītāju ar JS izveidotām pogoām. Kad lietotājs uzspiež uz pogas `dzēst`, izvadīt konsolē "DZĒST".

#### Risinājums:

```js
const TodoIeraksts = {

    jauns: function(jaunaTodoTeksts) {
        // ...
        const dzestPoga = document.createElement('button');
        // ...

        dzestPoga.addEventListener('click', function() {
            TodoIeraksts.dzest();
        });

        // ...
    },

    // ...
}
```

### Izveidojam centralizētu `dzēst` metodi

Lai mēs varētu dzēšanas loģiku vienmēr apstrādāt vienā vietā.

```js
const TodoIeraksts = {
    // ...

    dzest: function() {
        console.log('TODO ieraksts dzēst');
    }
};

```

Un pēc tam izsaucam, tur kur mums bija logs `console.log('dzēst')`.

---
---

# Darbības ar saraksta elementiem 2

- Prot pievienot funkcionalitāti dinaimski izveidotiem elementiem ar JS

# Atsākam, kur palikām

- Ja Koda nav es iedodu (Github)
- https://github.com/datorium-prog1-11/todo-app

# Validācijas problēma

Pievienojot elementu mēs nevaram vairs precīzi salīdzināt jauno tekstu ar esošajiem teksta fragmentiem.

## Uzdevums: Kādas idejas?

- Pielikt tekstu `"dzēst"` jaunam tekstam tekstam?
- Ielikt tekstu atsevišķā elementā?

### Risinājums:

Ieliekam todo elementa tekstu atsevišķā elementā.

```html
<span class="todo-ieraksts__teksts">Todo elementa teksts</span>
```

Piem.:
```html
<li class="todo-ieraksts">
  <span class="todo-ieraksts__teksts">Aiziet uz veikalu</span>
  <button class="todo-ieraksts_dzest">dzēst</button>
</li>
```

## Salabojam Validāciju:

Izmantojam jaunot teksta elementu nevis visu todo elementu, lai pārbaudītu esošos uzdevumus:

```js
let todoIerakstiTeksti = document.querySelectorAll('.todo-ieraksts__teksts');

for (const ieraksts of todoIerakstiTeksti) {
    // Validācija ...
}
```

## Uzdevums:

`todo-ieaksts.js` failā `jauns` metodē pievienot nepieciešamo kodu, lai izveidotu <span> elementu un ierakstītu todo ieraksta tekstu tajā.

### Risinājums:

```js
const ierakstaTekstsElem = document.createElement('span');
ierakstaTekstsElem.classList.add('todo-ieraksts__teksts');
ierakstaTekstsElem.innerHTML = jaunaTodoTeksts;

ierakstsElem.appendChild(ierakstaTekstsElem);
```

---
---

# q2 03-11 10-ned: Atkārtojums - Darbības ar saraksta elementiem + objekti

- Prot izveidot objektu ar vairākiem laukiem
- Prot paplašināt esošu programmu ar jaunu funkcionalitāti.
- Prot pievienot jaunus elementus esošā HTML

### Objekti:

- Mums koda ir objekta piemērs `todo-ieraksts.js` failā.

Piemērs:
```js
let obis = {
    lauks: 'vērtība'
}
```

#### Uzdevums:

Definēt objektu, kas varētu aprakstīt cilvēku ar sekojošiem laukiem: vards, vecums, adrese.

#### Uzdevums:

Izveidot masīvu (sarakstu) ar vismaz 3 cilvēkiem.

---
---

# q2 03-04 9-ned: Darbības ar saraksta elementiem

- Prot paplašināt esošu programmu ar jaunu funkcionalitāti.
- Prot pievienot jaunus elementus esošā HTML

## Uzdevumu dzēšana

### Uzdevums:

Nosaukt darbības, kas mums jāveic, lai izveidotu todo ierakstu dzēšanas funkcionalitāti.

### Uzdevums:

Veikt soļus

### Uzdevums:

Pierakstīt komentārus, ko katra rindiņa dara.

---

## Uzdevuma izpildīšana

### Uzdevums:

Nosaukt darbības, kas mums jāveic, lai izveidotu todo ierakstu izpildīšanas funkcionalitāti.

### Uzdevums:

Izpildīt soļus.

---
---

# q2 02-18 7-ned: Koda reorganizācija un organizācija - Refactor

- Prot grupēt saistītu funkcionalitāti pa objektiem

--//--

---
---

# q2 02-18 7-ned: Koda reorganizācija un organizācija - Refactor

- Prot sadalīt programmas daļas pa failiem
- Apsver koda grupēšanu pēc funkcionalitātes

--//--

---
---

# q2 02-11 6-ned: Koda reorganizācija un organizācija - Refactor

- Prot sadalīt saliktu uzdevumu pa soļiem.
- Prot sadalīt programmu pa daļām.

--//--

---
---
# q2 02-04 5-ned: Koda reorganizācija un organizācija - Refactor

- Prot izmantot jaunās funkcijas
- Prot darīt atbrīvoties no veca neizmantota koda

--//--

---
---
# q2 01-27 4-ned: Koda reorganizācija un organizācija - Refactor

Prot izdalīt pašpietiekamu koda vienību atsevišķā funkcijā.

## 1. Nodarbība

### 2. Uzdevuma risinājums

#### Uzdevums:

Izvdidojam pārbaudi vai jaunā vērtība ir unikāla:

- Izmantojam `document.querySelectorAll()`, lai atrastu visus saraksta elementus
- Izmantojam `for` ciklu, lai pārvietotos pa elementu sarakstu
- Izmantot `element.innerText` atribūtu, lai salīdzinātu vērtību
- Beidzam probrammu, ja vērtības atkārtojas

#### Risinājums:

1. Jāsaprot vai jaunā vērtība jau ir sarakstā
2. Izmantojam `for` ciklu, lai pārvietotos pa saraksta elementiem:
```js
for (const ieraksts of todoIeraksti) {
  console.log(ieraksts);
}
```

3. Izmantojam elementa `.innerText` parametru, lai noskaidrotu tā iekšējo teksta vērtību:
```js
for (const ieraksts of todoIeraksti) {
  console.log(ieraksts.innerText);
}
```

4. Izmantojam ievadlauka `.value` parametru, lai noskaidrotu jauno vērtību:
```js
for (const ieraksts of todoIeraksti) {
  console.log(ieraksts.innerText);
  console.log(tekstaLauks.value);
}
```

5. Salīdzinām katra ieraksta tekstuālo vērtību ar jauno vērtību, lai saprastu vai tās sakrīt (tāpat ka`if`):
```js
let ierakstsJauEksiste = ieraksts.innerText == tekstaLauks.value;
console.log('Ieraksts jau eksistē: ', ierakstsJauEksiste);
```

6. Izmantojam `if` izteiksmi, lai reaģētu uz situāciju, kad ieraksts jau eksistē:
```js
if (ierakstsJauEksiste) {
  alert('Šāds ieraksts jau eksistē!');
}
```

7. Izmantojam `return`, lai apturētu jauna elementa izveidi, ja elements jau eksistē:
```js
if (ierakstsJauEksiste) {
  alert('Šāds ieraksts jau eksistē!');
  return;
}
```

8. Satīram liekos `console.log`:
```js
for (const ieraksts of todoIeraksti) {
    // `ieraksts` ir esošais ieraksts
    // Pārbaudam vai ieraksts jau eksistē:
    let ierakstsJauEksiste = ieraksts.innerText == tekstaLauks.value;

    if (ierakstsJauEksiste) {
        alert('Šāds ieraksts jau eksistē!');
        return;
    }
}
```

---

### Refaktorings

Lai kods būtu labāk saprotams un vieglāk uzturams to sadala pa daļām

- pa funkcijām
- pa vairākiem failiem

#### Izdalām dažādas lietas, ko aplikācija dara

- Datu attēlošana (tā jau ir izdalīta HTML failā)

- Jaunu datu pievienošana
  - Jaunu datu validācija
    - ir vērtība?
    - vērtība ir unikāla?
    - vēl kas?
  - Jauna elementa izveidošana
    - Izveidojam elementu
    - Piešķiram klasi
    - vēl kas?

#### Sadalām datu ievades procesu

##### Izdalām jauna elementa izveidi atsevišķā funkcijā

Funkcijai ir jābūt skaidram nosaukumam.

```js
function jaunsTodoIeraksts(teksts) {
    let ierakstsElem = document.createElement('li');
    ierakstsElem.classList.add("todo-ieraksts");
}
```

##### Uzdevums:

Iznest validācijas kodu atsevišķā funkcijā.

- Funkcija pieņem tekstu no ievadlauka
- Ja ievadītie dati nav pieņemami, funkcija atgriež kļūdas tekstu
- Ja dati ir pieņemami, neatgriež neko
- Izsaucam šo funkciju, pirms elementa veidošanas

---

### Funkcionalitātes grupēšana pa failiem

Parasti programmas sastāv no identificējamām daļām. Mūsu gadījumā:

- Ievad forma
- Darbu saraksts
- Darbu saraksta elements

Formai un elementu sarakstam nepieciešamais kods mums ir maz, līdz ar to nav to vērts izdalīt.

Bet darba ierakstam ir daudz loģikas. Un nāks klāt arī CSS.

#### Grupējam kodu pēc funkcionālām daļām

- Izveidojam mapi `todo-ieraksts`
- Izveidojam tajā failus:
  - `todo-ierakts.js`
  - `todo-ierakts.css`

Šādi mums būs viegli atrast visu loģiku, ka saistīta ar ierakstu.

- Pārvietojam ar ierakstu saistītās funkcijas uz jauno failu
  - Todo ieraksta izveide
  - Todo ieraksta validācija

- Pievienojam failu HTML (pirms script.js)
- Notestējam ka viss strādā

#### Funkcionalitātes grupēšana objektos

Līdzīgi kā Browsera API mēs varam grupēt saistīto funkcionalitāti kopā "objektā". Tas ļauj vieglāk saprast kādas funkcijas darbojas kopā un ar ko tās ir saistītas.

Pārveidojam mūsu TODO faila saturu:

```js
const TodoIeraksts = {
    jauns: function() {},
    validet: function() {}
}
```

---
---

# q2 01-21 3-ned: Datu validācija

- Prot apsvērt ievadīto datu pareizību.
- Prot salīdzināt seošos datus ar jaunajiem.

# 1. Nodarbība

## Vairāku elementu atrašana

Izmantojam klases, lai atzīmētu vairākus elementus:

Pievienojam klasi `<li>` elementam.

```html
<li class="todo-ieraksts">Ieraksts</li>
```

Pievienojam izveidošanas beigās
```js
document.querySelectorAll('.todo-ieraksts');
```

## Pievienojam klasi izveidojot jaunu elementu

```js
let ierakstsElem = document.createElement('li');
ierakstsElem.classList.add('todo-ieraksts');
```

## Datu validācija

Pārbaudām vai ievad-laukā ir kaut kas ievadīts, pirms mēģinam pievienot.

```js
if (!tekstaLauks.value) {
    alert("Lūdzu ievadi tekstu");
    return;
}
```

## 1. Uzdevums:

Atrodam visus sarakstā esošos `<li>` elementus.
- Izmantojam `document.querySelectorAll()`

## 2. Uzdevums:

Izvdidojam pārbaudi vai jaunā vērtība ir unikāla:

- Izmantojam `document.querySelectorAll()`, lai atrastu visus saraksta elementus
- Izmantojam `for` ciklu, lai pārvietotos pa elementu sarakstu
- Izmantot `element.innerText` atribūtu, lai salīdzinātu vērtību
- Beidzam probrammu, ja vērtības atkārtojas

## Validācija

- Atcelt elementa pievienošanu, ja dotā vērtība jau eksistē sarakstā
- Šeit jāņem vērā, ka jau easm funkcijā un varam izmantot `return`

---
---

# q2 01-14 2-ned: JS Cikli

Prot izmantot cikla konstrukcijas.

--//--

---
---

# q2 01-04 1-ned: JS Cikli un Datu saraksti

- Prot izmantot cikla konstrukcijas.
- Prot izmantot saraksta datu struktūru.

## Atsākam, kur palikām

- Ja Koda nav es iedodu (Github)
- Pēdējā uzdevuma risinājums

### Uzdevums

Kad notiek formas `submit`:
- Atrodam todo saraksta elementu
- Izveidojam jaunu `li` elementu
- Ierakstam šī `li` elementa saturā vērtību no `input`
- Pievienojam šo `li` elementu darbu sarakstam

---

## 1. Nodarbība

### Datu saraksts

- Mainīgais, kas var saturēt vairākas vērtības
- Saraksts, Masīvs, Array, List, Set, Vector
- Objekts, HashMap, Vārdnīca, Dictionary

```js
//               0        1       2
let saraksts = ['viens', 'divi', 'trīs'];
console.log(saraksts);
console.log(saraksts.length);
```

### Elementu iegūšana

- Pēc indeksa
- Indekss sākas ar `0`

```js
let pirmaisElements = saraksts[0];
```

- Cikliski
- Automātiski palielinot indeksu

```js
for (let i = 0; i < saraksts.length; i++) {
    let kartejaisElements = saraksts[i];
    console.log('masīva elements', i, kartejaisElements);
}
```

- Cikla izklāsts:
```js
let i = 0;

if (i < saraksts.length) { // saraksts.length = 3
    let kartejaisElements = saraksts[0];
    console.log(i, kartejaisElements);

    i = 1;
}

if (i < saraksts.length) { // saraksts.length = 3
    let kartejaisElements = saraksts[1];
    console.log(i, kartejaisElements);

    i = 2;
}

if (i < saraksts.length) { // saraksts.length = 3
    let kartejaisElements = saraksts[2];
    console.log(i, kartejaisElements);

    i = 3;
}

if (i < saraksts.length) { // saraksts.length = 3
    let kartejaisElements = saraksts[2];
    console.log(i, kartejaisElements);

    i = 4;
}

// ...
```

- Iteratīvi, prasot nākamo elementu

```js
for (const elements of saraksts) {
    let kartejaisElements = elements;
}
```

### Elementu pievienošana:

```js
saraksts.push('četri');
```

### Elementu dzēšana:

```js
saraksts.pop(2)
```

---

## 2. Nodarbība

Pievienojam klases `<li>` elementiem.

### 1. Uzdevums:

Atrodam visus sarakstā esošos `<li>` elementus.
- Izmantojam `document.querySelectorAll()`

### 2. Uzdevums:

- Izmantot `element.innerText` atribūtu, lai salīdzinātu vērtību

### Validācija

- Atcelt elementa pievienošanu, ja dotā vērtība jau eksistē sarakstā
- Šeit jāņem vērā, ka jau easm funkcijā un varam izmantot `return`

---
---

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
