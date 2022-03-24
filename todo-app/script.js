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

// 1 nodefinet funkciju:
function irTukss(teksts) {
    // 4. refactor
    return !teksts;
}

// 1. Izveidot jaunu funkciju
function validet(jaunaTodoTeksts) {
    // 2. Pārvietojam vecās funkcijas kodu uz šejieni
    // 3. Salabot mainīgos tekstaLauks.value => jaunaTodoTeksts
    // izmantojam šo: true == !false
    // false == !true
    // !'' == true
    if (irTukss(jaunaTodoTeksts)) {
        return 'Lūdzu ievadi vērtību!';  // šeit funkcijas izpilde beidzās
    }

    // Iegūstam visus elementus ar klasi class="todo-ieraksts"
    let todoIeraksti = document.querySelectorAll('.todo-ieraksts');

    // TODO: 2. uzd risinājums
    for (const ieraksts of todoIeraksti) {
        console.log(ieraksts.innerText); // <- Vai viņa ir šeit?
        console.log(jaunaTodoTeksts); // <- jaunā vērtība

        let ierakstsJauEksiste = ieraksts.innerText == jaunaTodoTeksts;

        if (ierakstsJauEksiste) {
            return 'Šāds ieraksts jau eksistē';
        }
    }
}

// - Izveidot funkciju
function jaunsTodoIeraksts(jaunaTodoTeksts) {

    // - Pārvietojam ieraksta izveides kodu uz šejieni
    const ierakstsElem = document.createElement('li');
    ierakstsElem.classList.add('todo-ieraksts');
    ierakstsElem.innerHTML = jaunaTodoTeksts;
    // - pielāgot funkciju uzdevuma nosaucījumiem
    // - izmantot tekstu ko lieotoājs padod, kā todo ieraksta tekstu
    // - atgriezt jauni izveidoto elementu - `return`
    return ierakstsElem;
}

// Nodarbības kods:
ievadForma.addEventListener('submit', function(event) {
    // Apturam notikuma defaulto darbību - nepārlādējam dokumentu
    // jo tas salauztu mūsu kodu - viss sākots no sākuma
    event.preventDefault();

    // Atrodam teksta ievad-lauku izmantojot formas elementu
    // - Visi formas ievad-elementi ir pieejami zem `.elements` atribūta
    // - Formas ievad elementus mēs atrodam pēc vārda - name atribūta
    let tekstaLauks = ievadForma.elements['teksts'];
    // Nogriežam atstarpes no sākuma un no beigām
    let tekstaLauksTeksts = tekstaLauks.value.trim(); // '   dsfsd  ' => 'dsfsd', '   ' => ''

    // VALIDĀCIJA:
    // 4. Izsaucam jauno funkciju
    let kluda = validet(tekstaLauksTeksts);
    // 5. Pārbaudām kļūdu
    if (kluda) {
        // 6. viss slikti
        alert(kluda);
        return;
    }


    // PIEVIENOŠANA:
    const ierakstsElem = jaunsTodoIeraksts(tekstaLauksTeksts);

    // Elementa pievienošana paliek te pat
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

