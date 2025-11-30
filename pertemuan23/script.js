// ================= REGISTER =================
document.addEventListener("DOMContentLoaded", function () {

    const halaman = window.location.pathname;

    if (halaman.includes("form-register.html")) {
        document.getElementById("formRegister").addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("masukNama").value;
            const email = document.getElementById("masukEmail").value;
            const password = document.getElementById("masukPassword").value;
            const error = document.getElementById("loginError");

            if (!nama || !email || !password) {
                error.textContent = "Semua field wajib diisi!";
                return;
            }

            const user = { 
                nama: document.getElementById("regNama").value, 
                email: document.getElementById("regEmail").value, 
                password: document.getElementById("regPassword").value };

            localStorage.setItem("user", JSON.stringify(user));

            alert("Registrasi berhasil!");
            window.location.href = "form-beranda.html";
        });
    }

    // === Login ===
    if (halaman.includes("login.html")) {
        document.getElementById("formLogin").addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const error = document.getElementById("loginError");

            const user = JSON.parse(localStorage.getItem("user"));

            if (!email || !password) {
                error.textContent = "Email dan password wajib diisi!";
                return;
            }

            if (!user) {
                error.textContent = "Belum ada akun! Silakan register.";
                return;
            }

            if (user && email === user.email && password === user.password) {
                alert("Login berhasil")
                window.location.href = "form-beranda.html";
            } else {
                error.textContent = "Email atau password salah!";
            }
        });
    }

    // === Beranda ===
    if (halaman.includes("form-beranda.html")) {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            window.location.href = "form-login.html";
        }

        document.getElementById("namaUser").textContent = user.nama;
    }
});


// ================= LOGOUT =================
function logout() {
    // Tidak menghapus akun, hanya logout saja
    alert("Berhasil logout");
}

/* DOMContentLoaded : parameter dari addEventListener yang berfungsi untuk menunggu HTML selesai diakses*/