import ingredients from '/database/database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')
const itemsList = document.querySelector('.item-list');

let chatPromptList = []

function generateTopIngredients(ingred) { 
  for(let i=0;i<50;i++){
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
      addToList(p_el, img_el)
    })
  }
  ///making the generate more btn/////
    const ranBtn = document.createElement('button')
    ranBtn.classList.add('ranBtn')
    ranBtn.innerHTML = `Generate More <img class='ranBtnImg' src='otherImages/dice.png'></img>`
    wrapperForBtns.insertBefore(ranBtn, ingred)    
}

function addToList(p_el, img_el) {
  const div_tag = document.createElement('div')
  div_tag.classList.add('item_el')
  const x_tag = document.createElement('p')
  x_tag.classList.add('x_tag')
  x_tag.innerHTML = '\uD83D\uDDD9'
  
  div_tag.append(p_el)
  div_tag.append(img_el)
  div_tag.append(x_tag)

  itemsList.append(div_tag)

  ///pushing the p textContent into the array for my prompt search recipes. make sure to remove the ingredients when deleted from div_tag. I will use this array for the prompt
  chatPromptList.push(p_el.textContent)

  console.log(chatPromptList)

  removeIngredients()
}

function removeIngredients() {
  const items = document.querySelectorAll('.item_el')
  items.forEach((item)=>{
    item.addEventListener('click',()=>{
      const getText = item.innerText.trim().charAt(0)+item.innerText.toLowerCase().slice(1)
      item.remove()
      removeFromArray(getText)
    })
  })
}

function removeFromArray(getText) {
  
  for(let i=0;i<=chatPromptList.length;i++){
    if(chatPromptList.includes(getText)){
      chatPromptList.pop()
      
      chatPromptList()
    }
  }
}




generateTopIngredients()







