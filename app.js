const buttons = document.querySelectorAll('button')
const miniDisplay = document.querySelector('#miniDisplay')
const display = document.querySelector('#display')
const numBtns = document.querySelectorAll('.number')
const mainOpBtns = document.querySelectorAll('.mainOperation')
const opAc = document.querySelector('#opAc')
const opEqual = document.querySelector('#opEqual')
const opPercent = document.querySelector('#opPercent')
const opChangeSign = document.querySelector('#opChangeSign')

let currentValue = "";
let currentOperation = '+';
let isOperating = false;

numBtns.forEach(button => button.addEventListener('click', handleNumBtnClick))

function handleNumBtnClick(e) {
  if (!isOperating) {
    currentValue += e.target.value;
    updateDisplays(currentValue);
  } else {
    const newValue = parseFloat(e.target.value);
    const result = calculate(currentValue, currentOperation, newValue)
    currentValue = result;
    updateDisplays(newValue);
  }
}

mainOpBtns.forEach(button => button.addEventListener('click', handleOpBtnClick))

function handleOpBtnClick(e) {
  isOperating = true;
  currentValue = parseFloat(currentValue);
  currentOperation = e.target.value
  updateDisplays(currentValue, e.target.value);
}

opAc.addEventListener('click', reset);

function reset() {
  isOperating = false;
  currentValue = "";
  currentOperation = '+';
  display.textContent = currentValue;
  miniDisplay.textContent = "";
}

opEqual.addEventListener('click', () => {
  updateDisplays(currentValue);
})

opPercent.addEventListener('click', () => {
  currentValue = parseFloat(currentValue)/100;
  updateDisplays(currentValue);
})

opChangeSign.addEventListener('click', () => {
  currentValue = -currentValue;
  updateDisplays(currentValue);
})

function updateDisplay(value) {
  display.textContent = value;
}

function updateMiniDisplay(value, operating = isOperating) {
  if (operating) {
    miniDisplay.textContent += ` ${value} `;
  } else {
    miniDisplay.textContent = value;
  }
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


