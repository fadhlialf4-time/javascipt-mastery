let bukuFavorite = {
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    tahun: 2008
};

// Nomor 1
bukuFavorite.kategori = "Pemrogramman"
console.log(bukuFavorite["kategori"]); //Output : Pemrogamman


// Nomor 2
bukuFavorite.tahun = 2010;
console.log(bukuFavorite["tahun"]); //Output : 2010

// Nomor 3
delete bukuFavorite.penulis
console.log(bukuFavorite) //Output : {judul: 'Clean Code', tahun: 2010, kategori: 'Pemrogramman'}

// Nomor 4
for (let key in bukuFavorite) {
    console.log(`"${key}" dari buku ini adalah "${bukuFavorite[key]}"`); 
}
/* Output : 
"judul" dari buku ini adalah "Clean Code"
"tahun" dari buku ini adalah "2010"
"kategori" dari buku ini adalah "Pemrogramman"
*/


