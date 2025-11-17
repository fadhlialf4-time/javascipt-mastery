function sapaNama(nama, f1) {
    let a = f1();
    return `Halo ${nama}, ${a}`
}


function terimakasih1(){
    console.log("Warden of Time");
    return "Warden of Time"
}

function terimakasih2(){
    console.log("Demon of Sound");
}

function terimakasih3(){
    return "Secret Agent"
}

// console.log(sapaNama("Ouro Kronii", terimakasih1)); 

// ===================================================

function sapaNama(nama, f1) {
    let a = f1("Ini Param");
    return `Halo ${nama}, ${a}`
}

function terimakasih1(){
    console.log("Terimakasih 1 Ya...");
    // return "Terimakasih 1 Ya..."
}

function terimakasih2(){
    console.log("Terimakasih 2 Ya...");
}

function terimakasih3(param){
    return param
}

// console.log(sapaNama("Fadhli", terimakasih3)); 

// ===================================================

// Study Case 1
const user = {
    nama: "Yusril",
    role: "Programmer",
    level: 1
};

localStorage.setItem("user", JSON.stringify(user));

const data = JSON.parse(localStorage.getItem("user"));
console.log(data.role); //Output : Programmer

// Study Case 2
function simpanData(data, callback) {
    if (!data.nama) {
        console.log("Nama tidak boleh kosong");
        return;
    }
    callback(data);
}

simpanData({nama: "Abyan"}, (obj) => {
    console.log("Data berhasil disimpan", obj);
}); //Output : Data berhasil disimpan {nama: 'Abyan'}

//Study Case 3
function prosesArray(arr, callback) {
    const hasil = callback(arr);
    console.log(("Hasil:", hasil));
}

prosesArray([1, 2, 3], (arr) => arr.map(x => x * 2)) //Output : (3) [2, 4, 6]

// Study Case 4
let tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.splice(1, 1);  // hapus index ke 1
localStorage.setItem("tasks", JSON.stringify(tasks));

// Study Case 5
// let tasks1 = JSON.parse(localStorage.getItem("tasks"));
// tasks[0] = "belajar JavaScript dasar";
// localStorage.setItem("tasks", JSON.stringify(tasks));

// // Study Case 6
// function absen(nama) {
//   let absensi = JSON.parse(localStorage.getItem("absensi")) || [];
//   absensi.push({
//     nama,
//     waktu: new Date().toISOString()
//   });
//   localStorage.setItem("absensi", JSON.stringify(absensi));
// }

// absen("Fadhli");

// // Study Case 7
// let absensi = JSON.parse(localStorage.getItem("absensi"));
// let hariIni = absensi.filter(a => a.nama === "Fadhli");
// console.log(hariIni);

// // Study Case 8
// let absensi1 = JSON.parse(localStorage.getItem("absensi"));
// let found = absensi1.find(a => a.nama === "Fadhli");
// console.log(found);

// // Study Case 9
// let absensi2 = JSON.parse(localStorage.getItem("absensi"));

// let total = absensi2.reduce((acc, curr) => {
//   acc[curr.nama] = (acc[curr.nama] || 0) + 1;
//   return acc;
// }, {});

// console.log(total);

// // Study Case 10
// function loadTodo() {
//   return JSON.parse(localStorage.getItem("todo")) || [];
// }

// function saveTodo(list) {
//   localStorage.setItem("todo", JSON.stringify(list));
// }

// function addTodo(text) {
//   const list = loadTodo();
//   list.push({ text, done: false });
//   saveTodo(list);
// }

// addTodo("Belajar Callback");