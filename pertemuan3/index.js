function login() {
    let email = prompt("Masukkan Email");
    let pw = prompt("Masukkan Password");

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi");
        console.log("Login Gagal");
    } else if(email == "saya@gmail.com" && pw == "112233445566") {
        console.log("Login Berhasil");
    } else {
        alert("Email Atau Password anda salah");
        console.log("Login Gagal");
    }
}

function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level akses Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}



// EXAMPLE OF >>>>>>> IF STATEMENTS


function login(){

    let email = prompt("Masukan Email")
    let pw = prompt("Masukan Password")

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi")
        console.log("Login Gagal")
    } else if (email == "saya@email.com" && pw == "112233445566") {
        console.log("Login Berhasil")
    } else {
        alert("Email Atau Password anda salah")
        console.log("Login Gagal")
    }
}

function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}

//EXAMPLE OF SWITCH 

function listMenu() {
    
    if( confirm("Anda mau makan ?")) {
        let menu = prompt('Menu Nomer Berapa anda Pilih ? \n Pilih Menu di Bawah ini: \n 1. Mie Ayam : Rp15.000 \n 2. Bakso : Rp.10.000 \n 3. Soto : Rp5.000')

        switch (menu) {
            case "1":
                console.log("Anda Pilih Mie Ayam : Rp15.000");
                break;
            case "2":
                console.log("Anda Pilih Bakso : Rp.10.000");
                break;
            case "3":
                console.log("Anda Pilih Soto : Rp5.000");
                break;
            default:
                console.log("Menu Tidak Tersedia");
                break;
        }
    }

function tanyaMenu() {
    prompt('Menu Nomor Berapa  ')
}
    
}


/*NB From Me :
- if-else statement digunakan untuk membuat keputusa berdasarkan kondisi tertentu. Jika kondisinya true, maka pernyataan pertama dijalankan. Jika false pernyataan lain dijalankan
- if-else if digunakan untuk memeriksa beberapa kondisi secara berurutan. 
- switch-case digunakan untuk membuat keputusan berdasarkan nilai yang cocok dengan berbagai kasus. Ini sering digunakan saat ada banyak kemungkinan hasil dan ingin menghindari terlalu banyak menggunakan if-else
- case digunakan untuk merepresentasika nilai yang akan dibandingkan.
- break digunakan untuk menghentikan eksekusi setelah satu kasus cocok. Jika tidak dituliskan, kasus berikutnya akan dieksekusi
- default digunakan jika tidak ada kasus yang cocok dengan ekspresi.
- \n Memnambahkan baris baru pada prompt
*/

// Contoh pemanggilan fungsi
// cekAksesPengguna('aktif', 'admin');
// cekAksesPengguna('nonaktif', 'moderator');
// cekAksesPengguna('banned', 'user');
// cekAksesPengguna('guest', 'user');