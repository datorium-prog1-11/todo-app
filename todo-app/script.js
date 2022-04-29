// Tas ir mūsu saraksts, te mēs pievienosim ierakstus
let sarakstsElem = document.querySelector('#todo-saraksts');
console.log(sarakstsElem);

// Šī ir mūsu ievad forma, te mēs ievadīsim jaunos ierakstus
// Formas elements
let ievadForma = document.querySelector('#ievad-forma');
console.log('ievad forma', ievadForma);

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

// DZĒST:
// Sameklēsim mūsu dzēst pogas - `querySelectorAll` atradīs visas
let dzestPogaElems = document.querySelectorAll('.todo-ieraksts_dzest'); // atrod pogas pēc klases no HTML
// izejam cauri visām atrastajām pogām izmantojot `for..of` ciklu
for (const dzestElem of dzestPogaElems) {
    // Katrai atrastajai klausās uz peles klikšķi (`click`)
    dzestElem.addEventListener('click', function(event) {
        console.log('klikšķis uz', event.target);
        const dzestPoga = event.target;
        const ierakstsElem = '???';
        // Kad notiek klikšķis, izsaucam `dzest()` metodi no `todo-ieraksts.js`
        TodoIeraksts.dzest();
    });
}
