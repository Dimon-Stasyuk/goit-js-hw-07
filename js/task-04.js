const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
const incrementBtnEl = document.querySelector('button[data-action="increment"]')
const valueEl = document.querySelector('#value')


let counterValue = 0;

function addValue() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function subtractionValue() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}
incrementBtnEl.addEventListener('click', addValue)
decrementBtnEl.addEventListener('click', subtractionValue)
