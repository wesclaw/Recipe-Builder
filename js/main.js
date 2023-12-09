import ingredients from '/database/database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')
const itemsList = document.querySelector('.item-list');

let chatPromptList = []

function generateTopIngredients(ingred) {
  for(let i=0;i<21;i++){
    const ingred = document.createElement('div')
    ingred.classList.add('ingred')

    const p_el = document.createElement('p')
    p_el.textContent = ingredients[i].name

    const img_el = document.createElement('img')
    img_el.classList.add('ingredImage')
    img_el.src = ingredients[i].image

    ingred.append(p_el)
    ingred.append(img_el)

    wrapperForBtns.append(ingred)

    ////removing the ingred top item on click
    ingred.addEventListener('click',(e)=>{
      ingred.style.display = 'none'
      addToList(ingred)
    })
  }
}


function addToList(ingred) {
  console.log(ingred)
  const item_el = document.createElement('div')
  item_el.innerHTML = ingred
  itemsList.append(item_el)
}

generateTopIngredients()
