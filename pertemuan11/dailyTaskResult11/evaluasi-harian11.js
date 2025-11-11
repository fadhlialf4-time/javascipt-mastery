/* Evaluasi Harian
Bab 2.5 : Latihan Kombinasi Manipulasi Data
Selasa, 11 November 2025 */

const transaksi = [
  { namaBarang: "Beras Premium 5kg", jumlah: 5, hargaSatuan: 60000 },
  { namaBarang: "Minyak Goreng 1 liter", jumlah: 10, hargaSatuan: 20000 },
  { namaBarang: "Gula Pasir 1kg", jumlah: 3, hargaSatuan: 15000 },
  { namaBarang: "Tepung Terigu 1kg", jumlah: 10, hargaSatuan: 10000 },
  { namaBarang: "Susu UHT 1 liter", jumlah: 4, hargaSatuan: 15000 },
];

// Daftar barang yang total belanjanya (jumlah * harga) lebih dari 500 ribu
const barangMahal = transaksi.filter(item => item.jumlah * item.hargaSatuan > 500000);
console.log(barangMahal);

// Total semua belanja
const totalBelanja = transaksi.reduce((total, item) => total + (item.jumlah * item.hargaSatuan), 0);
console.log(totalBelanja);

// Array baru yang berisi hanya namaBarang dan totalBelanja
const ringkasanBelanja = transaksi.map(item => ({
  namaBarang: item.namaBarang,
  total: item.jumlah * item.hargaSatuan
}));
console.log(ringkasanBelanja);
