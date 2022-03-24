// 1. Pārvietot todo-ieraksts kodu uz šo failu
// 2. Iekļaut šo failu mūsu programmā un lietot pārvietoto kodu

// 1. Izveidot jaunu funkciju
function validet(jaunaTodoTeksts) {
    // 2. Pārvietojam vecās funkcijas kodu uz šejieni
    // 3. Salabot mainīgos tekstaLauks.value => jaunaTodoTeksts

    if (irTukss(tekstaLauks.value)) {
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