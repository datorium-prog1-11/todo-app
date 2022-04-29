const TodoIeraksts = {

    jauns: function(jaunaTodoTeksts) {
        // - Pārvietojam ieraksta izveides kodu uz šejieni

        // Izveidojam tukšu `<li></li>` elementu
        const ierakstsElem = document.createElement('li');
        // Pievienojam klasi `li` elementam -
        // `<li class="todo-ieraksts"></li>`
        ierakstsElem.classList.add('todo-ieraksts');

        // Izveidojam tukšu `<span></span>` elementu
        const tekstsElem = document.createElement('span');
        // Pievienojam klasi `span` elementam -
        // `<span class="todo-ieraksts__teksts"></span>`
        tekstsElem.classList.add('todo-ieraksts__teksts');
        // Pievoenojam lietotāja ievadīto tekstu mūsu todo ierakstam:
        // `<span class="todo-ieraksts__teksts">jauna todo teksts</span>`
        tekstsElem.innerHTML = jaunaTodoTeksts;
        // Pievoenojam `<span>` elementu ieraksta `<li>` elementam
        // ```
        // <li class="todo-ieraksts"></li>
        //   <span class="todo-ieraksts__teksts">jauna todo teksts</span>
        // </li>
        // ```
        ierakstsElem.appendChild(tekstsElem);

        const dzestPoga = document.createElement('button');
        dzestPoga.classList.add('todo-ieraksts_dzest');
        dzestPoga.innerHTML = 'dzēst';

        // Klausāmies uz lietotāja klikšķi uz dzēst pogas
        dzestPoga.addEventListener('click', function() {
            // Kad noklikšķina, izsaucam `dzest()` metodi no `TodoIeraksts`,
            // lai dzēstu ierakst (dzēšana vēl nav realizēta).
            TodoIeraksts.dzest(ierakstsElem);
        });

        // pievienojam dzēst pogu ieraksta elementam:
        // ```
        // <li class="todo-ieraksts"></li>
        //   <span class="todo-ieraksts__teksts">jauna todo teksts</span>
        //   <button class="todo-ieraksts_dzest">dzēst</button>
        // </li>
        // ```
        ierakstsElem.appendChild(dzestPoga);

        // Atgriežam izveidoto ierakstu `<li>..</li>`
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

    dzest: function(ierakstsElem) {
        console.log('TODO ieraksts dzēst', ierakstsElem);
    }
};