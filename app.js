const buttons = document.querySelectorAll('button')
const miniDisplay = document.querySelector('#miniDisplay')
const display = document.querySelector('#display')
const numBtns = document.querySelectorAll('.number')
const opBtns = document.querySelectorAll('.operation')

numBtns.forEach(button => button.addEventListener('click', handleNumBtnClick))

function handleNumBtnClick (e) {
  display.textContent += e.target.value;
  miniDisplay.textContent += `${e.target.value}`
}

opBtns.forEach(button => button.addEventListener('click', handleOpBtnClick))

function handleOpBtnClick (e) {
  miniDisplay.textContent += ` ${e.target.value} `
  const operator = e.target;
  const num1 = parseInt(display.textContent)
}

function mathOMatic (e) {

}

const mathMagic = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '%': a => a / 100,
  '+/-': a => -a,
}
