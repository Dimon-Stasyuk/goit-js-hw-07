const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = elements => {
  return elements.map(element => {
  const itemEl = document.createElement('li')
  itemEl.textContent = element
    return itemEl;
 })
}

const items = makeIngredientsList(ingredients)
ingredientsListEl.append(...items)



