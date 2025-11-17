// Nomor 1
function prosesData(data, callback) {
    console.log("Hello " + data);
    callback();
}

function jalankanCallback() {
    console.log("Senang bekenalan denganmu");
}

prosesData("Fadhli", jalankanCallback);


// Nomor 2
function mulaiCallback(statement, callback) {
    console.log(`- Callback dimulai : ${statement}`);
    setTimeout(function() {
        console.log("- Hasil dari callback setelah 3 detik");
        callback();
    }, 3000);
}

function processCompleted() {
    console.log("- Proses Selesai");
}

mulaiCallback("Dari sekarang", processCompleted)


// Nomor 3
function number()  {
    for(let i = 1; i <= 5; i++) {
    console.log(i);
    }
}
number()

function panggilCallback() {
    console.log("Selesai mencetak");
}
panggilCallback()