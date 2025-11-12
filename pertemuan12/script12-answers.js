// Nomor 1
let harga = 10000
let qty = 3
let kali = harga * qty
console.log(kali); //Output : 30000

let diskonPct = 10 //diskon 10%
let minusDiskon = kali - diskonPct
console.log(minusDiskon); //Output : 29999.9

let pajakPct = 11 //pajak 11%
let plusPajak = minusDiskon + pajakPct
console.log(plusPajak); //Output : 30000.010002


// Nomor 2
let nilai = 95

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else if (nilai >= 70) {
  console.log("Nilai C");
} else if (nilai >= 60) {
  console.log("Nilai D");
} else {
    console.log("Nilai E");
} 
//Output : Nilai A


// Nomor 3
let kode = "S";
let kategori;
 
switch (kode) {
	case "M":
		kategori = 'Mentor';
		console.log('Mentor');
        break
	case "A":
		kategori = 'Admin';
		console.log('Admin');
        break
	case "S":
		kategori = 'Santri';
		console.log('Santri');
        break
    case "T":
		kategori = 'Tamu';
		console.log('Tamu');
        break
	default:
		kategori = 'Kode tersebut tidak valid';
}
//Output : Santri


// Nomor 4
let arr = [1, 2, 3, 4, 6]
let total = 0

for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    total += arr[i];
    }
}
console.log(total) //Output : 12


// Nomor 5
let batas = 1000;
let total1 = 0;

for (let i = 1; i <= batas; i++) {
  if (total1 + i > batas) {
    break; 
  }
  total1 += i; 
}

console.log(total1); //Output : 990


// Nomor 6
function luasPersegiPanjang(p,l) {
    console.log(p*l)
}
luasPersegiPanjang(5,3) //Output 15

const luasPersegi = 4
const luasPersegi1 = 4
console.log(luasPersegi * luasPersegi1)


// Nomor 7
let siswa = ["Ali"]
siswa.push("Zaid")
// console.log(siswa) //Output : (2) ['Ali', 'Zaid']

siswa.shift()
console.log(siswa) //Output : ['Zaid']


// Nomor 9
let santri = [
    {nama: "Ali", nilai: 70},
    {nama: "Fatimah", nilai: 90}
];

let tambah = 5 
let hasil = santri.map(baru => {
  return {
    nama: baru.nama,
    nilaiBaru: baru.nilai + tambah
  };
});

console.log(hasil);
/* Output : (2) [{…}, {…}]
0: {nama: 'Ali', nilaiBaru: 75}
1: {nama: 'Fatimah', nilaiBaru: 95} */


// Nomor 10
let arr2 = [
  { nama: "Ali", nilai: 80 },
  { nama: "Zaid", nilai: 60 }
];
let batas1 = 70;
let namaDicari = "Ali";

let lulus = arr2.filter(s => s.nilai >= batas1);
let temuan = arr2.find(s => s.nama === namaDicari) || null;

console.log("lulus:", lulus);
console.log("temuan:", temuan);

// Nomor 11
let nilai1 = [80, 90, 70, 100];

let total2 = nilai1.reduce((a, b) => a + b, 0);
let rata = nilai1.length > 0 ? total2 / nilai1.length : 0;

let hasil1 = { total, rata };

console.log(hasil1); //Output : {total: 12, rata: 85}


// Nomor 12
let obj = { nama: "Ali" };
let key = "kelas";
let value = "A";

let objBaru = { ...obj, [key]: value };

let hasil2 = {
  value: objBaru[key],
  obj: objBaru
};

console.log(hasil2);

