const deck = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
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
const hitBtn = document.querySelector("#hit-bitton");
const standBtn = document.querySelector("#stand-bitton");
const restartBtn = document.querySelector("#restart-bitton");

const outcomeDisplay = document.querySelector("#outcome-display");
const outcomeMessage = document.querySelector("#outcome-message");


for (const suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
        const card = {
            suit: suit,
            rank: ranks[i],
            value: values[i]
        };
        deck.push(card);
    };
};

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const randomShuffle = Math.floor(Math.random() * (deck.length * 1))
    }
}

console.log(deck)
console.log()