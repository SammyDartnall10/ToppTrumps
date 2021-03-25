const { forEach } = require('./cards')
let cards = require('./cards')
let table = []
let players = []

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

// console.log(players)

// Assign cards randomly to each of the players
let numCards = ((cards.length) - (cards.length % players.length)) / players.length


const deal = (player) => {
  for (i = 0; i < numCards; i++) {
    let random = Math.floor(Math.random() * cards.length)
    console.log(random)
    if (!cards[random]) {
      console.log("stuck")

    } else {
      player.cards.push(cards[random])
      cards.splice(random)
      console.log("removing")
    }
  }
}

players.forEach((player, i) => {
  deal(player)
  console.log(player)
})

// console.log(numCards)
// console.log(cards.length)
// console.log(cards.length % players.length)
// console.log(random)
// console.log(cards)

// Each player picks a card and puts on the table 