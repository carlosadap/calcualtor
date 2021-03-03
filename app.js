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
let resultValue = 0;
let currentOperation = '+';
let isOperating = false;

numBtns.forEach(button => button.addEventListener('click', handleNumBtnClick))

function handleNumBtnClick(e) {
  if (!isOperating) {
    currentValue += e.target.value;
    updateDisplays(currentValue);
  } else {
    isOperating = false;
    currentValue = e.target.value
    updateDisplays(currentValue);
  }
}

mainOpBtns.forEach(button => button.addEventListener('click', handleOpBtnClick))

function handleOpBtnClick(e) {
  if (!isOperating) {
    isOperating = true;
    resultValue = calculate(resultValue, currentOperation, currentValue)
    currentOperation = e.target.value
    updateDisplays(resultValue, e.target.value);
  } else {
    currentOperation = e.target.value;
    updateDisplays(resultValue, e.target.value)
  }
}

opAc.addEventListener('click', reset);

function reset() {
  currentValue = "";
  resultValue = 0;
  currentOperation = '+';
  updateDisplays("0");
  miniDisplay.textContent = "";
  isOperating = false;
}

opEqual.addEventListener('click', (e) => {
  if (!isOperating) {
    isOperating = true;
    resultValue = calculate(resultValue, currentOperation, currentValue)
    updateDisplays(resultValue, `${e.target.value} ${resultValue}`);
  }
})

opPercent.addEventListener('click', () => {
  isOperating = true;
  resultValue = parseFloat(currentValue) / 100;
  currentValue = resultValue.toString();
  updateDisplays(currentValue, `% ${currentValue}`);
})

opChangeSign.addEventListener('click', () => {
  currentValue = -currentValue;
  updateDisplays(currentValue);
})

function updateDisplay(value) {
  display.textContent = value;
}

function updateMiniDisplay(value) {
  if (isOperating) {
    miniDisplay.textContent += ` ${value} `;
  } else {
    miniDisplay.textContent += value.slice(-1);
  }
}

function updateDisplays(displayValue, miniDisplayValue = displayValue) {
  updateDisplay(displayValue);
  updateMiniDisplay(miniDisplayValue);
}

function calculate(num1, operation, num2) {
  switch (operation) {
    case '+': return parseFloat(num1) + parseFloat(num2);
    case '-': return parseFloat(num1) - parseFloat(num2);
    case '*': return parseFloat(num1) * parseFloat(num2);
    case '/': return parseFloat(num1) / parseFloat(num2);
  }
}


