//had to make this 2 dots for it to show on github pages. not sure why...
import ingredients from '../database/database.js'

const Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse;

let engine, render, mouseConstraint;

function setup() {
  engine = Engine.create();

  render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: 'transparent',
    },
  });

  const cenDiv = document.querySelector('.wrapper-for-image');

  const margin = 50;
  const boxWidth = 240;
  
  const bowlX = cenDiv.offsetWidth / 2;
  const bowlY = cenDiv.offsetHeight / 2 + 415 + margin; 
  const rightEdgeX = bowlX + boxWidth / 2;
  const rightEdgeY = bowlY - 120 + margin; 
  const leftEdgeX = bowlX - boxWidth / 2;
  const leftEdgeY = rightEdgeY;
  
  const bowl = Bodies.rectangle(bowlX, bowlY, boxWidth, 20, { isStatic: true, render: { fillStyle: 'transparent' } });
  const rightEdge = Bodies.rectangle(rightEdgeX, rightEdgeY, 15, 220, { isStatic: true, render: { fillStyle: 'transparent' } });
  const leftEdge = Bodies.rectangle(leftEdgeX, leftEdgeY, 15, 220, { isStatic: true, render: { fillStyle: 'transparent' } });

  World.add(engine.world, [bowl, rightEdge, leftEdge]);

  const mouse = Mouse.create(render.canvas);
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
  });

  World.add(engine.world, mouseConstraint);
  engine.world.gravity.y = 0.5;

  Engine.run(engine);
  Render.run(render);
}

setup();

const wrapperForBtns = document.querySelector('.wrapper-for-buttons')
const itemsList = document.querySelector('.item-list');
const form = document.getElementById('form')
const input = document.querySelector('.inputSearch')
const recipeBtn = document.querySelector('.recipeBtn')

let chatPromptList = []

// const ws = new WebSocket('ws://localhost:3000');
const ws = new WebSocket('wss://freerecipemaker.onrender.com');
// should be wss for production

function sendArrayData() {
  ws.send(chatPromptList)

  // call function here to make items jump
  //maybe just move the bottom line up to make them jump
}

ws.onmessage = (event) => {  
  const responseData = event.data
  itemsList.innerHTML = `
  <div class='module-outer'>
    <div class='new-item-list'>
      <i class="fa-solid fa-xmark x-mark"></i>
      <pre>${responseData}</pre>
    </div>
  </div>`

  const xMark = document.querySelector('.x-mark')

  xMark.addEventListener('click', e=>{
    window.location.reload()
  })
};

function generateTopIngredients(ingredients) {
  const batchSize = 50;
  let currentIndex = 0;

  function addIngredientEventListener(ingred, p_el, img_el) {
    ingred.addEventListener('click', (e) => {
      ingred.style.display = 'none';
      addToList(p_el, img_el);
      createPear(p_el);
    });
  }

  function createIngredientElement(ingredient) {
    const ingred = document.createElement('div');
    ingred.classList.add('ingred');

    const p_el = document.createElement('p');
    p_el.textContent = ingredient.name;

    const img_el = document.createElement('img');
    img_el.classList.add('ingredImage');
    img_el.src = ingredient.image;

    ingred.append(p_el);
    ingred.append(img_el);

    addIngredientEventListener(ingred, p_el, img_el);

    return ingred;
  }

  function isIngredientDisplayed(ingredient) {
    const existingIngredients = Array.from(wrapperForBtns.getElementsByClassName('ingred'));
    return existingIngredients.some((ingred) => ingred.textContent.trim() === ingredient.name);
  }

  function displayIngredients(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < ingredients.length; i++) {
      const ingredient = ingredients[i];

      if (!isIngredientDisplayed(ingredient)) {
        const ingredElement = createIngredientElement(ingredient);
        wrapperForBtns.appendChild(ingredElement); 
      }
    }
  }

  displayIngredients(currentIndex, currentIndex + batchSize);

  wrapperForBtns.addEventListener('scroll', (event) => {
    const wrapperHeight = wrapperForBtns.clientHeight;
    const scrollHeight = wrapperForBtns.scrollHeight;
    const scrollTop = wrapperForBtns.scrollTop;

    if (scrollTop + wrapperHeight >= scrollHeight - 10) {
      const startIndex = currentIndex;
      const endIndex = currentIndex + batchSize;

      if (startIndex < ingredients.length) {
        displayIngredients(startIndex, endIndex);
        currentIndex = endIndex;
      }
      event.preventDefault();
    }
  });
}

generateTopIngredients(ingredients); 

let foodArray = new Map()

function createPear(p_el) {
  const pearImage = new Image();

  let p_text = p_el.textContent || p_el.innerText;
  p_text = p_text.toLowerCase();

  singularAndPlural(p_text, pearImage);

  let fallingPear;

  pearImage.onload = function () {
    const initialX = window.innerWidth / 2;
    const initialY = -80;

    fallingPear = Bodies.rectangle(initialX, initialY, 60, 60, {
      render: {
        sprite: {
          texture: pearImage.src,
          xScale: 0.2,
          yScale: 0.2,
        },
      },
      restitution: 0.4,
      angle: Math.random() * Math.PI,
      friction: 0.7,
    });

    World.add(engine.world, fallingPear);

    foodArray.set(p_text, fallingPear);

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight },
    });
  };

  pearImage.onerror = function (error) {
    console.error('Error loading image:', p_el, error);
  };
  return { pearImage, fallingPear };
}

function removeTheFood(getText) {
  const lowerCaseText = getText.toLowerCase();
  if (foodArray.has(lowerCaseText)) {
    const fallingPear = foodArray.get(lowerCaseText);
    World.remove(engine.world, fallingPear);
    foodArray.delete(lowerCaseText);
  } 
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

  chatPromptList.push(p_el.textContent)

  removeIngredients()
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
        const getText = item.textContent
        removeTheFood(getText)
      }
    })
  })
}

function disableAnEnableBtn(){
  const item_els = document.querySelectorAll('.item_el')
  if(item_els.length>1){
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
    chatPromptList.splice(index, 1); 
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

  singularAndPlural(inputValue, img_el)

  const x_tag = document.createElement('span')
  x_tag.classList.add('x_tag')
  x_tag.innerHTML = `<i class="fa-solid fa-xmark"></i>`

  div_tag.append(p_el)
  div_tag.append(img_el)
  div_tag.append(x_tag) 
  
  itemsList.append(div_tag)

  chatPromptList.push(inputValue)

  removeIngredients() 

  createPear(p_el)

  input.value = ''

  disableAnEnableBtn()
}

function singularAndPlural(inputValue, img_el){
  const getLastLetter = inputValue.charAt(inputValue.length - 1)
  const getLastThreeLetters = inputValue.slice(-3);
  
  if (getLastThreeLetters === 'ies') {
    const modifiedInputValue = inputValue.slice(0, -3) + 'y';
    img_el.src = 'images/' + modifiedInputValue + '.png';
  } else if (getLastThreeLetters==='oes') { // New condition for 'oes'
    const modifiedInputValue = inputValue.slice(0, -2)
    img_el.src = 'images/' + modifiedInputValue + '.png';
  }else if(getLastThreeLetters==='hes'){
    const modifiedInputValue = inputValue.slice(0, -2)
    img_el.src = 'images/' + modifiedInputValue + '.png'
  } 
  else if (getLastLetter === 's') {
    const modifiedInputValue = inputValue.slice(0, -1);
    img_el.src = 'images/' + modifiedInputValue + '.png';
  } else if (inputValue) {
    img_el.src = 'images/' + inputValue + '.png';
  }
}

function refreshPage(){
  location.reload()
}

window.addEventListener('resize', refreshPage)
form.addEventListener('submit', submitForm)
recipeBtn.addEventListener('click', sendArrayData)

