const ingredients = [
  { name: 'Rice', image: 'images/rice.png' },
  { name: 'Egg', image: 'images/egg.png' },
  { name: 'Chicken Leg', image: 'images/chicken leg.png' },
  { name: 'Pasta', image: 'images/pasta.png' },
  { name: 'Bread', image: 'images/bread.png' },
  { name: 'Potato', image: 'images/potato.png' },
  { name: 'Apple', image: 'images/apple.png' },
  { name: 'Bean', image: 'images/bean.png' },
  { name: 'Shrimp', image: 'images/shrimp.png' },
  { name: 'Salmon', image: 'images/salmon.png' },
  { name: 'Avocado', image: 'images/avocado.png' },
  { name: 'Soy Sauce', image: 'images/soy sauce.png' },
  { name: 'Tomato', image: 'images/tomato.png' },
  { name: 'Bell Pepper', image: 'images/bell pepper.png' },
  { name: 'Lemon', image: 'images/lemon.png' },
  { name: 'Garlic', image: 'images/garlic.png' },
  { name: 'Red Wine', image: 'images/red wine.png' },
  { name: 'Corn', image: 'images/corn.png' },
  { name: 'Tuna', image: 'images/tuna.png' },
  { name: 'Butter', image: 'images/butter.png' },
  { name: 'Olive Oil', image: 'images/olive oil.png' },
  { name: 'Cheese', image: 'images/cheese.png' },
  { name: 'Carrot', image: 'images/carrot.png' },
  { name: 'Spinach', image: 'images/spinach.png' },
  { name: 'Lettuce', image: 'images/lettuce.png' },
  { name: 'Mushroom', image: 'images/mushroom.png'},
  { name: 'Onion', image: 'images/onion.png' },
  { name: 'Cucumber', image: 'images/cucumber.png' },
  { name: 'Steak', image: 'images/steak.png' },
  { name: 'Pineapple', image: 'images/pineapple.png' },
  { name: 'Strawberry', image: 'images/strawberry.png' },
  { name: 'Blueberry', image: 'images/blueberry.png' },
  { name: 'Peach', image: 'images/peach.png' },
  { name: 'Raspberry', image: 'images/raspberry.png' },
  { name: 'Cherry', image: 'images/cherry.png' },
  { name: 'Watermelon', image: 'images/watermelon.png' },
  { name: 'Kiwi', image: 'images/kiwi.png' },
  { name: 'Grape', image: 'images/grape.png' },
  { name: 'Cabbage', image: 'images/cabbage.png' },
  { name: 'Broccoli', image: 'images/broccoli.png' },
  { name: 'Pine Nut', image: 'images/pine nut.png' },
  { name: 'Cilantro', image: 'images/cilantro.png' },
  { name: 'Peanut', image: 'images/peanut.png' },
  { name: 'Banana', image: 'images/banana.png' },
  { name: 'Cashew', image: 'images/cashew.png' },
  { name: 'Almond', image: 'images/almond.png' },
  { name: 'Hazelnut', image: 'images/hazelnut.png' },
  { name: 'Walnut', image: 'images/walnut.png' },
  { name: 'Chickpea', image: 'images/chickpea.png' },
  { name: 'Lentil', image: 'images/lentil.png' },
  { name: 'Tofu', image: 'images/tofu.png' },
  { name: 'Honey', image: 'images/honey.png' },
  { name: 'Maple Syrup', image: 'images/maple syrup.png' },
  { name: 'Mustard', image: 'images/mustard.png' },
  { name: 'Mayonnaise', image: 'images/mayonnaise.png' },
  { name: 'Ketchup', image: 'images/ketchup.png' },
  { name: 'Salad Dressing', image: 'images/salad dressing.png' },
  { name: 'Sesame Seed', image: 'images/sesame seed.png' },
  { name: 'Honeydew Melon', image: 'images/honeydew melon.png' },
  { name: 'Tofu', image: 'images/tofu.png' },
  { name: 'Cinnamon', image: 'images/cinnamon.png' },
  { name: 'Cherry Tomato', image: 'images/cherry tomato.png' },
  { name: 'Pistachio', image: 'images/pistachio.png' },
  { name: 'Chilli', image: 'images/chilli.png' },
  { name: 'Eggplant', image: 'images/eggplant.png' },
  { name: 'Orange', image: 'images/orange.png' },
  { name: 'Pear', image: 'images/pear.png' },
  { name: 'Mango', image: 'images/mango.png' },
  { name: 'Coconut', image: 'images/coconut.png' },
  { name: 'Lobster', image: 'images/lobster.png' },
  { name: 'Sausage', image: 'images/sausage.png' },
  { name: 'Ham', image: 'images/ham.png' },
  { name: 'Scallop', image: 'images/scallop.png' },
  { name: 'Cinnamon', image: 'images/cinnamon.png' },
  { name: 'Dragon Fruit', image: 'images/dragon fruit.png' },
  { name: 'Dragon Fruit', image: 'images/dragon fruit.png' },
  { name: 'Ginger', image: 'images/ginger.png' },
  { name: 'Spring Onion', image: 'images/spring onion.png' },
  { name: 'Coriander', image: 'images/coriander.png' },
  { name: 'Ribs', image: 'images/rib.png' },
  { name: 'Squid', image: 'images/squid.png' },
  { name: 'Crab', image: 'images/crab.png' },
  { name: 'Wasabi', image: 'images/wasabi.png' },
  { name: 'Rambutan', image: 'images/rambutan.png' },
  { name: 'Rose Apple', image: 'images/rose apple.png' },
  { name: 'Olive', image: 'images/olive.png' },
  { name: 'Dill', image: 'images/dill.png' },
  { name: 'Yogurt', image: 'images/yogurt.png' },
  { name: 'Sugar', image: 'images/sugar.png' },
  { name: 'Caviar', image: 'images/caviar.png' },
  { name: 'Radish', image: 'images/radish.png' },
  { name: 'Kale', image: 'images/kale.png' },
  { name: 'pumpkin', image: 'images/pumpkin.png' },
  { name: 'Pickles', image: 'images/pickle.png' },
  { name: 'Oyster', image: 'images/oyster.png' },
  { name: 'Cantelope', image: 'images/cantelope.png' },
  { name: 'Durian', image: 'images/durian.png' },
  { name: 'Bacon', image: 'images/bacon.png' },
  { name: 'Papaya', image: 'images/papaya.png' },
  { name: 'Canned Tuna', image: 'images/canned tuna.png' },
  { name: 'White Wine', image: 'images/white wine.png' },
  { name: 'Chocolate', image: 'images/chocolate.png' },
  { name: 'Chestnut', image: 'images/chestnut.png' },
  { name: 'Rasin', image: 'images/rasin.png' },
  { name: 'Okra', image: 'images/okra.png' },
  { name: 'Parsley', image: 'images/parsley.png' },
  { name: 'Dill', image: 'images/dill.png' },
  { name: 'Chives', image: 'images/chives.png' },
  { name: 'Sweet Potato', image: 'images/sweet potato.png' },
  { name: 'Shallot', image: 'images/shallot.png' },
  { name: 'Vinegar', image: 'images/vinegar.png' },
  { name: 'Asparagus', image: 'images/asparagu.png' },
  { name: 'Baking Soda', image: 'images/baking soda.png' },
  { name: 'Baking Powder', image: 'images/baking powder.png' },
  { name: 'Hot Sauce', image: 'images/hot sauce.png' },
  { name: 'Cauliflower', image: 'images/cauliflower.png' },
  { name: 'Pea', image: 'images/pea.png' },
  { name: 'Milk', image: 'images/milk.png' },
  { name: 'Oat Milk', image: 'images/oat milk.png' },
  { name: 'Rice Milk', image: 'images/rice milk.png' },
  { name: 'Soy Milk', image: 'images/soy milk.png' },
  { name: 'Almond Milk', image: 'images/almond milk.png' },
  { name: 'Vodka', image: 'images/vodka.png' },
  { name: 'Flour', image: 'images/flour.png' },
  { name: 'Hazelnut', image: 'images/hazelnut.png' },
  { name: 'Vanilla Extract', image: 'images/vanilla extract.png' },
  { name: 'Barberry', image: 'images/barberry.png' },
  { name: 'Mint', image: 'images/mint.png' },
  { name: 'Basil', image: 'images/basil.png' },
  { name: 'Pecan', image: 'images/pecan.png' },
  { name: 'Macadamia Nut', image: 'images/macadamia nut.png' },
  { name: 'Brazil Nut', image: 'images/brazil nut.png' },
  { name: 'BBQ Sauce', image: 'images/bbq sauce.png' },
  { name: 'Steak Sauce', image: 'images/steak sauce.png' },
  { name: 'Tomato Sauce', image: 'images/tomato sauce.png' },
  { name: 'Coconut Milk', image: 'images/coconut milk.png' },
  { name: 'Thyme', image: 'images/thyme.png' },
  { name: 'Sage', image: 'images/sage.png' },
  { name: 'Brazil Nut', image: 'images/brazil nut.png' },
  { name: 'Rosemary', image: 'images/rosemary.png' },
  { name: 'Oregano', image: 'images/oregano.png' },
  { name: 'Bay Leaf', image: 'images/bay leaf.png' },
  { name: 'Tarragon', image: 'images/tarragon.png' },
  { name: 'Cayenne Pepper', image: 'images/cayenne pepper.png' },
  { name: 'Cod', image: 'images/cod.png' },
  { name: 'Sardine', image: 'images/sardine.png' },
  { name: 'Crawfish', image: 'images/crawfish.png' },
  { name: 'Anchovie', image: 'images/anchovie.png' },
  { name: 'Mussel', image: 'images/mussel.png' },
  { name: 'Trout', image: 'images/trout.png' },
  { name: 'Ground Beef', image: 'images/ground beef.png' },
  { name: 'Chicken Breast', image: 'images/chicken breast.png' },
  { name: 'Liver', image: 'images/liver.png' },
  { name: 'Lamb', image: 'images/lamb.png' },
  { name: 'Chicken Wing', image: 'images/chicken wing.png' },
  { name: 'Canned Peaches', image: 'images/canned peach.png' },
  { name: 'Canned Pineapple', image: 'images/canned pineapple.png' },
  { name: 'Canned Beans', image: 'images/canned bean.png' },
  { name: 'Canned Corn', image: 'images/canned corn.png' },
  { name: 'Sour Cream', image: 'images/sour cream.png' },
  { name: 'Strawberry Jam', image: 'images/strawberry jam.png' },
  { name: 'Peanut Butter', image: 'images/peanut butter.png' },
  { name: 'Almond Butter', image: 'images/almond butter.png' },
  { name: 'Peach Jam', image: 'images/peach jam.png' },
  { name: 'Cherry Jam', image: 'images/cherry jam.png' },
  { name: 'Pear Jam', image: 'images/pear jam.png' },
  { name: 'Blueberry Jam', image: 'images/blueberry jam.png' },
  { name: 'Sriracha', image: 'images/sriracha.png' },
  { name: 'Squash', image: 'images/squash.png' },
  { name: 'Porridge', image: 'images/porridge.png' },
  { name: 'Oatmeal', image: 'images/oatmeal.png' },
  { name: 'Red Cabbage', image: 'images/red cabbage.png' },
  { name: 'Sauerkrout', image: 'images/sauerkrout.png' },
  { name: 'Canned Tomato', image: 'images/canned tomato.png' },
  { name: 'Pesto', image: 'images/pesto.png' },
  { name: 'Ravioli', image: 'images/ravioli.png' },
  { name: 'Cottage Cheese', image: 'images/cottage cheese.png' },
  { name: 'Seaweed Paper', image: 'images/seaweed paper.png' },
  { name: 'Beer', image: 'images/beer.png' },
  { name: 'Whiskey', image: 'images/whiskey.png' },
  { name: 'Bourbon', image: 'images/bourbon.png' },
  { name: 'Sake', image: 'images/sake.png' },
  { name: 'Rum', image: 'images/rum.png' },
  { name: 'Tequila', image: 'images/tequila.png' },
  { name: 'Gin', image: 'images/gin.png' },
  { name: 'Brandy', image: 'images/brandy.png' },
  { name: 'Absinthe', image: 'images/absinthe.png' },
  { name: 'Scotch', image: 'images/scotch.png' },
  { name: 'Orange Juice', image: 'images/orange juice.png' },
  { name: 'Corn Flakes', image: 'images/corn flake.png' },
  { name: 'Green Bean', image: 'images/green bean.png' },
  { name: 'Pinto Bean', image: 'images/pinto bean.png' },
  { name: 'Red Bean', image: 'images/red bean.png' },
  { name: 'Anise', image: 'images/anise.png' },
  { name: 'Extra Virgin Olive Oil', image: 'images/extra virgin olive oil.png' },
  { name: 'Pepper', image: 'images/pepper.png' },
  { name: 'Salt', image: 'images/salt.png' },
  { name: 'White Sugar', image: 'images/white sugar.png' },
  { name: 'Whip Cream', image: 'images/whip cream.png' },
  { name: 'Coffee Bean', image: 'images/coffee bean.png' },
  { name: 'Instant Coffee', image: 'images/instant coffee.png' },
  { name: 'Frozen Pizza', image: 'images/frozen pizza.png' },
  { name: 'Frozen Broccoli', image: 'images/frozen broccoli.png' },
  { name: 'Frozen Pea', image: 'images/frozen pea.png' },
  { name: 'Frozen Dumpling', image: 'images/frozen dumpling.png' },
  { name: 'Frozen Veggie', image: 'images/frozen veggie.png' },
  { name: 'Nacho Chip', image: 'images/nacho chip.png' },
  { name: 'Potato Chip', image: 'images/potato chip.png' },
  { name: 'Red Bull', image: 'images/red bull.png' },
  { name: 'Chocolate Syrup', image: 'images/chocolate syrup.png' },
  { name: 'Jello', image: 'images/jello.png' },
  { name: 'Coke', image: 'images/coke.png' },
  { name: 'Grape Fruit', image: 'images/grape fruit.png' },
  { name: 'Pepsi', image: 'images/pepsi.png' },
  { name: 'Sugar Syrup', image: 'images/sugar syrup.png' },
  { name: 'Cracker', image: 'images/cracker.png' },
  { name: 'Club Soda', image: 'images/club soda.png' },
  { name: 'Apple Juice', image: 'images/apple juice.png' },
  { name: 'Tomato Juice', image: 'images/tomato juice.png' },
  { name: 'Grape Juice', image: 'images/grape juice.png' },
  { name: 'Lime', image: 'images/lime.png' },
  { name: 'Beet', image: 'images/beet.png' },
];


// 

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

  const margin = 0;
  // const boxWidth = 240;
  
  // const bowlX = cenDiv.offsetWidth / 2;
  // const bowlY = cenDiv.offsetHeight / 2 + 500 + margin; 
  // const rightEdgeX = bowlX + boxWidth / 2;
  // const rightEdgeY = bowlY - 120 + margin; 
  // const leftEdgeX = bowlX - boxWidth / 2;
  // const leftEdgeY = rightEdgeY;
  
  // const bowl = Bodies.rectangle(bowlX, bowlY, boxWidth, 20, { isStatic: true, render: { fillStyle: 'black' } });
  // const rightEdge = Bodies.rectangle(rightEdgeX, rightEdgeY, 15, 220, { isStatic: true, render: { fillStyle: 'black' } });
  // const leftEdge = Bodies.rectangle(leftEdgeX, leftEdgeY, 15, 220, { isStatic: true, render: { fillStyle: 'black' } });

  // World.add(engine.world, [bowl, rightEdge, leftEdge]);

  const ground = Bodies.rectangle(
  window.innerWidth / 2,           // center x
  window.innerHeight - 10,         // near bottom
  window.innerWidth,               // full width
  50,                              // thin height
  {
    isStatic: true,
    render: {
      fillStyle: 'transparent',          // visible for testing
    },
  }
);

  World.add(engine.world, ground);



  // 

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
  const batchSize = 230;
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
      restitution: 0.6,
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







