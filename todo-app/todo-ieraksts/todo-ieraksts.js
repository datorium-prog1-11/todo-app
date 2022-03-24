const TodoIeraksts = {

    jauns: function(jaunaTodoTeksts) {
        // - Pārvietojam ieraksta izveides kodu uz šejieni
        const ierakstsElem = document.createElement('li');
        ierakstsElem.classList.add('todo-ieraksts');
        ierakstsElem.innerHTML = jaunaTodoTeksts;

        // - pielāgot funkciju uzdevuma nosaucījumiem
        // - izmantot tekstu ko lieotoājs padod, kā todo ieraksta tekstu
        // - atgriezt jauni izveidoto elementu - `return`
        return ierakstsElem;
    },

    validet: function(jaunaTodoTeksts) {
        if (!tekstaLauks.value) {
            return 'Lūdzu ievadi vērtību!';  // šeit funkcijas izpilde beidzās
        }

        // Iegūstam visus elementus ar klasi class="todo-ieraksts"
        let todoIeraksti = document.querySelectorAll('.todo-ieraksts');

        for (const ieraksts of todoIeraksti) {
            console.log(ieraksts.innerText); // <- Vai viņa ir šeit?
            console.log(jaunaTodoTeksts); // <- jaunā vērtība

            let ierakstsJauEksiste = ieraksts.innerText == jaunaTodoTeksts;

            if (ierakstsJauEksiste) {
                return 'Šāds ieraksts jau eksistē';
            }
        }
    }
};
