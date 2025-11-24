// Task 1.1
const welcomeSection = document.querySelector('#welcome-section');
console.log(welcomeSection);

const myButton = document.querySelector('#action-button');
console.log(myButton);

// Task 1.2
const firstParagraph = document.querySelector('.description');
console.log(firstParagraph);

const firstCard = document.querySelector('.card');
console.log(firstCard);

// Task 1.3
const allParagraphs = document.querySelectorAll('.description1');
console.log(allParagraphs);
console.log(allParagraphs.length);

console.log(allParagraphs[0]); 
console.log(allParagraphs[1]);
console.log(allParagraphs[2]);

const allCards = document.querySelectorAll('.card1')
console.log(allCards.length);

console.log(allParagraphs[3]); //undefined


// Task 1.4
const allCards1 = document.querySelectorAll('.card1');
allCards.forEach(card => {
    console.log(card.textContent);
})

const allParagraphs1 = document.querySelectorAll('p');

allParagraphs.forEach(p => {
    console.log(p.textContent);
})

// Task 1.5
const welcomeSection1 = document.getElementById('welcome-section');

const paragraphs = welcomeSection.querySelectorAll('p')
paragraphs.forEach(para => {
    console.log(para.textContent);
});


