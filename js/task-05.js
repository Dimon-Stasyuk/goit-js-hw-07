const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


inputEl.addEventListener('input', onInputEl);

function onInputEl(event) {
    spanEl.textContent = 'незнакомец'
    if (event.currentTarget.value) {
        spanEl.textContent = event.currentTarget.value
    }
}
