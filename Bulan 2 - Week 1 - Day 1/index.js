// Title
function sayHello() {
    console.time("f1")
    // console.timeLog('Info Time Terkini dari F1 >>')
    // console.timeLog("f1")
    alert('Hello Fadhli')
    let nama = prompt("Nama Siapa?");
    confirm(nama + " Klik Button ")
    console.log(nama + "Button Salam Telah di Klik")
    console.count("submitted");
    console.timeEnd("f1");
}

// NB From Me :
// console.time = Memulai timer
// console.timeLog = Mengecek waktu sementara dari timer
// console.log = Menampilkan hasil ke konsol.
// console.count = Menghitung berapa kali bagian kode dipanggil
// console.countReset =  Me-reset timer dari 0
// console.timeEnd = Menghentikan timer dan menampilkan hasilnya
// console.group = Membuat grup baru di konsol
// console.groupEnd = Mengakhiri grup di konsol.
// console.table = Menampilkan data tabel dalam bentuk tabel.
// console.warn = Menampilkan warning di konsol
// console.error = Menampilkan error di konsol
// alert = Menampilkan pop-up pesan ke user
// prompt = Menampilkan pop-up dan bisa masukkan teks
// confirm = Menampilkan pop-up dan pilihan OK atau Cancel

function resetCount() {
    console.countReset("submitted");
    alert("Button Submitted ke Reset")
}

console.warn("Ini contoh warning");
console.error("Ini Contoh Error")

let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" }
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" }
];

console.table(userData)

console.group('API Response Debug');
console.log('Status Code:', apiResponse.statusCode);
console.log('Response Time:', apiResponse.responseTime);
console.log('Payload Size:', apiResponse.payloadSize);
console.groupEnd();

