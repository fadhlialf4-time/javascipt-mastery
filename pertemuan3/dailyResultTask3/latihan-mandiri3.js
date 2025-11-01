function usia() {
    
    let umur = prompt("Berapa usiamu?")

    if(umur >= 19) {
        alert("Kamu Masuk ke dalam Kategori Dewasa")
        console.log('Dewasa')
    } else if(umur >= 10) {
        alert("Kamu Masuk ke dalam Kategori Remaja")
        console.log('Remaja')
    } else if(umur >= 6) {
        alert("Kamu Masuk ke dalam Kategori Anak-anak")
        console.log('Anak-anak')
    } else if(umur >= 1) {
        alert("Kamu Masuk ke dalam Kategori Balita")
        console.log('Balita')
    }
}

function cetakAngka() {
    for (let i = 1; i <= 10; i++) {
    console.log(`Iterasi ke-${i}`);
    }
}

    
function namaHari() {
    let hari = prompt("Masukkan angka 1–7 untuk mengetahui nama hari:");

    switch (hari) {
        case "1":
            console.log("Senin");
            break;
        case "2":
            console.log("Selasa");
            break;
        case "3":
            console.log("Rabu");
            break;
        case "4":
            console.log("Kamis");
            break;
        case "5":
            console.log("Jumat");
            break;
        case "6":
            console.log("Sabtu");
            break;
        case "7":
            console.log("Minggu");
            break;
        default:
            console.log("Nomor tidak valid! Masukkan 1–7");
            break;
    }
}
