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
  miniDisplay.textContent += `${e.target.value}`;
  const newValue = parseInt(e.target.value);
  const result = calculate(currentValue, currentOperation, newValue)
  currentValue = result;
  display.textContent = newValue;
}

opBtns.forEach(button => button.addEventListener('click', handleOpBtnClick))

function handleOpBtnClick (e) {
  miniDisplay.textContent += ` ${e.target.value} `
  currentOperation = e.target.value
  resolve();
}

opAc.addEventListener('click', reset);

function reset () {
  currentValue = 0;
  currentOperation = '+';
  display.textContent = currentValue;
  miniDisplay.textContent = "";
}

opEqual.addEventListener('click', resolve);

function resolve () {
  display.textContent = currentValue;
}


function calculate(num1, operation, num2) {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num1 / num2;
  }
}


