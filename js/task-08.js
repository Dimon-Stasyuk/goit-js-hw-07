const refs = {
  inputRef: document.querySelector("input"),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesDiv: document.querySelector("#boxes"),
};

refs.inputRef.addEventListener("input", onInput);
let inputNumber = 0;

function onInput(event) {
  inputNumber = event.currentTarget.value;
  console.log(inputNumber);
}

refs.destroyBtn.addEventListener("click", onDestroyClick);
refs.renderBtn.addEventListener("click", createBoxes);

function createBoxes() {
  onDestroyClick();
  let width = 30;
  for (let i = 0; i < inputNumber; i++) {
    const randomNuber1 = Math.round(Math.random(255) * (0 - 255) + 255);
    const randomNuber2 = Math.round(Math.random(255) * (0 - 255) + 255);
    const randomNuber3 = Math.round(Math.random(255) * (0 - 255) + 255);
    let text = `<div style="width: ${width}px; height: ${width}px; background-color: rgb(${randomNuber1},${randomNuber2},${randomNuber3});"></div>`;
    refs.boxesDiv.insertAdjacentHTML("beforeend", text);
    width += 10;
  }
}

function onDestroyClick() {
  refs.boxesDiv.innerHTML = "";
}
