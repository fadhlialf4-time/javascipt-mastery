let janji = new Promise((resolve, reject) => {
    let sukses = true;

    if (sukses) {
        resolve("Data berhasil diambil!");
    } else {
        reject("Gagal mengambil data!");
    }
});

// menanganinya
janji
    // .then(result => console.log(result))     // kalau resolve
    // .catch(error => console.log(error));     // kalau reject

// ==================================================

function negoHarga(hargaAwal) {
    return new Promise((resolve, reject) => {
        console.log("Pelanggan lagi mikir dulu... 🤔");

        setTimeout(() => {
            // misalnya pelanggan cuma mau jika harga < 150k
            if (hargaAwal < 150000) {
                resolve("Deal bang! Saya beli 😄");
            } else {
                reject("Aduh bang, kemahalan... saya cari yang lain 😭");
            }
        }, 2000);
    });
}
// negoHarga(145000)
//     .then(result => console.log("Sukses: ", result))
//     .catch(error => console.log("Gagal: ", error))

// ==================================================

function cekDiskon(harga) {
    return new Promise((resolve, reject) => {
        console.log("Bentar bang, mau lihat-lihat dulu...")

        setTimeout(() => {
            if (harga < 200000){
                resolve("Mantap bang, dapat diskon!")
            } else {
                reject("Belum bisa diskon bang");
            }
        }, 3000)
    });
}
// cekDiskon(250000)
//     // .then(berhasil => console.log(berhasil))
//     // .catch(gagal => console.log(gagal));

// ==================================================

function cekStok(jumlah) {
    return new Promise((resolve, reject) =>{
        console.log("Sebentar, saya cek stok ya mas...");
        
        setTimeout(() => {
            if (jumlah > 0) {
                resolve(`Stok tersedia : ${jumlah} pcs`)
            } else {
                reject(`Stok kosong bang`)
            }
        }, 2000)
    });
}
// cekStok(0)
//     .then(success => console.log(success))
//     .catch(fail => console.log(fail))
    

// ==================================================

function cekInput(nama, harga) {
    return new Promise((resolve, reject) => {
        if (!nama || !harga) {
            reject("Form belum lengkap, isi dulu dong 😅");
        } else {
            resolve("Form lengkap! lanjut proses...");
        }
    });
}

// // cekInput("Plushie", 850000)
// //     .then(msg => console.log(msg))
// //     .catch(err => console.log(err));


// Chaining pada Promise
function cekStok(namaProduk) {
    return new Promise((resolve, reject) => {
        console.log("🔍 Cek stok...");

        setTimeout(() => {
            const stok = 10; // misal tersedia

            if (stok > 0) {
                resolve({ nama: namaProduk, stok });
            } else {
                reject("Stok habis, bang... 😭");
            }
        }, 1000);
    });
}

function hitungDiskon(data) {
    return new Promise((resolve) => {
        console.log("💸 Ngitung diskon...");

        setTimeout(() => {
            const harga = 150000;
            const diskon = 20000;
            const total = harga - diskon;

            resolve({ ...data, harga, diskon, total });
        }, 1000);
    });
}

function prosesPembayaran(data) {
    return new Promise((resolve, reject) => {
        console.log("💳 Proses pembayaran...");

        setTimeout(() => {
            const saldoCukup = true;

            if (saldoCukup) {
                resolve({ ...data, statusBayar: "Lunas" });
            } else {
                reject("Saldo kamu lagi miskin 😭");
            }
        }, 1000);
    });
}

function kirimBarang(data) {
    return new Promise((resolve) => {
        console.log("🚚 Barang sedang dikirim...");

        setTimeout(() => {
            resolve({ ...data, pengiriman: "Sedang dikirim via kurir" });
        }, 1000);
    });
}

// Eksekusi chaining
// cekStok("Gamis Syari")
//     .then(hitungDiskon)
//     .then(prosesPembayaran)
//     .then(kirimBarang)
//     .then(result => {
//         console.log("🎉 Pesanan selesai!");
//         console.log(result);
//     })
//     .catch(error => {
//         console.log("❌ ERROR:", error);
//     });

 /* NB From Me :
 Pending : Sedang berjalan (Janji udah dibuat, tapi belum ada hasilnya)
 Fulfilled : Berhasil (Promise berhasil jalanin tugasnya)
 Rejected : Gagal (Salah input, atau hal lainnya yang bikin promise batal)*/

 function proses1() {
    return new Promise((resolve) => {
        console.log("Sedang mengambildata user");
        
        setTimeout(() => {
            resolve({nama: "Fadhli", umur: 20})
        }, 1000)   
    })
 }

