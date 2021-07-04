const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputEl)

function onInputEl(event) {
    spanEl.style.fontSize = `${event.target.value}px`;
}


