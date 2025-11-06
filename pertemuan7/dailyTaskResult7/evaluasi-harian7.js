let belanja = ["biskuit", "wafer", "indomie", "roti", "keripik", "teh"];
belanja.push("kopi");
belanja.unshift("dorayaki");

belanja.shift();
belanja.pop();

belanja.splice(1,1, "beras");
console.log("Daftar belanja :", belanja);
console.log("Jumlah item :", belanja.length);