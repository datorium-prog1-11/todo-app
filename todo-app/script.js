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

// kods bija šeit ...


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
    let kluda = TodoIeraksts.validet(tekstaLauksTeksts);
    // 5. Pārbaudām kļūdu
    if (kluda) {
        // 6. viss slikti
        alert(kluda);
        return;
    }


    // PIEVIENOŠANA:
    const ierakstsElem = TodoIeraksts.jauns(tekstaLauksTeksts);

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

let cilveks = {
    // atslēga + vērtība = ieraksts
    vards: 'Mārtiņš', // ieraksti tiek atdalīti ar komatu
    vecums: 25,
    adrese: {
        iela: 'Brīvības iela',
        numurs: 20
    },
    iesauka: "misters m"
};

let cilveki = [
    {
        vards: 'Anna',
        vecums: 10,
        adrese: {
            iela: 'Barona iela',
            numurs: 1
        }
    },
    {
        // atslēga + vērtība = ieraksts
        vards: 'Mārtiņš', // ieraksti tiek atdalīti ar komatu
        vecums: 25,
        adrese: {
            iela: 'Brīvības iela',
            numurs: 20
        },
        iesauka: "misters m"
    },
    {
        vards: 'Maija',
        vecums: 15,
        adrese: {
            iela: 'Barona iela',
            numurs: 20
        }
    },
];

function izvaditAdresi(cilveks) {
    console.log(`${cilveks.vards} dzīvo uz ${cilveks.adrese.iela}`);
}

for (let i = 0; i < cilveki.length; i = i + 1) {
    const cilveks = cilveki[i];
    izvaditAdresi(cilveks);
}

console.log("Risinājums ar for-of");
for (const cilveks of cilveki) {
    izvaditAdresi(cilveks);
}