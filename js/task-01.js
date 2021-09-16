const categories = document.querySelector("#categories").children;

for (let i = 0; i < categories.length; i++) {
  const categoriName = categories[i].firstElementChild.textContent;
  const categoriLength = categories[i].querySelectorAll("li").length;
  console.log(`Категория: ${categoriName}`);
  console.log(`Количество элементов: ${categoriLength}`);
}
