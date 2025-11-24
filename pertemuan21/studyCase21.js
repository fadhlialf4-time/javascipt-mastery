// Nomor 1
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    const input = document.getElementById('textInput').value;

    if (input.trim() === "") { 
        alert('Input tidak boleh kosong!');
        e.preventDefault(); 
    }
});

// Nomor 2
const form1 = document.getElementById('myForm');
form1.addEventListener('submit', function(event) {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Masukkan email yang valid!');
        event.preventDefault();
    }
});

// Nomor 3
const form2 = document.getElementById('myForm');
form2.addEventListener('submit', function(event) {
    const phone = document.getElementById('phoneInput').value;
    if (!/^[0-9]+$/.test(phone)) {
        alert('Nomor telepon hanya boleh terdiri dari angka!');
        event.preventDefault();
    }
});

// Nomor 4
const form3 = document.getElementById('myForm');
form3.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    if (password.length < 8) {
        alert('Password harus terdiri dari minimal 8 karakter!');
        event.preventDefault();
    }
});

// Nomor 5
const form4 = document.getElementById('myForm');

form4.addEventListener('submit', function(event) {
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        event.preventDefault();
    }
});