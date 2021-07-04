const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onInputFocus)

function onInputFocus(event) {
    if (event.target.value.length == inputEl.dataset.length) {
        inputEl.className = 'valid'
    } else {
        inputEl.className = 'invalid'
    }
}

