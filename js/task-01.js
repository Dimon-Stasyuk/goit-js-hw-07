const allEl = document.querySelectorAll('.item')
const firstEl = allEl[0].querySelectorAll('li')
const secondEl = allEl[1].querySelectorAll('li')
const thirdEl = allEl[2].querySelectorAll('li')

const firstTitle = allEl[0].querySelector('h2')
const secondTitle = allEl[1].querySelector('h2')
const thirdTitle = allEl[2].querySelector('h2')


console.log(`Количество категорий: ${allEl.length}`)

console.log(`Категория: ${firstTitle.textContent}`)
console.log(`Количество элементов: ${firstEl.length}`)

console.log(`Категория: ${secondTitle.textContent}`)
console.log(`Количество элементов: ${secondEl.length}`)

console.log(`Категория: ${thirdTitle.textContent}`)
console.log(`Количество элементов: ${thirdEl.length}`)

