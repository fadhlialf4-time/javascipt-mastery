/* Latihan Mandiri
Bab 2.5 : Latihan Kombinasi Manipulasi Data 
Selasa, 11 November 2025 */

// Nomor 1
let siswa = [
    {nama: "Beni", nilai: 90, jurusan: "Sejarah"},
    {nama: "Randi", nilai: 80, jurusan: "IPA"},
    {nama: "Jaka", nilai: 85, jurusan: "Matematika"},
    {nama: "Dena", nilai: 95, jurusan: "IPA"},
    {nama: "Rasya", nilai: 70, jurusan: "Bahasa Indonesia"},
    {nama: "Kiara", nilai: 90, jurusan: "IPA"},
    {nama: "Falah", nilai: 75, jurusan: "Bahasa Inggris"},
];

let ambilIpa = siswa.filter((murid) => {
    return murid.jurusan === "IPA";
});
console.log(ambilIpa); 
/*Output : (3) [{…}, {…}, {…}]
0: {nama: 'Randi', nilai: 80, jurusan: 'IPA'}
1: {nama: 'Dena', nilai: 95, jurusan: 'IPA'}
2: {nama: 'Kiara', nilai: 90, jurusan: 'IPA'}
length : 3 */

// Nomor 2
let delapanPuluh = siswa.filter((siswa) => siswa.nilai > 80);
console.log(delapanPuluh); 
/* Output : (4) [{…}, {…}, {…}, {…}]
0: {nama: 'Beni', nilai: 90, jurusan: 'Sejarah'}
1: {nama: 'Jaka', nilai: 85, jurusan: 'Matematika'}
2: {nama: 'Dena', nilai: 95, jurusan: 'IPA'}
3: {nama: 'Kiara', nilai: 90, jurusan: 'IPA'}
length: 4 */

// Nomor 3
function rataRata(...nilai) {
const totalNilai = nilai.reduce((a, b) => a + b, 0)
    return totalNilai / nilai.length
}
console.log(rataRata(90, 85, 80, 95, 70, 90, 75)); 
//Output : 83.57142857142857
