let sveiciens = 'Čau';
console.log(sveiciens);

let skaitlis = 6;
let dalSkaitlis = 4.2;
console.log(skaitlis, dalSkaitlis);

let patiessVaiNepatiess = false;
const patiess = true;

let masivs = ['teskts', 'cists teksts', 2, 3];
skaitlis
let objekts = {
    "Jānis": 21233445,
    "Māris": 24445555
}

console.log('masīvs', masivs);
console.log('objekts', objekts);

if (skaitlis > dalSkaitlis) {
    console.log('Nosacījums IR patiess');
} else {
    console.log('Nosacījums NAV patiess');
}

console.log('pārbaude', 3 > 2);
console.log('pārbaude', 3 > 4);
console.log('pārbaude', (3 > 4) == false);

let lemums = confirm("Vai Tu esi foršs?");
console.log('lēmums:', lemums);

if (lemums) { // lemums == true
    console.log('Taisnība!');
} else { // lemums == false
    console.log('Nav taisnība! Tu esi Foršs!!!');
}

let mainigais;

if (mainigais) {
    console.log('mainīgajam ir vērtība', mainigais);
} else {
    console.log('mainigajam nav vērības', mainigais);
}