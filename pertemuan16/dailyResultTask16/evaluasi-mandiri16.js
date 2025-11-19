function dataProduk() {
    return new Promise((resolve) => {
        console.log("Mengambil data produk...");

        setTimeout(() => {
            resolve([
                { nama: "Mie Ayam", harga: 15000 },
                { nama: "Ketoprak", harga: 20000 },
                { nama: "Rawon", harga: 25000 }
            ]);
        }, 1000);
    });
}

function hitungTotal(products) {
    return new Promise((resolve) => {
        console.log("Menghitung total belanja...");

        setTimeout(() => {
            const total = products.reduce((acc, p) => acc + p.harga, 0);
            resolve({ products, total });
        }, 1000);
    });
}

function tampilHasil(result) {
    return new Promise((resolve) => {
        console.log("Siap menampilkan struknya...");

        setTimeout(() => {
            console.log("DAFTAR PRODUK");
            result.products.forEach((item) => {
                console.log(`${item.nama} - Rp${item.harga}`);
            });
            console.log(`TOTAL: Rp${result.total}`);
            resolve("Checkout selesai!");
        }, 1000);
    });
}

dataProduk()
    .then((products) => hitungTotal(products))
    .then((result) => tampilHasil(result))
    .then((msg) => console.log(msg))
    .catch((err) => console.log("ERROR:", err));
