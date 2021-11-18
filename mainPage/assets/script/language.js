// Connection to JSON Data -> 0 == Ger; 1 == Eng
let languageData = JSON.parse(language);
// console.table(englishData[1].aboutMeHeading);

// Button-Vairable Assignment:
const engButton = document.querySelector('#englishButton');
const gerButton = document.querySelector('#germanButton');

// Assign Textparts 
const part1 = document.querySelector('.replace1');
const part2 = document.querySelector('.replace2');
const part3 = document.querySelector('.replace3');
const part4 = document.querySelector('.replace4');
const part5 = document.querySelector('.replace5');


// Functions
function replaceContent() {
    part1.innerHTML = "";
    part2.innerHTML = "";
    part3.innerHTML = "";
    part4.innerHTML = "";
    part5.innerHTML = "";

    const content1 = document.createElement('h5');
    const content2 = document.createElement('p');
    const content3 = document.createElement('p');
    const content4 = document.createElement('p');
    const content5 = document.createElement('h5');


    content1.classList.add('card-title');
    content2.classList.add('card-text');
    content3.classList.add('card-text');
    content4.classList.add('card-text');
    content5.classList.add('card-title');

    content1.setAttribute('id', 'aboutMeHeading');
    content5.setAttribute('id', 'aboutMeHeading');

    content1.textContent = languageData[0].aboutMeHeading;
    content2.textContent = languageData[0].aboutMeOne;
    content3.textContent = languageData[0].aboutMeTwo;
    content4.textContent = languageData[0].aboutMeThree;
    content5.textContent = languageData[0].contactMeHeading;

    part1.appendChild(content1);
    part2.appendChild(content2);
    part3.appendChild(content3);
    part4.appendChild(content4);
    part5.appendChild(content5);
}



function replaceContentEng() {
    part1.innerHTML = "";
    part2.innerHTML = "";
    part3.innerHTML = "";
    part4.innerHTML = "";
    part5.innerHTML = "";

    const content1 = document.createElement('h5');
    const content2 = document.createElement('p');
    const content3 = document.createElement('p');
    const content4 = document.createElement('p');
    const content5 = document.createElement('h5');


    content1.classList.add('card-title');
    content2.classList.add('card-text');
    content3.classList.add('card-text');
    content4.classList.add('card-text');
    content5.classList.add('card-title');

    content1.setAttribute('id', 'aboutMeHeading');
    content5.setAttribute('id', 'aboutMeHeading');

    content1.textContent = languageData[1].aboutMeHeading;
    content2.textContent = languageData[1].aboutMeOne;
    content3.textContent = languageData[1].aboutMeTwo;
    content4.textContent = languageData[1].aboutMeThree;
    content5.textContent = languageData[1].contactMeHeading;

    part1.appendChild(content1);
    part2.appendChild(content2);
    part3.appendChild(content3);
    part4.appendChild(content4);
    part5.appendChild(content5);
}



// Eventlisteners for buttons
gerButton.addEventListener('click', replaceContent);

engButton.addEventListener('click', replaceContentEng);

replaceContent();