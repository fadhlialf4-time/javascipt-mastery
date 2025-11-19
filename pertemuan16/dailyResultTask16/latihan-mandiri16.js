// Nomor 1
function login(username, password) {
    return new Promise((resolve, reject) => {
    if (username === "fadhli" && password === "12345") {
        resolve("Login berhasil")
    } else {
        reject("Username atau password salah")
    }
    });
}
login("fadhli", "12345")
    .then(appear => console.log(appear))
    .catch(failed => console.log(failed))

// Nomor 2
function proses(user) {
    return new Promise((resolve) => {
        console.log("Sedang mencari data user...");
        
        setTimeout(() => {
            resolve({nama: "Fadhli", umur: 20})
        }, 1000)
    })
}

function munculkanPesan(user) {
    return new Promise((resolve) => {
        console.log("Sedang menyiapkan pesan sambutan...")
        
        setTimeout(() => {
            resolve(`Halo ${user.nama}! Selamat datang di website kami`)
        }, 1000)
    })
}
proses()
    .then((user) => {
        console.log("Data user sudah dapat")
        return munculkanPesan(user)
    })
    .then((pesan) => {
        console.log(pesan);
    })
    .catch((error) => {
        console.log("Terjadi error", error)
    })

// Nomor 3
function beliBarang(hargaAwal) {
    return new Promise((resolve, reject) => {
        console.log("Pelanggan sedang mikir dulu...");

        setTimeout(() => {
            if (hargaAwal < 150000) {
                resolve("Boleh bang! Saya beli");
            } else {
                reject("Mahal banget bang");
            }
        }, 2000);
    });
}
beliBarang(160000)
    .then(result => console.log(result))
    .catch(error => console.log(error))
