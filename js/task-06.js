const refs = {
  inputRef: document.querySelector("#validation-input"),
};
const minNumberCharacters = Number(refs.inputRef.dataset.length);

refs.inputRef.addEventListener("blur", onInput);

function onInput(event) {
  if (event.target.value.length >= minNumberCharacters) {
    refs.inputRef.className = "valid";
  } else {
    refs.inputRef.className = "invalid";
  }
}
