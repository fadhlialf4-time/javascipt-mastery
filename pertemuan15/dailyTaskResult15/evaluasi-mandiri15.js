function savingUser(nama, callback) {
    console.log(`Sedang melalukan transfer ke ${nama}`);
    setTimeout(function() {
        console.log("Tunggu Sebentar...");
        callback();
    }, 2000)
}

function notificationAppears() {
    console.log("Transaksi kamu berhasil");
}

savingUser("Fadhli", notificationAppears)