// had to make this 2 dots for it to show on github pages. not sure why...
import ingredients from '../database/database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')
const itemsList = document.querySelector('.item-list');
const form = document.getElementById('form')
const input = document.querySelector('.inputSearch')
const recipeBtn = document.querySelector('.recipeBtn')

let chatPromptList = []

const ws = new WebSocket('ws://localhost:3000');
// should be wss for production

function sendArrayData() {
  ws.send(chatPromptList)
}

ws.onmessage = (event) => {  
  const responseData = event.data

  // 
  const body_el = document.querySelector('body')
  
  const module_outer = document.createElement('div')
  module_outer.classList.add('module-outer')
  
  const new_item_list = document.createElement('div')
  new_item_list.classList.add('new-item-list')
 
  const i_tag = document.createElement('i')
  i_tag.classList.add('fa-solid', 'fa-xmark', 'x-mark')

  const pre_tag = document.createElement('pre')

  body_el.append(module_outer)
  module_outer.append(new_item_list)
  new_item_list.append(i_tag)
  new_item_list.append(pre_tag)

  pre_tag.textContent = responseData

  

  /////////////////

  // itemsList.innerHTML = `
  // <div class='module-outer'>
  //   <div class='new-item-list'>
  //     <i class="fa-solid fa-xmark x-mark"></i>
  //     <pre>${responseData}</pre>
  //   </div>
  // </div>`

  ///////////////////////

  window.addEventListener('click',e=>{
    if(e.target.tagName==='I'){
      // const module = document.querySelector('.module-outer')
      window.location.reload()
    }
  })
  // Handle the response data as needed in your application
  // For example, you might update the UI or perform other actions
};













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
  const x_tag = document.createElement('span')
  x_tag.classList.add('x_tag')
  x_tag.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  
  div_tag.append(p_el)
  div_tag.append(img_el)
  div_tag.append(x_tag)

  itemsList.append(div_tag)

  ///pushing the p textContent into the array 
  chatPromptList.push(p_el.textContent)

  removeIngredients()

  console.log(chatPromptList) ////where i can see it being added to array
  // 
  disableAnEnableBtn()
}

function removeIngredients() {
  const items = document.querySelectorAll('.item_el')
  items.forEach((item)=>{
    item.addEventListener('click',e=>{
      if(e.target.tagName==='I'){
        item.remove()
        removeFromArray(item)
        disableAnEnableBtn()
      }
    })
  })
}

function disableAnEnableBtn(){
  const item_els = document.querySelectorAll('.item_el')
  if(item_els.length>3){
    recipeBtn.disabled = false
    recipeBtn.classList.add('recipeBtn')
    recipeBtn.classList.remove('recipeBtnPartOne')
  }else {
    recipeBtn.disabled = true
    recipeBtn.classList.add('recipeBtnPartOne')
    recipeBtn.classList.remove('recipeBtn')
  }
}

disableAnEnableBtn()

function removeFromArray(item) {
  const getText = item.textContent;
  const index = chatPromptList.indexOf(getText);
  if (index !== -1) {
    chatPromptList.splice(index, 1); ///removing from array
    console.log(chatPromptList); ////this is where i put the final prompt into the chat
  }
}
 
function submitForm(e) {
  e.preventDefault()
  const inputValue = input.value;
  if(!inputValue){
    return;
  }

  const div_tag = document.createElement('div')
  div_tag.classList.add('item_el')

  const p_el = document.createElement('p')
  p_el.textContent = inputValue

  const img_el = document.createElement('img')
  img_el.classList.add('ingredImage')

  // change this to match the first letters. strawberries is the same as strawberry, etc
  for (let i = 0; i < ingredients.length; i++) {
    if (inputValue.toLowerCase().includes(ingredients[i].name.toLowerCase())) {
      img_el.src = ingredients[i].image;
    }
  }
    /////////////////////////////
  const x_tag = document.createElement('span')
  x_tag.classList.add('x_tag')
  x_tag.innerHTML = `<i class="fa-solid fa-xmark"></i>`

  div_tag.append(p_el)
  div_tag.append(img_el)
  div_tag.append(x_tag) 
  
  itemsList.append(div_tag)

  chatPromptList.push(inputValue)///adding the inputValue into the array

  removeIngredients() 

  input.value = ''

  console.log(chatPromptList)

  disableAnEnableBtn()
}

generateTopIngredients()

form.addEventListener('submit', submitForm)

recipeBtn.addEventListener('click', sendArrayData)



// function removeItem(item) {
//   const index = chatPromptList.indexOf(item);
//   if (index !== -1) {
//     chatPromptList.splice(index, 1);
//     sendArrayData();
//   }
// }

//

