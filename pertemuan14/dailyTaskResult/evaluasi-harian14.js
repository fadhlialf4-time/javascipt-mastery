const dataElektronik = [
    { nama: "Keyboard", harga: 300000 },
    { nama: "Mouse", harga: 150000 }
];

if (!localStorage.getItem("produk")) {
    localStorage.setItem("produk", JSON.stringify(dataElektronik));
}

const dataProduk = JSON.parse(localStorage.getItem("produk"));
const list = document.getElementById("list-produk");

dataProduk.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp${item.harga.toLocaleString()}`;
    list.appendChild(li);
});