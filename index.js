let firstCard = 7;
let secondcard = 10;
let sum = firstCard + secondcard;
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let ca

sumEl.textContent = "Sum: " + sum

function startGame() {
  if (sum <= 20) {
    console.log("Play another card?");
  } else if (sum === 21) {
    console.log("Wooho, blackjack");
  } else if (sum > 21) {
    console.log("BUST!");
  }
}