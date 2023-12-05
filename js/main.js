import ingredients from '/database/database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')

function generateTopIngredients() {
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
  }
}

function removeAndPutInBowl(e) {
  if(e.target.parentElement.classList.contains('ingred')){
    e.target.parentElement.remove()
  }else if(e.target.classList.contains('ingred')){
    e.target.remove() 
  }
  addToBowl()
}

function addToBowl() {
  console.log('added') 
}


generateTopIngredients()


wrapperForBtns.addEventListener('click', removeAndPutInBowl)


// top ingredients only