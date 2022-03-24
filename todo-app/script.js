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

// Definējam teksta un skaitļu sarakstus:
// Teksta sarakstā 3 elementi:
let tekstaSaraksts = ['viens', 'divi', 'trīs'];
// Skaitļu sarakstā 5 elementi
let skaitluSaraksts = [1,2,3,4,5,6, 7, 99];

// Izvadām ārā vidējo elementu no teksta saraksta:
console.log(tekstaSaraksts[1]);
// Izvadām ārā pēdējo vērtību no skaitļu saraksta:
console.log(skaitluSaraksts[4]);

// 1. izmantojam `.length` atribūtu
// length pasaka cik mums ir elementu sarakstā
console.log(skaitluSaraksts.length);
// izvadām vienmēr pēdējo elementu izmantojot `.length` atribūtu:
console.log('vienmēr pēdējais elements:');
// noskaidrojam pēdējā elementa indeksu:
let pedejaisIndekss = skaitluSaraksts.length - 1;
console.log('pēdējā elementa indekss', pedejaisIndekss);
// Nolasām pēdējo elementu pēc indeksa
let pedejaisElements = skaitluSaraksts[pedejaisIndekss];
console.log('pēdējais elements', pedejaisElements);