// var a = 90
// console.log(`  >>> ${a}`);

// function funvar () {
//     // var a = "100"
//     var a = "100"

// }

// console.log(`>>>>2 ${a}`);
// funvar()
//     console.log(` >>>>3 ${a}`)

// function scopeFun() {
//     if(true) {
//         var x = "Saya X"
//             // console.log(x);
//     }
//     console.log(x);
// }


// Menentukan posisi var
// let cvb = true

// function dfg() {
//     var lop = 100
//     var lop = "Loop 2"
//     if(true) {
//         var lop = true
//         var lop = "Loop 4"
//         // console.log(lop)
//     }
//     // console.log(lop)
//     // return lop
// }
// console.log(dfg());
// console.log(lop)

function sayHello (say = '') {

    alert(say)

    return function (namaDepan='')
        alert(say + "" + namaDepan)
}


/*NB From Me :
block scope, variabel yang dijelaskan didalam suatu blok, misal if, for, dll
local scope, merupakan variabe yang hanya dijelaskan didalam function
global scope, merupakan variabel yang dijelaskan diluar function

 misal :
<script>

    //global scope
    let globe = 5

    function other() {
        // local scope
    }

</script>

rewrite : Mengganti value dari variabel ketika dibutuhkan (diinialisasi ulang)
misal : let a = 5 bisa diganti dengan let b = 4 didalam 1 scope
redeclare : mendeklarasi ulang 

Variabel adalah wadah yang digunakan menyimpan data yang dapat berubah sepanjang program berjalan. Analogi seperti kotak yang menyimpan nilai, dan bisa mengganti isi tersebut kapan saja
var, variabel yang bisa diakses diluar scopes. Namun var untuk variabel sudah tidak direkomendasi lagi, karena ada masalah dari desain awalnya
let, variabel yang dapat diubah-ubah semau kita dan bisa diakses didalam scope
const : ketika variabel yang sudah diisi, maka sudah tidak bisa dibah lagi value nya
*/