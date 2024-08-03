let firstCard = getRandomCard();
let secondcard = getRandomCard();
let cards = [firstCard, secondcard];
let sum = firstCard + secondcard;
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let isAlive = false;
let hasBlackJack = false;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  for (i = 1; i < cards.length; i++) {
    cardsEl.textContent += "Cards: " + cards[i];
  }
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    messageEl.textContent = "Play another card?";
  } else if (sum === 21) {
    messageEl.textContent = "Wooho, blackjack";
  } else if (sum > 21) {
    messageEl.textContent = "BUST!";
  }
}

function newCard() {
  let card = getRandomCard();
  sum = card + sum;
  cards.push(card);
  startGame();
}
