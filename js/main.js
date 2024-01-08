// // had to make this 2 dots for it to show on github pages. not sure why...
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

  // const boxWidth = 320;

  // const bowl = Bodies.rectangle(window.innerWidth / 2, window.innerHeight / 2 + 155, boxWidth, 15, { isStatic: true, render: { fillStyle: 'black' } });
  // const rightEdge = Bodies.rectangle(window.innerWidth / 2 + boxWidth / 2, window.innerHeight / 2 + 45, 15, 250, { isStatic: true, render: { fillStyle: 'black' } });
  // const leftEdge = Bodies.rectangle(window.innerWidth / 2 - boxWidth / 2, window.innerHeight / 2 + 45, 15, 250, { isStatic: true, render: { fillStyle: 'black' } });

  // 

  // const cenDiv = document.querySelector('.wrapper-for-image')

  // const bowlX = cenDiv.offsetWidth / 2;
  // const bowlY = cenDiv.offsetHeight / 2 + 445;
  // const boxWidth = 320; // Replace with your desired box width
  
  // const bowl = Bodies.rectangle(bowlX, bowlY, boxWidth, 15, { isStatic: true, render: { fillStyle: 'black' } });
  
  // const rightEdgeX = bowlX + boxWidth / 2;
  // const rightEdgeY = bowlY - 120; // Adjust the value based on your requirements
  
  // const rightEdge = Bodies.rectangle(rightEdgeX, rightEdgeY, 15, 250, { isStatic: true, render: { fillStyle: 'black' } });
  
  // const leftEdgeX = bowlX - boxWidth / 2;
  // const leftEdgeY = rightEdgeY;
  
  // const leftEdge = Bodies.rectangle(leftEdgeX, leftEdgeY, 15, 250, { isStatic: true, render: { fillStyle: 'black' } });


/////////////////////////////////////////////////////

//   const cenDiv = document.querySelector('.wrapper-for-image');

// const margin = 20; // Adjust the margin value based on your requirements
// const boxWidth = 320; // Replace with your desired box width

// const bowlX = cenDiv.offsetWidth / 2;
// const bowlY = cenDiv.offsetHeight / 2 + 445 + margin; // Adjusted to add margin
// const rightEdgeX = bowlX + boxWidth / 2;
// const rightEdgeY = bowlY - 120 + margin; // Adjusted to add margin
// const leftEdgeX = bowlX - boxWidth / 2;
// const leftEdgeY = rightEdgeY;

// const bowl = Bodies.rectangle(bowlX, bowlY, boxWidth, 15, { isStatic: true, render: { fillStyle: 'black' } });
// const rightEdge = Bodies.rectangle(rightEdgeX, rightEdgeY, 15, 250, { isStatic: true, render: { fillStyle: 'black' } });
// const leftEdge = Bodies.rectangle(leftEdgeX, leftEdgeY, 15, 250, { isStatic: true, render: { fillStyle: 'black' } });



  // 

  const cenDiv = document.querySelector('.wrapper-for-image');

  const margin = 50; // Adjust the margin value based on your requirements
  const boxWidth = 240; // Replace with your desired box width
  
  const bowlX = cenDiv.offsetWidth / 2;
  const bowlY = cenDiv.offsetHeight / 2 + 415 + margin; // Adjusted to add margin
  const rightEdgeX = bowlX + boxWidth / 2;
  const rightEdgeY = bowlY - 120 + margin; // Adjusted to add margin
  const leftEdgeX = bowlX - boxWidth / 2;
  const leftEdgeY = rightEdgeY;
  
  const bowl = Bodies.rectangle(bowlX, bowlY, boxWidth, 15, { isStatic: true, render: { fillStyle: 'transparent' } });
  const rightEdge = Bodies.rectangle(rightEdgeX, rightEdgeY, 15, 220, { isStatic: true, render: { fillStyle: 'transparent' } });
  const leftEdge = Bodies.rectangle(leftEdgeX, leftEdgeY, 15, 220, { isStatic: true, render: { fillStyle: 'transparent' } });


  // 





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

const ws = new WebSocket('ws://localhost:3000');
// should be wss for production

function sendArrayData() {
  ws.send(chatPromptList)
}

ws.onmessage = (event) => {  
  const responseData = event.data

  // const body_el = document.querySelector('body')
  
  // const module_outer = document.createElement('div')
  // module_outer.classList.add('module-outer')
  
  // const new_item_list = document.createElement('div')
  // new_item_list.classList.add('new-item-list')
 
  // const i_tag = document.createElement('i')
  // i_tag.classList.add('fa-solid', 'fa-xmark', 'x-mark')

  // const pre_tag = document.createElement('pre')

  // body_el.append(module_outer)
  // module_outer.append(new_item_list)
  // new_item_list.append(i_tag)
  // new_item_list.append(pre_tag)

  // pre_tag.textContent = responseData

  /////////////////

  itemsList.innerHTML = `
  <div class='module-outer'>
    <div class='new-item-list'>
      <i class="fa-solid fa-xmark x-mark"></i>
      <pre>${responseData}</pre>
    </div>
  </div>`

  window.addEventListener('click',e=>{
    if(e.target.tagName==='I'){
      window.location.reload()
      ////maybe just remove the parent element instead of page refresh?////why reload the whole page? it will tale extra longer
    }
  })
};

function generateTopIngredients(ingred) { 
  for(let i=0;i<60;i++){
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

      createPear(p_el)
    })
  }
  ///making the generate more btn/////
    // const ranBtn = document.createElement('button')
    // ranBtn.classList.add('ranBtn')
    // ranBtn.innerHTML = `Generate More <img class='ranBtnImg' src='otherImages/dice.png'></img>`
    // wrapperForBtns.insertBefore(ranBtn, ingred)   
}

///////////////////////////////////////////////////

let foodArray = new Map()

function createPear(p_el) {
  const pearImage = new Image();

  let p_text = p_el.textContent || p_el.innerText;
  p_text = p_text.toLowerCase();

  pearImage.src = 'images/' + p_text + '.png';

  // Create a fallingPear variable
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

    // Add fallingPear to the Matter.js world
    World.add(engine.world, fallingPear);

    // Add both p_text and fallingPear to the foodArray Map
    foodArray.set(p_text, fallingPear);

    // Assuming 'render' is the Render object created with Matter.js
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight },
    });
  };

  pearImage.onerror = function (error) {
    console.error('Error loading image:', p_el, error);
  };

  // Return both pearImage and fallingPear
  return { pearImage, fallingPear };
}

function removeTheFood(getText) {
  // Convert getText to lowercase
  const lowerCaseText = getText.toLowerCase();
  // Check if the lowercased text is in the foodArray Map
  if (foodArray.has(lowerCaseText)) {
    // Retrieve the fallingPear from the foodArray Map
    const fallingPear = foodArray.get(lowerCaseText);

    // Remove the fallingPear from the Matter.js world
    World.remove(engine.world, fallingPear);

    foodArray.delete(lowerCaseText);

    console.log(`Removed fallingPear associated with ${lowerCaseText}`);
  } else {
    console.log(`${lowerCaseText} not found in the foodArray Map.`);
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

        const getText = item.textContent

        removeTheFood(getText)
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

   createPear(p_el)

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









