// Nomor 1
const user = { name: "Fadhli", age: 18 };
const json = JSON.stringify(user);
console.log(json) //Output : {"name":"Fadhli","age":18}

// Nomor 2
const buah = '{"nama": "mangga", "rasa": "manis"}';
const objek = JSON.parse(buah);
console.log(objek.nama); //Output : mangga

// Nomor 3
let num = [10, 20, 30, 40, 50]
let number = JSON.stringify([10, 20, 30, 40, 50]);
console.log(number) //Output : [10,20,30,40,50]

// Nomor 4
const stud = [
    {nama: "Yudist"},
    {nama: "Akbar"}
];
const student = JSON.stringify(stud);
console.log(student); //Output : [{"nama":"Yudist"},{"nama":"Akbar"}]

// Nomor 5
const score = JSON.parse('{"andi": 90, "fandi": 85}');
console.log(score.fandi); //Output : 85

// Nomor 6
const murid = ('{"sandi": 80, "pandu": 75}');

try {
    let hasil = JSON.parse(murid);
    console.log(hasil);
} catch {
    console.log("JSON tidak bekerja");
}
//Output : {sandi: 80, pandu: 75}

// Nomor 7 
localStorage.setItem("score", JSON.stringify({ level: 3, point:120 }));

const skor = {level: 3, point: 120}
const hasil = JSON.stringify(skor)
console.log(skor);

// Nomor 8
const getItem = ('{"level": 100, "item": "nurse horns"}')
const getItem2 = JSON.parse(getItem)
console.log(getItem2);

