let sarakstsElem = document.querySelector('#todo-saraksts');
console.log(sarakstsElem);

// Funkcija, kas atgriež vērtību
function reizinat(a, b) {
    let reizinajums = a * b;
    return reizinajums; // Šeit funkcijas izpilde beidas
}

let reizinatRezultats = reizinat(5, 4);
console.log('reizinat rezultāts:', reizinatRezultats);

// Formas elements
let ievadForma = document.querySelector('#ievad-forma');
console.log('ievad forma', ievadForma);
console.log('formas elementi', ievadForma.elements);

let tekstaLauks = ievadForma.elements['teksts'];
console.log('teksta lauks', tekstaLauks);

let tekstaLaukaVertiba = tekstaLauks.value;
console.log('teksta lauka vērtība:', tekstaLaukaVertiba);

// izveidojam elementu
let paragrafs = document.createElement('p');
paragrafs.innerHTML = 'Čau, visiem! Šis ir pievienots ar JavaScript!';
console.log('paragrafs', paragrafs);

// Pievienojam elementu dokumenta saturam
console.log('body', document.body);
document.body.append(paragrafs);

// Nodarbības kods:
ievadForma.addEventListener('submit', function(event) {
    // Apturam notikuma defaulto darbību - nepārlādējam dokumentu
    // jo tas salauztu mūsu kodu - viss sākots no sākuma
    event.preventDefault();

    // Izveidojam jaunu elementu
    // - izmantojam `document` objektu, lai strādātu ar HTML
    // - izmantojam `li` elementu, jo tas iet sarakstā - `ul` elementā
    // šis izveidos - <li></li> elementu
    let ierakstsElem = document.createElement('li');
    // Atrodam teksta ievad-lauku izmantojot formas elementu
    // - Visi formas ievad-elementi ir pieejami zem `.elements` atribūta
    // - Formas ievad elementus mēs atrodam pēc vārda - name atribūta
    let tekstaLauks = ievadForma.elements['teksts'];

    ierakstsElem.innerHTML = tekstaLauks.value;
    sarakstsElem.append(ierakstsElem);
});

// ierakstam komentāru
//                0      1    2
let saraksts = ['viens', 2, 'trīs'];
console.log(saraksts);
let ieraksts = saraksts[0];
console.log(ieraksts);

// Uzdevums

// Definēt jaunu sarakstu ar 5 teksta vērtībām
//                    0       1       2        3        4
// Definējam sarakstu izmantojot kavadrātiekavas ([]), vērtības atdala ar komatu.
let uzdSaraksts = ['viens', 'divi', 'trīs', 'četri', 'pieci', 'seši', 'septiņi'];
// - Izvadīt pirmo
// Pieprasām sarakstam pirmo elementu izmantojot kvatdrāt iekavas ([]) un indeksu 0
console.log('pirmais elements', uzdSaraksts[0]);
// un pēdējo elementu
// Pieprasām sarakstam pēdējo elementu izmantojot kvatdrāt iekavas ([]) un indeksu 4
console.log('pēdējais elements', uzdSaraksts[4]);
console.log('Saraksta garums', uzdSaraksts.length);
console.log('pēdējais elem izmantojot garumu:', uzdSaraksts[uzdSaraksts.length - 1]);

// - Pierakstīt komentārus pie katras koda rindiņas, ko tā dara

// Ja es gribu izvadīt visas vērtības:
console.log(uzdSaraksts[1]);
console.log(uzdSaraksts[2]);
console.log(uzdSaraksts[3]);

// Varam to izdarīt izmantojot ciklu:

for (
    // - Sākam skaitītāja sākuma vērtību - `let i = 0`
    //   (šajā gadījumā gribam sākt no 0)
    let i = 0;
    // - Pēc tam norādām "cik ilgi cikls ies" - `i < uzdSaraksts.length`
    //   (kamēr i būs mazāks par saraksta garumu)
    i < uzdSaraksts.length;
    // - Beigās definējam kā mēs mainīsim skaitītāja vērtību katrā ciklā - `i = i + 1`;
    //   (šajā gadījumā mēs palielinām par 1)
    i = i + 1
) {
    // Izvadām `i` vērtību katrā iterācijā
    console.log('i', i);
    // Izņemam no saraksta vērtību, pēc `i` vērtības.
    // šādi mēs varam iziet cauri visam sarakstam
    console.log('i elements', uzdSaraksts[i]);
}

// Kas notiek datoram smadzenēs, kad mēs izpildam ciklu:

// 1. Mēs definējam mainīgo
let i = 0;

// 2. Pārbaudām nosacījumu - vai izpildīt cikla saturu?
if (i < uzdSaraksts.length) {

    // Ja nosacījums izpildās, tad izpildam cikla saturu:
    console.log('i', i);
    console.log('i elements', uzdSaraksts[i]);

    // Pēc cikla satura izpildes, palielinam skaitītāju:
    i = 1;
}

if (i < uzdSaraksts.length) {
    // Ja nosacījums izpildās, tad izpildam cikla saturu:
    console.log('i', i);
    console.log('i elements', uzdSaraksts[i]);

    i = 2;
}

if (2 < 7) {
    // Ja nosacījums izpildās, tad izpildam cikla saturu:
    console.log('i', 2);
    console.log('i elements', 'trīs');

    i = 3;
}

if (3 < 7) {
    // Ja nosacījums izpildās, tad izpildam cikla saturu:
    console.log('i', 3);
    console.log('i elements', 'četri');

    i = 4;
}

let jaunsForSaraksts = ['Kāposts', 'Burkāns', 'Gurķis'];

for (const ieraksts of jaunsForSaraksts) {
    console.log('for of ieraksts', ieraksts);
}

// Uzdevums

// garums = 7
// 7 / 2 = 3.5
// noapaļojam uz indeksu Math.floor(3.5) = 3
//                                         3
let elementi = ['viens', 'divi', 'trīs', 'četri', 'pieci', 'seši', 'septiņi', 'Astoņi'];

let videjaisI = Math.floor(elementi.length / 2);
// % atgriež dalīšanas atlikumu
let masivaIrParaElementi = elementi.length % 2 === 0;

// Ja ir pāra skaits elementu, tad noņemam 1 no rezultāta,
// lai dabūtu to, kas ir pirms vidus
if (masivaIrParaElementi) {
    videjaisI = videjaisI - 1;
}

for (let i = 1; i < elementi.length - 1; i += 1) {

    if (i === videjaisI) {
        console.log("Vidējais elements", i, elementi[i]);
    } else {
        console.log(i, elementi[i]);
    }
}