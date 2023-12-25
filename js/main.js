// had to make this 2 dots for it to show on github pages. not sure why...
import ingredients from '../database/database.js'

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')
const itemsList = document.querySelector('.item-list');
const form = document.getElementById('form')
const input = document.querySelector('.inputSearch')

let chatPromptList = []

// 
const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', () => {
  console.log('we are connected');
  ws.send('i want to send a message to the server');
});

ws.addEventListener('message', ({ data }) => {
  if (typeof data === 'string') {
    console.log(data);
  } else if (data instanceof Blob) {
    // Handle binary data (e.g., convert to a readable format)
    const reader = new FileReader();
    reader.onload = function(event) {
      console.log(event.target.result);
    };
    reader.readAsText(data);
  }
});

// 



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
}

function removeIngredients() {
  const items = document.querySelectorAll('.item_el')
  items.forEach((item)=>{
    item.addEventListener('click',e=>{
      if(e.target.tagName==='I'){
        item.remove()
        removeFromArray(item)
      }
    })
  })
}

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

  for (let i = 0; i < ingredients.length; i++) {
    if (inputValue.toLowerCase().includes(ingredients[i].name.toLowerCase())) {
      img_el.src = ingredients[i].image;
    }
  }
    
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

  // // 
  // sendArrayToNode(chatPromptList)
  // // 
}

generateTopIngredients()

form.addEventListener('submit', submitForm)





