import ingredients from '/database/database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')
const itemsList = document.querySelector('.item-list')

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


////because i have this complicated function checking for too many things and i cant add the one addtobowl function. ///i want to click on just the btns and then call the fucntion. i dont wanna check if im touching parent element or classlist. 

function removeAndPutInBowl(e) {
  // const getTarget = e.target
  // if(e.target.parentElement.classList.contains('ingred')){
  //   e.target.parentElement.remove()
  // }else if(e.target.classList.contains('ingred')){
  //   e.target.remove()  
  // }
  // addToBowl(getTarget)
  
}

removeAndPutInBowl()


generateTopIngredients()


// wrapperForBtns.addEventListener('click', removeAndPutInBowl)


// top ingredients only