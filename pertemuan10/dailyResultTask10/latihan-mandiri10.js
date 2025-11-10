/* Latihan Mandiri
Bab 2.4 : Destructuring & Spread/Rest Operator 
Senin, 10 November 2025*/

// Nomor 1
let angka = [1, 2, 3, 4];
let [a, b, c, d] = angka;
console.log(a); //Output : 1
// console.log(b); //Output : 2
// console.log(c); //Output : 3
// console.log(d); //Output : 4


// Nomor 2
let mobil = { merek: "Daihatsu", tahun: 1951}

let {merek, tahun} = mobil;
console.log(merek); //Output : Daihatsu
// console.log(tahun); //Output : 1951


// Nomor 3
let makanan = ["nasi", "ayam"];
let minuman = [...makanan, "teh", "kopi"];
console.log(minuman); //Output : (4) ['nasi', 'ayam', 'teh', 'kopi']


// Nomor 4
function hitung(...angka) {
    return angka.reduce((a, b) => a + b);
}
console.log(hitung(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)); //Output : 550

