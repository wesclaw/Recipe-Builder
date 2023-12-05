import ingredients from '../database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')

function generateTopIngredients() {
  console.log(ingredients)
}

window.addEventListener('DOMContentLoaded', generateTopIngredients)