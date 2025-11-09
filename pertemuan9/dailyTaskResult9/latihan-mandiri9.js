// Nomor 1

let buku = {
    judul: "The Last World",
    pengarang: "Artur Conan Doyle",
    tahunTerbit: 1945
};

// Nomor 2
buku.penerbit = "Hooder & Stoughton";
console.log(buku["penerbit"]); //Output : Hooder & Stoughton

// Nomor 3
buku.tahunTerbit = 1912;
console.log(buku["tahunTerbit"]); //Output : 1945

// Nomor 4
delete buku.pengarang;
console.log(buku) //Output : {judul: 'The Last World', tahunTerbit: 1945, penerbit: 'Hooder & Stoughton'}

// Nomor 5
for (let key in buku) {
    console.log(`Pada Key => "${key}" Valuenya => "${buku[key]}"`);
}
/* Output :
Pada Key => "judul" Valuenya => "The Last World"
Pada Key => "tahunTerbit" Valuenya => "1912"
Pada Key => "penerbit" Valuenya => "Hooder & Stoughton"
*/
