const DarbuSkaits = {
    // 1. Atrast cik ir ierakstu skaits kopā
    // iegutIerakstuSkaitu
    skaits: function (sarakstsElem) {
        // iegūstam todo sarakstu:
        // Paskatamies, cik viņā ir ierakstu
        const ierakstuSkaits = sarakstsElem.children.length;
        return ierakstuSkaits;
    },

    // 2. Saprast cik no elementiem ir izdarīti
    // iegutIzpilditoIerakstuSkaitu
    izpilditoDarbuSkaits: function (sarakstsElem) {
        let izpildituIerakstuSkaits = 0;
        const ieraksti = sarakstsElem.children;

        // Iegūstam katru ieraksta elementu
        for (const ieraksts of ieraksti) {
            // - Iegūstam čekboksi
            const statussElem = ieraksts.querySelector('.todo-ieraksts__statuss');
            // - Pārbaudīt vai čekboksis ir ieķeksēts
            const irIzpildits = statussElem.checked;

            if (irIzpildits) {
                izpildituIerakstuSkaits = izpildituIerakstuSkaits + 1;
            }
        }
        return izpildituIerakstuSkaits;
    },

    atjaunotSkaitu: function() {
        const sarakstsElem = document.querySelector('#todo-saraksts');
        const skaititajsElem = document.querySelector('.darbu-skaits__skaititajs');
        skaititajsElem.innerHTML = DarbuSkaits.izpilditoDarbuSkaits(sarakstsElem) + '/' + DarbuSkaits.skaits(sarakstsElem);
    }
}