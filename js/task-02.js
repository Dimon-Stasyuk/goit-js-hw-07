const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const ingridientsList = function (ingredients) {
  return ingredients.map((element) => {
    const liEl = document.createElement("li");
    liEl.textContent = element;
    return liEl;
  });
};

listRef.append(...ingridientsList(ingredients));
