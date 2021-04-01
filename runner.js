let cards = require('./cards')
let table = []
let players = []

// console.log(cards)

// Get the logged in players from database
let loggedIn = ['Sammy', 'Ollie', 'Ben']

// Assign players and starting properties to the players array
loggedIn.forEach((l, i) => {
  players[i] = {
    id: i,
    name: l,
    cards: [],
    turn: false,
    points: 0
  }
})

// Shuffle the cards 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // console.log("Current Index is" + currentIndex)

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(cards)

// Number of cards all the players get
let cardCount = [...cards]
// console.log(cardCount)
let numCards = ((cardCount.length) - (cardCount.length % players.length)) / players.length
console.log("Num cards is " + numCards)

// Assign cards randomly to each of the players
const deal = (player) => {

  let i = 0

  while (i < numCards) {
    player.cards.push(cards[0])
    cards.shift()
    i++
  }
}

let dealing = new Promise(function (resolve, reject) {
  players.forEach((player, i) => {
    deal(player)

    resolve(cards);
    reject("Failed")
  })
})

dealing.then(
  function (cards) {
    if (cards.length > 0) {
      console.log("more than 1")
      cards.forEach((card, i) => players[i].cards.push(card))
    }
    console.log(players)
  }
);

console.log(players)



// Each player picks a card and puts on the table 