/* Tipe data */

// String
const nama = 'Fadhli'
const negara = "Indonesia"
const domisili = `${nama} Jakarta`

// Number
const umur = 18

// Boolean
const manusia = true

// Undefined
let x;

// null
const value = null


/* Operator Aritmatika*/
// Penjumlahan +
let a = 5
let b = 10
let jumlah = a + b 

// Pengurangan -
let c = 7
let d = 5
let kurang = c - d 

// Perkalian *
let e = 5
let f = 7
let kali = e * f

// Pembagian /
let g = 18
let h = 4
let bagi = r / s

// Modulus %
let i = 38
let j = 4
let modulus = i % j

// Eksponen
let k = 2
let l = 3
let eksponen = k ** l

// Increment
let incre = 5
incre++

// Decrement 
let decre = 5
decre--


/* Operator Perbandingan
= Menghasilkan nilai Boolean */

// == Membandingkan persamaan nilai
let m = "5"
let n = 5

// === Membandingkan persamaan nilai dan tipe data
let o = "5"
let p = 5 

// != Membandingkan ketidaksamaan nilai dari variable
let q = "5"
let r = 5 

// !== Membandingkan pertidaksamaan nilai dan tipe data
let s = "5"
let t = 5

// > Lebih besar
let u = 7
let v = 10 

// >= Membandingkan apakah nilainya sama atau lebih besar
let w = 12
let x = 10  

// < Lebih kecil
let y = 7
let z = 10

// <= Membandingkan apakah nilainya sama atau lebih kecil
let aa = 19
let ab = 19 


/* Operator Logika */
// And &&
let ac = true
let ad = true  
let andLogic = ac && ad

// Or ||
let ae = true
let af = false
let orLogic = ae || af

// Not !
let ag = false
let notLogic = !v


/* If-Else Statement */
let number = 14

if (number > 0)
if (number %2 ==0){
    console.log('Number ini adalah positif dan bilangan genap')
} else {
    console.log('Number ini adalah positive dan bilangan ganjil')
} else {
    console.log('Number ini adalah bilangan negatif')
}

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
console.log(namaHari);

/* Function */
function menyapa() {
    console.log(`Halo semuanya!`)
}
