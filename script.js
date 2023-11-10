const deck = [];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

for (const suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
        const card = {
            suit: suit,
            rank: ranks[i],
            value: values[i]
        };
        deck.push(card);
    }
}

console.log(deck)
console.log()