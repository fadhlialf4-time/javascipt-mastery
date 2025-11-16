// Studycase 1
const barang = {nama: "Mie Ayam", harga: 8000}
const json = JSON.stringify(barang);
console.log(json) //Output : {"nama":"Mie Ayam","harga":8000}

// Studycase 2
const buku = '{"judul": "The Lost World", "tahun": 1912}'
const obj = JSON.parse(buku)
console.log(buku); //Output : {"judul": "The Lost World", "tahun": 1912}

// Studycase 3
JSON.stringify(["yudist", "firman", "akbar"]);
console.log(JSON);
