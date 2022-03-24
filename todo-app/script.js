// Piemērs:
let skaitlis = 6;
let dalSkaitlis = 4.2;

if (skaitlis > dalSkaitlis) {
  console.log("Nosacījums IR patiess");
} else {
  console.log("Nosacījums NAV patiess");
}

let selektors = "#galvenais-virsraksts";
let galvenaisVirsraksts = document.querySelector(selektors);
console.log(galvenaisVirsraksts);

// Nodarbības kods:

// Uzdevums 1 risinājums:
let sarakstsElem = document.querySelector("#todo-saraksts");
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
sveiciens("Alpha"); // Čau Alpha
// Uzdevuma test:
sveiciens(); // kļūda

// Uzdevums 2 risinājums:
function atrastUnIzvadit() {
  const elements = document.querySelector("#todo-ieraksts-1");
  console.log("atrasts", elements);
}
atrastUnIzvadit();

// Funkcija, kas atgriež vērtību
function reizinat(a, b) {
  let reizinajums = a * b;
  return reizinajums; // Šeit funkcijas izpilde beidas
  console.log("Pēc return"); // Šindiņa netiks izpildīta
}

let reizinatRezultats = reizinat(5, 4);
console.log("reizinat rezultāts:", reizinatRezultats);

// Formas elements
let ievadForma = document.querySelector("#ievad-forma");
console.log("ievad forma", ievadForma);
console.log("formas elementi", ievadForma.elements);

ievadForma.addEventListener("submit", function (event) {
  event.preventDefault();
  let ierakstsElem = document.createElement("li");
  let tekstaLauks = ievadForma.elements["teksts"];

  ierakstsElem.innerHTML = tekstaLauks.value;
  sarakstsElem.append(ierakstsElem);
});

let tekstaLauks = ievadForma.elements["teksts"];
console.log("teksta lauks", tekstaLauks);

let tekstaLaukaVertiba = tekstaLauks.value;
console.log("teksta lauka vērtība:", tekstaLaukaVertiba);

// console.log('Uzdevums:', ievadForma.elements['uzd-input'].value);

// izveidojam elementu
let paragrafs = document.createElement("p");
paragrafs.innerHTML = "Čau, visiem!";
console.log("paragrafs", paragrafs);
// Pievienojam elementu dokumenta saturam
console.log("body", document.body);
document.body.append(paragrafs);
