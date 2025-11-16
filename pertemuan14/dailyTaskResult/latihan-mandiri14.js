// Nomor 1
const dataDiri = {nama: "Fadhli", umur: 18, alamat: "Palmerah"};
const jsonData = JSON.stringify(dataDiri);
console.log(jsonData); //Output : {"nama":"Fadhli","umur":18,"alamat":"Palmerah"}

// Nomor 2
localStorage.setItem("biodata", jsonData);
const getData = localStorage.getItem("biodata");

const obj = JSON.parse(getData);
console.log(obj) //Output : {nama: 'Fadhli', umur: 18, alamat: 'Palmerah'}

// Nomor 3
const item = {
  objectID: 100,
  isHighlight: false,
  accessionNumber: "49.73.4",
  accessionYear: "1949",
  isPublicDomain: true,
  primaryImage: "https://images.metmuseum.org/CRDImages/ad/original/144703.jpg",
  primaryImageSmall: "https://images.metmuseum.org/CRDImages/ad/web-large/144703.jpg",
  additionalImages: [],
  constituents: null,
  department: "The American Wing",
  objectName: "Andiron",
  title: "Andiron",
  culture: "American or British",
  objectDate: "1700–1800",
  objectBeginDate: 1700,
  objectEndDate: 1800,
  medium: "Iron",
  dimensions: "18 3/4 x 17 1/2 x 10 3/4 in. (47.6 x 44.5 x 27.3 cm)",
  country: "England",
  repository: "Metropolitan Museum of Art, New York, NY",
  objectURL: "https://www.metmuseum.org/art/collection/search/100"
};
console.log(item); 

console.log("ID:", item.objectID); //Output : ID: 100
console.log("Title:", item.title); //Output : Title: Andiron
console.log("Object Name:", item.objectName); //Output : Object Name: Andiron
console.log("Country:", item.country); //Output : Country: England
console.log("Medium:", item.medium); //Output : Medium: Iron
console.log("Image URL:", item.primaryImage); //Output : Image URL: https://images.metmuseum.org/CRDImages/ad/original/144703.jpg
console.log("Museum:", item.repository); //Output : Museum: Metropolitan Museum of Art, New York, NY 


