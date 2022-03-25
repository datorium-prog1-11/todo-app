const TodoIeraksts = {

    jauns: function(jaunaTodoTeksts) {
        // - Pārvietojam ieraksta izveides kodu uz šejieni
        const ierakstsElem = document.createElement('li');
        ierakstsElem.classList.add('todo-ieraksts');
        ierakstsElem.innerHTML = jaunaTodoTeksts;

        const dzestPoga = document.createElement('button');
        dzestPoga.classList.add('todo-ieraksts_dzest');
        dzestPoga.innerHTML = 'dzēst';

        ierakstsElem.appendChild(dzestPoga);

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
        let todoIerakstiTeksti = document.querySelectorAll('.todo-ieraksts__teksts');

        for (const ieraksts of todoIerakstiTeksti) {
            console.log(ieraksts.innerText); // <- Vai viņa ir šeit?
            console.log(jaunaTodoTeksts); // <- jaunā vērtība

            console.log("ieraksts inner text", ieraksts.innerText);

            let ierakstsJauEksiste = ieraksts.innerText == jaunaTodoTeksts;

            if (ierakstsJauEksiste) {
                return 'Šāds ieraksts jau eksistē';
            }
        }
    },
};
