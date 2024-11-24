
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
}

ws.onmessage = (event) => {  
  const responseData = event.data;

  const styledHTMLContent = `
  <html>
    <head>
      <style>
      body {
        font-family: 'Roboto', sans-serif;
        background-color: #e2e8f0;
        color: #4a4a4a;
        margin: 0;
        padding: 20px;
      }

      .recipe-container {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 800px;
        margin: 0 auto;
      }

      pre {
        padding: 15px;
        border-radius: 8px;
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-size: 1.2rem;
        background-color: #f9fafb;
        color: #333;
        line-height: 1.6;
        word-spacing: 0.1em;
      }      
        
      </style>
    </head>
    <body>
      <div class="recipe-container">
        <pre>${responseData}</pre>
      </div>
    </body>
  </html>`;


  itemsList.innerHTML = `
  <div class='module-outer'>
    <div class='new-item-list'>
      <button class='x-mark'>X</button>
      <pre>${responseData}</pre>
      <button class='download-btn' style='display: none;'>Download Recipe Here</button>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3438813954855017"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-3438813954855017"
     data-ad-slot="1766152080"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </div>
  </div>`

  const xMark = document.querySelector('.x-mark')
  
  const pre_el = document.querySelector('pre')
  const downloadBtn = document.querySelector('.download-btn')

  if(pre_el.textContent==='Finding a recipe...'){
    console.log('normal')
  }else{
    downloadBtn.style = 'block'
  }

  xMark.addEventListener('click', e=>{
    window.location.reload()
  })

  downloadBtn.addEventListener('click', () => {
    const blob = new Blob([styledHTMLContent], { type: 'text/html' }); // Create a Blob with HTML content
    const url = URL.createObjectURL(blob); // Create a URL for the Blob
    const a = document.createElement('a'); // Create an anchor tag
    a.href = url; // Set the href to the Blob URL
    a.download = 'recipe.html'; // Set the download filename
    a.click(); // Programmatically click the anchor tag to trigger the download
    URL.revokeObjectURL(url); // Clean up the URL object
  });

};

// 
function checkIfAlreadyExists(p_el){
  const getp_text = p_el.textContent
  const makeSmallP = getp_text.toLowerCase()
  const item_el = document.querySelectorAll('.item_el')

  for(const items of item_el){
    const itemText = items.textContent.toLowerCase()

    if(itemText===makeSmallP){
      alert('This ingredient is already added.')
      return true
    }
  }
  return false
}

function generateTopIngredients(ingredients) {
  const batchSize = 50;
  let currentIndex = 0;

  function addIngredientEventListener(ingred, p_el, img_el) {
    ingred.addEventListener('click', (e) => {

      if(checkIfAlreadyExists(p_el)){
        return
      }else{
        ingred.style.display = 'none';
        addToList(p_el, img_el);
        createPear(p_el);
      }
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
  x_tag.innerHTML = `<img src="../images/cancel.png" class="cancel-icon">`  
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
      // 
      if(e.target.tagName==='IMG'){
        const getText = item.textContent
        removeFromArray(item)
        removeTheFood(getText)
        item.remove()
        disableAnEnableBtn()
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
function checkForDoubledIngredients(input) {
  const checkingIngredients = document.querySelectorAll('.item_el');
  
  for (const ingred of checkingIngredients) {
    const inputValue = input.value.trim(); // Get the input value and trim any whitespace
    const textContent = ingred.textContent.trim(); // Trim the text content for accurate comparison

    if (inputValue.toLowerCase() === textContent.toLowerCase()) { // Compare in a case-insensitive manner
      alert('This item has already been added');
      return true; // Found a duplicate
    }
  }
  return false; // No duplicates found
}

function checkDoubledForSubmit(inputValue) {
  const itemEls = document.querySelectorAll('.item_el');
  const inputText = inputValue.trim().toLowerCase(); // Process the input value once

  for (const item of itemEls) {
    const itemText = item.textContent.trim().toLowerCase(); // Trim and convert to lowercase

    if (inputText === itemText) { // Compare the processed values
      alert('This ingredient is already added');
      return true; // Found a duplicate
    }
  }
  return false; // No duplicates found
}

const inputElement = document.querySelector('.inputSearch');
let container; 

inputElement.addEventListener('keyup', e => {
  const getInputValue = inputElement.value.trim().toLowerCase(); 

  if (getInputValue) {
    if (!container) {
      container = document.createElement('div');
      container.classList.add('keyUpSearchContainer');
      form.append(container);
    }

    container.innerHTML = '';

    const matchingIngredients = ingredients.filter(ingredient =>
      ingredient.name.toLowerCase().startsWith(getInputValue)
    );

    if (matchingIngredients.length > 0) {
      inputElement.classList.add('changeBorder')

      matchingIngredients.forEach(ingredient => {
        const button = document.createElement('button');
        button.classList.add('ingredient-btn');
        button.textContent = ingredient.name; // Set button text to the ingredient name
        container.append(button);

        // Optional: Add a click event for the button
        button.addEventListener('click', (e) => {
          e.preventDefault()
          
          inputElement.value = e.target.textContent;
          console.log(inputElement.value)
          container.remove()
          inputElement.classList.remove('changeBorder')
          inputElement.focus()

        });
      });
    } else {
      // If no matches, show a message
      const noMatchMessage = document.createElement('p');
      noMatchMessage.textContent = 'No matching ingredients found.';
      noMatchMessage.classList.add('no-match-message');
      container.append(noMatchMessage);
    }
  } else {
  
    if (container) {
      container.remove();
      inputElement.classList.remove('changeBorder')
      container = null; 
    }
  }
});


function submitForm(e) {
  e.preventDefault(); // Prevent default form submission
  const inputElement = document.querySelector('.inputSearch'); // Use your actual input ID or class
  
  const inputValue = inputElement.value.trim(); // Trim whitespace
  
  if (!inputValue) {
    alert('Please enter an ingredient'); 
    return;
  }

  if (checkForDoubledIngredients(inputElement) || checkDoubledForSubmit(inputValue)) {
    inputElement.value = ''; 
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
  
  x_tag.innerHTML = `<img src="../images/cancel.png" class="cancel-icon">`

  div_tag.append(p_el)
  div_tag.append(img_el)
  div_tag.append(x_tag) 
  
  itemsList.append(div_tag)

  chatPromptList.push(inputValue)

  createPear(p_el)

  removeIngredients() 

  input.value = ''

  disableAnEnableBtn()

}

function singularAndPlural(inputValue, img_el) {
  const lowerInputValue = inputValue.toLowerCase();

  console.log(lowerInputValue)

  const getLastLetter = lowerInputValue.charAt(lowerInputValue.length - 1);
  const getLastThreeLetters = lowerInputValue.slice(-3);
  
  if (getLastThreeLetters === 'ies') {
    const modifiedInputValue = lowerInputValue.slice(0, -3) + 'y';
    img_el.src = 'images/' + modifiedInputValue + '.png';
  } else if (getLastThreeLetters === 'oes') { // New condition for 'oes'
    const modifiedInputValue = lowerInputValue.slice(0, -2);
    img_el.src = 'images/' + modifiedInputValue + '.png';
  } else if (getLastThreeLetters === 'hes') {
    const modifiedInputValue = lowerInputValue.slice(0, -2);
    img_el.src = 'images/' + modifiedInputValue + '.png';
  } else if (getLastLetter === 's') {
    const modifiedInputValue = lowerInputValue.slice(0, -1);
    img_el.src = 'images/' + modifiedInputValue + '.png';
  } else {
    img_el.src = 'images/' + lowerInputValue + '.png';
  }
}



function refreshPage(){
  if (window.innerWidth > 600) {
    location.reload();
  }
}

window.addEventListener('resize', refreshPage)
form.addEventListener('submit', submitForm)
recipeBtn.addEventListener('click', sendArrayData)







