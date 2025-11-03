
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Operator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});

function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

function logggingNama(nama, alamat, rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    return "Ini Hasil Return"
    return result
}

function f1(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

// Form F2
function f2() {
  const num = prompt("Masukkan angka:");
  if (!num) return;
  const hasil = num % 2 === 0 ? "Genap" : "Ganjil";
  document.getElementById("outputBox").innerText += `\nF2: Angka ${num} adalah ${hasil}\n`;
}

/* NB From Me :
⁡⁣⁢⁢Function di JavaScript⁡ ⁡⁣⁣⁢adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan berulang kali.
Parameter adalah variabel yang didefinisikan dalam deklarasi function.
Argumen adalah nilai yang diberikan saat function dipanggil⁡
Return : Mengembalikan nilai dari console. Setela return dieksekusi, ekskusi function akan terhenti
Function Ekspresi merupakan function yang disimpan dalam variabel.
${} : Menyisipkan nilai dari variabel
document : Membaca struktur HTML
*/