let firstCard = getRandomCard();
let secondcard = getRandomCard();
let cards = [firstCard, secondcard];
let sum = firstCard + secondcard;
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

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
  cardsEl.textContent = "Cards: " + cards[1] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    console.log("Play another card?");
  } else if (sum === 21) {
    console.log("Wooho, blackjack");
  } else if (sum > 21) {
    console.log("BUST!");
  }
}
