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
  { name: 'Peach', image: 'images/peach.png' },
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
  { name: 'Mussels', image: 'images/mussels.png' },
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
];

export default ingredients