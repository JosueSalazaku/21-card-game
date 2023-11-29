const deck = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

const gameInfo = document.querySelector("#Gameinfo");
const roundNumber = document.querySelector("#round-number");
const playerBalance = document.querySelector("#player-balance");

const playerSection = document.querySelector("#player-section");
const playerCards = document.querySelector("#player-cards");
const playerScore = document.querySelector("#player-score");

const dealerSection = document.querySelector("#dealer-section");
const dealerCards = document.querySelector("#dealer-cards");
const dealerScore = document.querySelector("#dealer-score");

const gameControls = document.querySelector("#game-controls");
const hitBtn = document.querySelector("#hit-button");
const standBtn = document.querySelector("#stand-button");
const restartBtn = document.querySelector("#restart-button");

const outcomeDisplay = document.querySelector("#outcome-display");
const outcomeMessage = document.querySelector("#outcome-message");

function initializeDeck() {
  for (const suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
      const card = {
        suit: suit,
        rank: ranks[i],
        value: values[i],
      };
      deck.push(card);
    }
  }
}

function shuffle() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

shuffle();
initializeDeck();
console.log(deck);
