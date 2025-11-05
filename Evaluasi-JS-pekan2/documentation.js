/* Tugas 2 (Practice) */

/* Tipe data */
// String
const nama = 'Fadhli' //Output : Fadhli
const negara = "Indonesia" //Output : Indonesia
const domisili = `${nama} Jakarta` //Output : Fadhli Jakarta

// Number
const umur = 18 //Output : 18

// Boolean
const manusia = true //Output : true

// Undefined
let bb; //Output : undefined

// null
const value = null //Output : null


/* Operator Aritmatika*/
// Penjumlahan +
let a = 5
let b = 10
let jumlah = a + b //Output : 15

// Pengurangan -
let c = 7
let d = 5
let kurang = c - d //Output : 2

// Perkalian *
let e = 5
let f = 7
let kali = e * f //Output : 35

// Pembagian /
let g = 18
let h = 4
let bagi = g / h //Output : 4.5

// Modulus %
let i = 38
let j = 4
let modulus = i % j //Output : 2

// Eksponen
let k = 2
let l = 3
let eksponen = k ** l //Output : 8

// Increment
let incre = 5
incre++ //Output : 6

// Decrement 
let decre = 5
decre-- //Output : 4


/* Operator Perbandingan */
// == Membandingkan persamaan nilai
let m = "5"
let n = 5 //Output : true

// === Membandingkan persamaan nilai dan tipe data
let o = "5"
let p = 5 //Output : false

// != Membandingkan ketidaksamaan nilai dari variable
let q = "5"
let r = 5 //Output : false

// !== Membandingkan pertidaksamaan nilai dan tipe data
let s = "5"
let t = 5 //Output : true

// > Lebih besar
let u = 7
let v = 10 //Output : false

// >= Membandingkan apakah nilainya sama atau lebih besar
let w = 12
let x = 10 //Output : true 

// < Lebih kecil
let y = 7
let z = 10 //Output : true

// <= Membandingkan apakah nilainya sama atau lebih kecil
let aa = 19
let ab = 19 //Output : true


/* Operator Logika */
// And &&
let ac = true
let ad = true  
let andLogic = ac && ad //Output : true

// Or ||
let ae = true
let af = false
let orLogic = ae || af //Output : true

// Not !
let ag = false
let notLogic = !v //Output : false  


/* If-Else Statement */
let number = 14

if (number > 0)
if (number %2 ==0){
    console.log('Number ini adalah positif dan bilangan genap')
} else {
    console.log('Number ini adalah positif dan bilangan ganjil')
} else {
    console.log('Number ini adalah bilangan negatif')
}
//Output : Number ini adalah positif dan bilangan genap 



/* Switch-Case */
const hari = 5;
let namaHari;
 
switch (hari) {
	case 1:
		namaHari = 'Senin';
		console.log('Senin');
	case 2:
		namaHari = 'Selasa';
		console.log('Selasa');
	case 3:
		namaHari = 'Rabu';
		console.log('Rabu');
	case 4:
		namaHari = 'Kamis';
		console.log('Kamis');
	case 5:
		namaHari = 'Jumat';
		console.log('Jumat');
		break;
	case 6:
		namaHari = 'Sabtu';
		console.log('Sabtu');
	case 7:
		namaHari = 'Minggu';
		console.log('Minggu');
	default:
		namaHari = 'Hari tidak valid';
}
//Output : Jumat



/* Function */
function menyapa() {
    console.log(`Halo semuanya!`)
} 
// Output : Halo semuanya!