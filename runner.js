const { forEach } = require('./cards')
let cards = require('./cards')
let table = []
let players = []

// Get the logged in players from database
let loggedIn = ['Sammy', 'Ollie', 'Ben']

// Assign players and starting properties to the players array
loggedIn.forEach((l, i) => {
  players[i] = {
    name: l,
    cards: [],
    turn: false,
    points: 0
  }
})

console.log(players)

// Assign cards randomly to each of the players

// Each player picks a card and puts on the table 