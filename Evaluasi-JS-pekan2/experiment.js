let skor = prompt("Masukkan nilai kamu (0–100):");
skor = Number(skor);

if (skor >= 90) {
  console.log("Nilai kamu: A");
} else if (skor >= 80) {
  console.log("Nilai kamu: B");
} else if (skor >= 70) {
  console.log("Nilai kamu: C");
} else if (skor >= 60) {
  console.log("Nilai kamu: D");
} else {
  console.log("Nilai kamu: E (Perlu belajar lagi)");
}
