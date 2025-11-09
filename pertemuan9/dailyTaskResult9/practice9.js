// Pertemuan 9 - Sabtu, 8 November 2025

// Level 1 - Easy Mode
const santri = ["Anas", "Ibrahim", "Sanad", "Thariq", "Ammar", "Rayyan", "Danial", "Zayid", "Aqil", "Rahman"]

santri.push = ["Ahdad", "Hawari", "Husni"]

let hapusIzin = santri.indexOf("Danial");
if (hapusIzin !== -1) {
    santri.splice(hapusIzin, 1);
}
console.log(santri);

