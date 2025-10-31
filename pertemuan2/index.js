let nama = "BAMBANG";


// String
let namaVar = "Ini Value String";
let namaVar1 = 'String';
// Number / Integer
let namaVar2 = 100;
// Boolean 
let namaVar3 = true ;
let namaVar4 = false ;
// Null 
let namaVar5 = null;
// Undifined 
let namaVar6 = undefined; 
let namaVarr5;


// console.log("Check Value: " +namaVar2);
// console.log("Check Type Data: " + typeof namaVar2);



function namaFunction() {
    console.log("Si "+ nama + " Telah ngisi nama");
    confirm("Oh kamu namanya adalah "+ nama +" kah?")
    namaF2()
}

function namaF2(){
    console.log("Ini Function 2 Berjalan");
}

// 3 OPSI 
// LET - VAR - CONST

// let alamat = prompt("Masukan Alamat Anda");

let a = 90;
let b = a;
let c = b + a;
let d = a + b * c ;

var e = "Halo ";
const f = "Nama ";
let g = "Saya ";
let h = "Bambang ";

let result = e + f + g + h;

console.log(result);
// console.log((90*180)+90);


function add(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) + Number(b)
    console.log("Hasil dari "+ a +"+"+ b +" Adalah " + result);
}

function minus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) - Number(b)
    console.log("Hasil dari "+ a +"-"+ b +" Adalah " + result);
}

function multiply(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) * Number(b)
    console.log("Hasil dari "+ a +"x"+ b +" Adalah " + result);
}

function devide(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) / Number(b)
    console.log("Hasil dari "+ a +"/"+ b +" Adalah " + result);
}

function modulus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) % Number(b)
    console.log("Sisa Bagi dari "+ a +" Di Bagi "+ b +" Sisanya " + result);
}

function exponen(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) ** Number(b)
    console.log("Hasil dari "+ a +" Pangkat "+ b +" Adalah " + result);
}
    

/*Notes from Me 

Tipe data = 
String    : Urutan karakter untuk menyimpan dan memanipulasi teks
Number    : Menyimmpan angka, termasuk bilangan bulat dan desimal
Boolean   : memiliki 2 nilai, true atau false
Undefined : Nilai dari variabel yang belum dideklarasikan
Null      : sebuah varibel yang tidak memiliki nilai


Operator Aritmatika =
minus    : Pengurangan
multiply : Perkalian
devide   : Pembagian
modulus  : sisa dari pembagian
eksponen : pangkat

Contohnya :

Operator Perbandingan =
>   : Lebih besar
>=  : Membandingkan apakah nilainya sama atau lebih besar
<   : Lebih kecil
<=  : Membandingkan apakah nilainya sama atau lebih kecil
==  : Membandingkan persamaan nilai
=== : Membandingkan persamaan nilai dan tipe data
!=  : Membandingkan ketidaksamaan nilai dari variable
!== : Membandingkan pertidaksamaan nilai dan tipe data

Contohnya =


Operator Logika =
&& : Hasilnya true apabila kedua kondisinya sama
|| : Hasilnya true jika salah satu kondisinya true
!  : Membalikkan nilai boolean
*/