// import functions
import { add } from './calculations.js';
import { addpt } from './calculations.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const addNumber1Pt = document.getElementById('add-pt-1');
const addNumber2Pt = document.getElementById('add-pt-2');
const addButtonPt = document.getElementById('add-pt-button');
const addAnswerPt = document.getElementById('add-pt-answer');


addButton.addEventListener('click', () => {
    const no1 = Number(addNumber1.value);
    const no2 = Number(addNumber2.value);
    addAnswer.textContent = add(no1, no2);
});


addButtonPt.addEventListener('click', () => {
    const no1Pt = Number(addNumber1Pt.value);
    const no2Pt = Number(addNumber2Pt.value);
    addAnswerPt.textContent = addpt(no1Pt, no2Pt);
});

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
