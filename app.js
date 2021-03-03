const buttons = document.querySelectorAll('button')
const miniDisplay = document.querySelector('#miniDisplay')
const display = document.querySelector('#display')
const numBtns = document.querySelectorAll('.number')
const opBtns = document.querySelectorAll('.operation')
const opAc = document.querySelector('#opAc')
const opEqual = document.querySelector('#opEqual')
const opPercent = document.querySelector('#opPercent')

let currentValue = 0;
let currentOperation = '+';

numBtns.forEach(button => button.addEventListener('click', handleNumBtnClick))

function handleNumBtnClick(e) {
  const newValue = parseInt(e.target.value);
  const result = calculate(currentValue, currentOperation, newValue)
  currentValue = result;
  updateDisplays(newValue);
}

opBtns.forEach(button => button.addEventListener('click', handleOpBtnClick))

function handleOpBtnClick(e) {
  currentOperation = e.target.value
  updateDisplays(currentValue, e.target.value);
}

opAc.addEventListener('click', reset);

function reset() {
  currentValue = 0;
  currentOperation = '+';
  display.textContent = currentValue;
  miniDisplay.textContent = "";
}

opEqual.addEventListener('click', () => {
  updateDisplays(currentValue);
})

opPercent.addEventListener('click', () => {
  currentValue /= 100;
  updateDisplays(currentValue);
})

function updateDisplay(value) {
  display.textContent = value;
}

function updateMiniDisplay(value) {
  miniDisplay.textContent += ` ${value} `;
}

function updateDisplays(displayValue, miniDisplayValue = displayValue) {
  updateDisplay(displayValue);
  updateMiniDisplay(miniDisplayValue);
}

function calculate(num1, operation, num2) {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num1 / num2;
  }
}


