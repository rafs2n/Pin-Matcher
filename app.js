/*
*
* Title: Pin Generator & Pin Matcher using vanilla js.
* Description: This JS file contain all the js function to control the app.
* Author: Abdul Aziz (Github: rafs2n)
* Date: 25/07/2021
*
*/




const displayPin = document.getElementById('display');
const genBtn = document.getElementById('generate-btn');
const countTry = document.getElementById('count');

const getValue = document.getElementsByClassName('input')
const calc = document.getElementById('cal-display');
const submitBtn = document.getElementById('submit');
const notifyNot = document.getElementById('notify-notfound');
const notifyFound = document.getElementById('notify-found');
const ifBlank = document.getElementById('if-blank');
const tryCount = document.getElementById('try-count');
const inputValue = document.getElementById('input-value')
const test = document.getElementsByTagName('input');

notifyNot.style.display = 'none';
notifyFound.style.display = 'none';
ifBlank.style.display = 'none';

function getPin(num) {
    let pin = Math.floor(Math.random() * num + 100000);
    return pin;
}

let counter = 1;
function pinGenerator() {
    let random = getPin(89999);
    countTry.innerText = counter + " " + "Pin Generated";
    // console.log(counter);
    displayPin.value = random;
    counter++;
}


genBtn.addEventListener('click', pinGenerator);



function calcVal(x) {
    calc.value += x;
}

function empty() {
    calc.value = "";
}

function back() {
    let value = calc.value;
    calc.value = value.substr(0, value.length - 1);
}
function end() {

}

let maxCounter = 2;
function checkPin() {
    let randomPin = displayPin.value;
    let userPin = calc.value;
    tryCount.innerText = `${maxCounter} Try Left`

    if (userPin != null && userPin != "") {
        if (randomPin === userPin) {
            // console.log('Pin Matched');
            ifBlank.style.display = 'none';
            notifyNot.style.display = 'none';
            notifyFound.style.display = 'inline';

        } else {
            // console.log('Pin not found');
            ifBlank.style.display = 'none';
            notifyFound.style.display = 'none';
            notifyNot.style.display = 'inline';
        }
    }
    else {
        // console.log("Empty");
        ifBlank.style.display = 'inline';
    }
    maxCounter--;
}

submitBtn.addEventListener('click', checkPin);