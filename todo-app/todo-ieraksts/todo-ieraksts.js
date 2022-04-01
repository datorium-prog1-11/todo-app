const TodoIeraksts = {

    jauns: function(jaunaTodoTeksts) {
        // - Pārvietojam ieraksta izveides kodu uz šejieni
        const ierakstsElem = document.createElement('li');
        ierakstsElem.classList.add('todo-ieraksts');

        const tekstsElem = document.createElement('span');
        tekstsElem.classList.add('todo-ieraksts__teksts');
        tekstsElem.innerHTML = jaunaTodoTeksts;
        ierakstsElem.appendChild(tekstsElem);

        const dzestPoga = document.createElement('button');
        dzestPoga.classList.add('todo-ieraksts_dzest');
        dzestPoga.innerHTML = 'dzēst';

        dzestPoga.addEventListener('click', function() {
            TodoIeraksts.dzest();
        });

        ierakstsElem.appendChild(dzestPoga);

        // - pielāgot funkciju uzdevuma nosaucījumiem
        // - izmantot tekstu ko lieotoājs padod, kā todo ieraksta tekstu
        // - atgriezt jauni izveidoto elementu - `return`
        return ierakstsElem;
    },

    validet: function(jaunaTodoTeksts) {
        if (!jaunaTodoTeksts) {
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

    dzest: function() {
        console.log('TODO ieraksts dzēst');
    }
};
