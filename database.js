
const ingredients = [
  { name: 'Rice', image: 'images/rice.png' },
  { name: 'Egg', image: 'images/egg.png' },
  { name: 'Chicken', image: 'images/chicken.png' },
  { name: 'Pasta', image: 'images/pasta.png' },
  { name: 'Bread', image: 'images/bread.png' },
  { name: 'Potato', image: 'images/potato.png' },
  { name: 'Apple', image: 'images/apple.png' },
  { name: 'Beans', image: 'images/beans.png' },
  { name: 'Shrimp', image: 'images/shrimp.png' },
  { name: 'Salmon', image: 'images/salmon.png' },
  { name: 'Avocado', image: 'images/avocado.png' },
  { name: 'Soy Sauce', image: 'images/soysauce.png' },
  { name: 'Tomato', image: 'images/tomato.png' },
  { name: 'Bell Pepper', image: 'images/bellpepper.png' },
  { name: 'Lemon Juice', image: 'images/lemon.png' },
  { name: 'Garlic', image: 'images/garlic.png' },
  { name: 'Wine', image: 'images/wine.png' },
  { name: 'Corn', image: 'images/corn.png' },
  { name: 'Tuna', image: 'images/tuna.png' },
  { name: 'Butter', image: 'images/butter.png' },
  { name: 'Oil', image: 'images/oil.png' },
  // top 50///
  { name: 'Cheese', image: 'images/cheese.png' },
  { name: 'Carrot', image: 'images/carrot.png' },
  { name: 'Spinach', image: 'images/spinach.png' },
  { name: 'Lettuce', image: 'images/lettuce.png' },
  { name: 'Mushroom', image: 'images/mushroom.png' },
  { name: 'Onion', image: 'images/onion.png' },
  { name: 'Cucumber', image: 'images/cucumber.png' },
  { name: 'Beef', image: 'images/beef.png' },
  { name: 'Pineapple', image: 'images/pineapple.png' },
  { name: 'Strawberry', image: 'images/strawberry.png' },
  { name: 'Blueberry', image: 'images/blueberry.png' },
  { name: 'Peach', image: 'images/peach.png' },
  { name: 'Raspberry', image: 'images/raspberry.png' },
  { name: 'Cherry', image: 'images/cherry.png' },
  { name: 'Watermelon', image: 'images/watermelon.png' },
  { name: 'Kiwi', image: 'images/kiwi.png' },
  { name: 'Grapes', image: 'images/grapes.png' },
  { name: 'Cabbage', image: 'images/cabbage.png' },
  { name: 'Broccoli', image: 'images/broccoli.png' },
  { name: 'Pine Nuts', image: 'images/pinenuts.png' },
  { name: 'Cilantro', image: 'images/cilantro.png' },
  { name: 'Peanuts', image: 'images/peanuts.png' },
  { name: 'Cashews', image: 'images/cashews.png' },
  { name: 'Almonds', image: 'images/almonds.png' },
  { name: 'Hazelnuts', image: 'images/hazelnuts.png' },
  { name: 'Walnuts', image: 'images/walnuts.png' },
  { name: 'Pistachios', image: 'images/pistachios.png' },
  { name: 'Quinoa', image: 'images/quinoa.png' },
  { name: 'Chickpeas', image: 'images/chickpeas.png' },
  { name: 'Lentils', image: 'images/lentils.png' },
  { name: 'Black Beans', image: 'images/blackbeans.png' },
  { name: 'Red Beans', image: 'images/redbeans.png' },
  { name: 'Green Beans', image: 'images/greenbeans.png' },
  { name: 'Tofu', image: 'images/tofu.png' },
  { name: 'Honey', image: 'images/honey.png' },
  { name: 'Maple Syrup', image: 'images/maplesyrup.png' },
  { name: 'Mustard', image: 'images/mustard.png' },
  { name: 'Mayonnaise', image: 'images/mayonnaise.png' },
  { name: 'Ketchup', image: 'images/ketchup.png' },
  { name: 'BBQ Sauce', image: 'images/bbqsauce.png' },
  { name: 'Hot Sauce', image: 'images/hotsauce.png' },
  { name: 'Ranch Dressing', image: 'images/ranchdressing.png' },
  { name: 'Sesame Seeds', image: 'images/sesameseeds.png' },
  { name: 'Mint', image: 'images/mint.png' },
  { name: 'Paprika', image: 'images/paprika.png' },
  { name: 'Honeydew Melon', image: 'images/honeydewmelon.png' },
  { name: 'Tofu', image: 'images/tofu.png' },
  { name: 'Cinnamon', image: 'images/cinnamon.png' },
  { name: 'Oregano', image: 'images/oregano.png' },
  { name: 'Coriander', image: 'images/coriander.png' },
  { name: 'Pumpkin Seeds', image: 'images/pumpkinseeds.png' },
  { name: 'Sesame Oil', image: 'images/sesameoil.png' },
  { name: 'Chives', image: 'images/chives.png' },
  { name: 'Dill', image: 'images/dill.png' },
  { name: 'Saffron', image: 'images/saffron.png' },
  { name: 'Peach', image: 'images/peach.png' },
  { name: 'Artichoke', image: 'images/artichoke.png' },
  { name: 'Radish', image: 'images/radish.png' },
  { name: 'Blue Cheese', image: 'images/bluecheese.png' },
  { name: 'Cherry Tomatoes', image: 'images/cherrytomatoes.png' },
  { name: 'Pistachios', image: 'images/pistachios.png' },
  { name: 'Squid', image: 'images/squid.png' },
  { name: 'Sourdough', image: 'images/sourdough.png' },
  { name: 'Maple Syrup', image: 'images/maplesyrup.png' },
  { name: 'Peach', image: 'images/peach.png' },
  { name: 'Vinegar', image: 'images/champagnevinegar.png' },
  { name: 'Balsamic', image: 'images/balsamicglaze.png' },
  { name: 'Smoked Salmon', image: 'images/smokedsalmon.png' },
  { name: 'Garam Masala', image: 'images/garammasala.png' },
  { name: 'Pesto', image: 'images/pesto.png' },
  { name: 'Sesame Seeds', image: 'images/sesameseeds.png' },
  { name: 'Gouda Cheese', image: 'images/goudacheese.png' },
  { name: 'Hummus', image: 'images/hummus.png' },
];

export default ingredients