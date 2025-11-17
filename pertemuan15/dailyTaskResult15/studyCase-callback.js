// Nomor 1
/* ⁢Callback function⁡ ⁡⁣⁣⁢adalah function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut.⁡*/

function selesaiLogin(apk, callback) {
    console.log(`Sedang melakukan login ke ${apk}`)
    callback()
}

function konfirmasi() {
    console.log("Login berhasil");
}

selesaiLogin("Google...", konfirmasi)

// Nomor 2
function sapaUser(status) {
    console.log("Halo " + status);
}

function statusSantri(callback) {
    console.log("Loading data...");
    callback("Santri")
}

statusSantri(sapaUser)

// Nomor 3
function tambah(callback, x, y) {
    let samaDengan = x + y;
    callback(samaDengan)
}

function hasil(result){
    console.log(result);
}
tambah(hasil, 5, 8)

// Nomor 4
/* Harus menggunakan JSON.stringify di localStorage karena localStorage hanya menyimpan data string, mengubah objek Javascript, array ke dalam string*/

// Nomor 5
localStorage.setItem("data", "Belajar JS")

// Nomor 6
let panggilData = localStorage.getItem("data")
console.log(panggilData)

// Nomor 7
let number = [1, 2, 3]
localStorage.setItem("listNumber", JSON.stringify(number))

// Nomor 8
const panggilNumber = JSON.parse(localStorage.getItem("listNumber"))
console.log(panggilNumber)

// Nomor 9
/* JavaScript Object Notation (JSON) adalah sebuah file format standar yang menggunakan tulisan yang dapat dibaca oleh manusia untuk pertukaran data, yang didalamnya berisi key dan value*/

// Nomor 10
const santri = [
    {nama: "Akbar", kelas: 12, nilai: 85},
    {nama: "Firman", kelas: 12, nilai: 90},
    {nama: "Yudist", kelas: 12, nilai: 80}
]
localStorage.setItem("listSantri", JSON.stringify(santri));


// Nomor 12
function tunda(callback) {
    setTimeout(() => {
        callback()}, 1000);
}
tunda(function() {
    console.log("Inilah hasil callback dari 1 detik")
});
