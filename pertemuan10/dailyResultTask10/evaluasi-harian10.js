/* Latihan Mandiri
Bab 2.4 : Destructuring & Spread/Rest Operator 
Senin, 10 November 2025*/

let siswa = {
    nama: "Rina",
    usia: 17,
    kelas: "XII",
    jurusan: "IPA"
}

// Nomor 1
let {nama, kelas} = siswa;
console.log(nama, kelas); //Output : Rina XII


// Nomor 2
let siswa2 = {...siswa, nilai: 90}
console.log(siswa2); //Output : {nama: 'Rina', usia: 17, kelas: 'XII', jurusan: 'IPA', nilai: 90


// Nomor 3
function rataRata(...nilaiUjian) {
    const total = nilaiUjian.reduce((a, b) => a + b, 0)
    return total / nilaiUjian.length 
}
console.log(rataRata(45, 55, 60, 75, 80, 90, 95)); //Output : 71.42857142857143
