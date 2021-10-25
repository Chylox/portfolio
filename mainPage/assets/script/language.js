// Connection to JSON Data
let englishData = JSON.parse(language);
// console.table(englishData[1].aboutMeHeading);

// Variable Declaration:
const engButton = document.querySelector('#englishButton');
const gerButton = document.querySelector('#germanButton');

engButton.addEventListener('click', () => {
    console.table(englishData[1].aboutMeHeading);
})

gerButton.addEventListener('click', () => {
    console.table(englishData[0].aboutMeHeading);
})