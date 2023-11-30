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
const cardDisplay = document.querySelector("#card-display");

let userTotal = 0;

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

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  card.filename = `${card.rank}${card.suit}.png`;
  return card;
}

function drawCard() {
  const drawCard = confirm("Do you want to draw a card?");

  if (drawCard) {
    const randomCard = getRandomCard();
    userTotal += randomCard.value;

    const drawCardtext = document.createElement("h2");
    drawCardtext.innerHTML = `You drew a ${randomCard.rank} of ${randomCard.suit}. Your total is now ${userTotal}.`;
    outcomeDisplay.appendChild(drawCardtext);

    const cardImg = document.createElement("img");
    cardImg.src = `./playingCards/${randomCard.rank}${randomCard.suit}.png`;
    cardImg.alt = `${randomCard.rank} of ${randomCard.suit}`;

    cardDisplay.appendChild(cardImg);
  }

  if (userTotal > 21) {
    const userTotalCardScoreText = document.createElement("h2");
    userTotalCardScoreText.innerHTML = "Bust! Your total exceeds 21. You lose!";
    outcomeDisplay.appendChild(userTotalCardScoreText);
  } else {
    alert("You chose not to draw a card.");
  }
}

function getRandomCardValue() {
  return values[Math.floor(Math.random() * values.length)];
}

function drawCardForPC() {
  const drawCard = confirm("Do you want to draw a card?");

  if (drawCard) {
    const randomCardValue = getRandomCardValue();
    userTotal += randomCardValue;
    alert(
      `You drew a card with value ${randomCardValue}. Your total is now ${userTotal}.`
    );
  }

  if (userTotal > 21) {
    alert("Bust! Your total exceeds 21. You lose!");
  } else {
    alert("You chose not to draw a card.");
  }
}

hitBtn.addEventListener("click", shuffle);
hitBtn.addEventListener("click", drawCard);

initializeDeck();
shuffle();

console.log(deck);
