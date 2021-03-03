const buttons = document.querySelectorAll('button')
const miniDisplay = document.querySelector('#miniDisplay')
const display = document.querySelector('#display')
const numBtns = document.querySelectorAll('.number')
const opBtns = document.querySelectorAll('.operation')
const opAc = document.querySelector('#opAc')
const opEqual = document.querySelector('#opEqual')

let currentValue = 0;
let currentOperation = '+';

numBtns.forEach(button => button.addEventListener('click', handleNumBtnClick))

function handleNumBtnClick (e) {
  // display.textContent += e.target.value;
  miniDisplay.textContent += `${e.target.value}`
  display.textContent = mathMagic(currentOperation, currentValue, parseInt(e.target.value));
}

opBtns.forEach(button => button.addEventListener('click', handleOpBtnClick))

function handleOpBtnClick (e) {
  miniDisplay.textContent += ` ${e.target.value} `
  currentOperation = e.target.value
}

function mathOMatic (e) {

}

opAc.addEventListener('click', reset)

function reset () {
  currentValue = 0;
  currentOperation = '+';
  display.textContent = currentValue;
  miniDisplay.textContent = "";
}

const mathMagic = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num1 / num2;
    case '%': return a / 100;
    case '+/-': return -a;
  }
}
