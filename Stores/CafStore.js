var getColor = require('../Utils/Colors');

var CafStore = [
  {
    id: 1,
    title: "Macchiato",
    body: "To make an Espresso Macchiato pull a single shot of espresso “macchiato” (marked with) about 1½ tablespoons (a dollop) of foam. Rather than foam, some people instead prefer just a dash of steamed milk or cream.",
    div: [
      {
        parts: 2,
        content: "espresso",
      },
      {
        parts: 1,
        content: "foamed milk",
      },
    ],
    image: require('image!img-macchiato'),
    icon: require('image!macchiato'),
    time: 9,
    bgcolor: 'brown',
  },
  {
    id: 2,
    title: "Latte Macchiato",
    body: "To make a Latte Macchiato, fill a cup with steamed milk and then put in pour the espresso on top so the drink is macchiato (“marked”) with espresso. Pour the espresso in slowly so that it forms a dark swirl in the glass.",
    div: [
      {
        parts: 2,
        content: "steamed milk",
      },
      {
        parts: 1,
        content: "espresso",
      },
    ],
    image: require('image!img-lattemacchiato'),
    icon: require('image!lattemacchiato'),
    time: 12,
    bgcolor: 'dtan',
  },
  {
    id: 3,
    title: "Doppio",
    body: "To make an Doppio Espresso, pull two espresso shots (about 3 ounces total) using an espresso machine. A doppio is best served in a slightly oversized demitasse or in a Cappuccino cup. Doppio is Italian for “double.",
    div: [
      {
        parts: 2,
        content: "espresso",
      },
      {
        parts: 0,
        content: "anything"
      },
    ],
    image: require('image!img-doppio'),
    icon: require('image!doppio'),
    time: 5,
    bgcolor: 'lbrown',
  },
  {
    id: 4,
    title: "Mocha",
    body: "Pull two shots of espresso and pour them into a tall glass. Now mix in one ounce of chocolate syrup or chocolate powder, and then add steamed milk until it is almost full. Top it off with whipped cream and then garnish it with some chocolate flakes.",
    div: [
      {
        parts: 2,
        content: "espresso",
      },
      {
        parts: 1,
        content: "chocolate",
      },
      {
        parts: 1,
        content: "steamed milk",
      },
    ],
    image: require('image!img-mocha'),
    icon: require('image!mocha'),
    time: 10,
    bgcolor: 'brown',
  },
  {
    id: 5,
    title: "Americano",
    body: "To make an Americano, or Caffe Americano, pull a single shot of espresso and then add about 6 ounces of hot water—the strength should be similar to drip filter coffee. Caffe Americano is the Italian way of serving espresso “American style.” Add milk and/or sugar if desired.",
    div: [
      {
        parts: 2,
        content: "hot water",
      },
      {
        parts: 1,
        content: "espresso"
      },
    ],
    image: require('image!img-americano'),
    icon: require('image!americano'),
    time: 5,
    bgcolor: 'blue',
  },
  {
    id: 6,
    title: "Cafe Au Lait",
    body: "This delicious French coffee drink is prepared using strongly brewed coffee (French Press is best) or espresso served in a large, bowl-shaped cup (a white porcelain cup or bowl is best) along with heated milk or steamed milk but not foam.",
    div: [
      {
        parts: 1,
        content: "espresso",
      },
      {
        parts: 1,
        content: "steamed milk",
      },
    ],
    image: require('image!img-cafeaulait'),
    icon: require('image!cafeaulait'),
    time: 5,
    bgcolor: 'lgray',
  },
  {
    id: 7,
    title: "Cappuccino",
    body: "To make this Italian beverage pull one or two shots of espresso into a Cappuccino. Now add about twice as much steamed milk as there is espresso, and then top it off with foam.",
    div: [
      {
        parts: 1,
        content: "espresso",
      },
      {
        parts: 1,
        content: "steamed milk",
      },
      {
        parts: 1,
        content: "foamed milk",
      },
    ],
    image: require('image!img-cappuccino'),
    icon: require('image!cappuccino'),
    time: 10,
    bgcolor: 'dred',
  },
  {
    id: 8,
    title: "Dry Cappuccino",
    body: "A cappuccino with no steamed milk—instead it is filled with foam only. Pull one or two shots of espresso into a Cappuccino. Now add about twice as much foamed milk as there is espresso.",
    div: [
      {
        parts: 2,
        content: "foamed milk",
      },
      {
        parts: 1,
        content: "espresso",
      },
    ],
    image: require('image!img-drycappuccino'),
    icon: require('image!drycappuccino'),
    time: 10,
    bgcolor: 'brown',
  },
  {
    id: 9,
    title: "Irish Coffee",
    body: "To make a classic Irish Coffee, pour about one ounce of Irish whiskey into the glass and fill it almost full with brewed coffee that has been lightly sweetened. Next pour some thick, whole cream onto the back of a spoon that is resting just on the surface of the coffee beverage.",
    div: [
      {
        parts: 1,
        content: "espresso",
      },
      {
        parts: 1,
        content: "whiskey",
      },
      {
        parts: 1,
        content: "cream",
      },
    ],
    image: require('image!img-irishcoffee'),
    icon: require('image!irishcoffee'),
    time: 5,
    bgcolor: 'dred',
  },
  {
    id: 10,
    title: "Caffe Latte",
    body: "To make this Italian drink, pull two shots of espresso. Next add about three times as much steamed milk. As you pour the steamed milk into the cup use a spoon to hold back the foam until the cup is more than ¾-full. Now top it off with a small cap of foam.",
    div: [
      {
        parts: 3,
        content: "steamed milk",
      },
      {
        parts: 1,
        content: "espresso",
      },
    ],
    image: require('image!img-caffelatte'),
    icon: require('image!caffelatte'),
    time: 12,
    bgcolor: 'tan',
  },
  {
    id: 11,
    title: "Long Black",
    body: "There are no instructions.",
    div: [
      {
        parts: 1,
        content: "coffee",
      },
      {
        parts: 0,
        content: "anything"
      },
    ],
    image: require('image!img-longblack'),
    icon: require('image!longblack'),
    time: 5,
    bgcolor: 'gray',
  },
  {
    id: 12,
    title: "Affogato",
    body: "Place 2 small scoops of ice cream (coffee, chocolate or vanilla) in a coffee cup, then pull a shot of espresso. Top with shaved dark chocolate and chopped hazelnuts.",
    div: [
      {
        parts: 3,
        content: "ice cream",
      },
      {
        parts: 1,
        content: "espresso",
      },
    ],
    image: require('image!img-affogato'),
    icon: require('image!affogato'),
    time: 5,
    bgcolor: 'lbrown',
  },
]

module.exports = CafStore;