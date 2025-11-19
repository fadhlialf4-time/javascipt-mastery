// Pertemuan 17 - Rabu, 19 November 2025

// Easy Level
// Nomor 1

async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    const data = await res.json();

    const infoUser = {
        nama: `${data.firstName} ${data.lastName}`,
        umur: data.age
    };
    console.log(infoUser);
    
    localStorage.setItem("user_1", JSON.stringify(infoUser));

  } catch(error) {
    console.error("Gagal mengambil data:", error);
  }
}

getUser()


// Nomor 2
async function loadErrorExample() {
    try {
        const res = await fetch("https://dummyjson.com/halaman-yang-tidak-ada");

        if (!res.ok) {
            throw new Error("Halaman tidak ditemukan (404)");
        }

        const data = await res.json();

    } catch (error) {

        localStorage.getItem("last_error", error.message)

        alert(error.message);
    }
}

loadErrorExample();


// Nomor 3
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  const filtered = products.filter(p => p.price > 100);
  console.log(filtered.map(p => p.title));

  const daftarHarga = filtered.map( p => p.price);

  localStorage.getItem("simpanHarga", JSON.stringify(daftarHarga))
}

getProducts()

// Nomor 4
function loadDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5

      if (success) {
        resolve("Data siap")
      } else {
        reject("Gagal mengambil data")
      }
    }, 1000);
  });
}

async function run() {
  try {
    const hasil = await loadDataPromise();
    console.log(hasil);
  } catch (error) {
    console.error("Terjadi error:", error)
  }
}
run()

// Nomor 5
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function runStep() {
  console.log("Mulai");

  await delay(500);
  console.log("Step 1 selesai (500ms)");
  localStorage.setItem("step1_done", Date.now());

  await delay(1500);
  console.log("Step 2 selesai (1500ms)");
  localStorage.setItem("step2_done", Date.now());

  await delay(2000);
  console.log("Step 3 selesai (2000ms)");
  localStorage.setItem("step3_done", Date.now());

  console.log("Semua step kelar 🔥");
}

runStep();

console.log(new Date(parseInt(localStorage.getItem("step1_done"))));
console.log(new Date(parseInt(localStorage.getItem("step2_done"))));
console.log(new Date(parseInt(localStorage.getItem("step3_done"))));

// Nomor 6
async function loadCart() {
  const res = await fetch("https://dummyjson.com/carts/1");
  const cart = await res.json();

  // simpan cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // ambil kembali dari localStorage
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  console.log("Cart dari localStorage:", savedCart);

  // hitung total harga
  const total = savedCart.products.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  console.log("Total harga:", total);
}

loadCart();

// Nomor 7
async function saveName(name) {
  try {
    if (name.length < 3) throw new Error("Nama terlalu pendek");

    // simpan nama
    localStorage.setItem("username", name);

    // simpan timestamp sukses
    localStorage.setItem("username_saved_at", Date.now());

    console.log("Nama disimpan");

  } catch (error) {

    // simpan error ke localStorage
    localStorage.setItem("error_name", error.message);

    console.log(error.message);
  }
}

// Nomor 8
async function getExpensive() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  // filter produk dengan harga > 300
  const expensive = products
    .filter(p => p.price > 300)
    .sort((a, b) => b.price - a.price); // urutkan descending

  console.log(expensive);

  // simpan ke localStorage
  localStorage.setItem("expensive_products", JSON.stringify(expensive));
}

getExpensive();

// Medium Level
// Nomor 9
async function createUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Santri",
        age: 20,
        skills: ["JavaScript", "HTML", "CSS"] // 🚀 tambah skill di sini
      })
    });

    const data = await res.json();
    console.log(data);

    // simpan respons ke localStorage
    localStorage.setItem("new_user", JSON.stringify(data));

  } catch (error) {
    console.log("Gagal:", error);
  }
}

createUser();

// Nomor 10
async function updateUser(name) {
  try {
    // validasi dulu biar ga zonk
    if (!name || name.trim() === "") {
      throw new Error("Nama tidak boleh kosong");
    }

    const res = await fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    console.log(data);

    // simpan ke localStorage
    localStorage.setItem("updated_user", JSON.stringify(data));

  } catch (error) {
    console.error("Error:", error.message);
  }
}

updateUser("Nama Baru");