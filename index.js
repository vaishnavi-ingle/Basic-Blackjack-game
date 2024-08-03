let cards = [];
let sum = 0;
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let isAlive = false;
let hasBlackJack = false;

function startGame() {
  let firstCard = getRandomCard();
  let secondcard = getRandomCard();
  sum = firstCard + secondcard;
  cards = [firstCard, secondcard];
  renderGame();
}

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

function renderGame() {
  isAlive = true;
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    messageEl.textContent = "Play another card?";
  } else if (sum === 21) {
    messageEl.textContent = "Wooho, blackjack";
    hasBlackJack = true;
  } else if (sum > 21) {
    messageEl.textContent = "BUST!";
    isAlive = false;
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum = card + sum;
    cards.push(card);
    renderGame();
  }
}
