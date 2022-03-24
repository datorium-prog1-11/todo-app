// Piemērs:
let skaitlis = 6;
let dalSkaitlis = 4.2;

if (skaitlis > dalSkaitlis) {
    console.log('Nosacījums IR patiess');
} else {
    console.log('Nosacījums NAV patiess');
}

let selektors = '#galvenais-virsraksts';
let galvenaisVirsraksts = document.querySelector(selektors);
console.log(galvenaisVirsraksts);

// Nodarbības kods:

// Uzdevums 1 risinājums:
let sarakstsElem = document.querySelector('#todo-saraksts');
console.log(sarakstsElem);
//

function sveiciens(vards) {
    if (vards) {
        console.log(`Čau: ${vards}!`);
    } else {
        console.log("Kļūda: Parametrs `vards` netika padots!");
    }
}

// Izsaucam funkciju:
sveiciens('Alpha'); // Čau Alpha
// Uzdevuma test:
sveiciens(); // kļūda

// Uzdevums 2 risinājums:
function atrastUnIzvadit() {
    const elements = document.querySelector('#todo-ieraksts-1');
    console.log('atrasts', elements);
}
atrastUnIzvadit();

/*
Uzdevums 3:
Pievienot pārbaudi `sveiciens` funkcijā, vai ir padots parametrs `vards`. Ja nav padots, izvadīt kļūdas paziņojumu. Ja ir padots izvadīt sveicienu.

Uzdevums 4:
Definēt funkciju, kas var pieņemt divus parametrus (skaitļus), saskaitīt viņus un izvadīt rezultātu.

Uzdevums 5:
Pievienot parametru pārbaudi saskaitīšanas funkcijai. Par katru trūkstošo parametru jāizvda atbilsotša kļūda un tikai, ja abi parametri ir padoti, veicam saskaitīšanu.
*/

function saskaitisana(a, b) {

    if (a && b) {
        console.log('Summa:', a + b);
    } else {
        if(!a) {
            console.log('Pirmais parametrs nav padots');
        }
        if (!b) {
            console.log('Otrais parametrs nav padots');
        }
    }
}

saskaitisana(3, 4);
saskaitisana(undefined, 4);
saskaitisana(3);
saskaitisana();