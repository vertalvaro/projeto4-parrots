let nCards;
const game = document.querySelector(".game");
const deck = [
  "./img/bobrossparrot.gif",
  "./img/explodyparrot.gif",
  "./img/fiestaparrot.gif",
  "./img/metalparrot.gif",
  "./img/revertitparrot.gif",
  "./img/tripletsparrot.gif",
  "./img/unicornparrot.gif",
];
let cardMatches;
let moves = 0;
let Flipped = false;
let lock = false;
let firstCard, secondCard;

function start() {
  const board = [];
  moves = 0;
  game.innerHTML = "";
  while (true) {
    nCards = prompt("Com quantas cartas quer jogar?");

    if (nCards % 2 === 0 && nCards >= 4 && nCards <= 14) {
      break;
    } else {
      alert("Digite um numero par entre 4 e 14");
    }
  }
  cardMatches = nCards / 2;
  for (let i = 0; i < nCards / 2; i++) {
    board.push(deck[i]);
    board.push(deck[i]);
  }

  board.sort(comparador);

  for (let i = 0; i < nCards; i++) {
    game.innerHTML += `<div class="card">
                                    <img class="front-face face" src="./img/back.png" alt="back-face">
                                    <img class="back-face face" src="${board[i]}" alt="front-face">
                                    </div>`;
  }
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

setTimeout(start, 1000);

function flipCard() {
  if (lock) {
    return;
  }
  if (this === firstCard) {
    return;
  }
  this.classList.add("flip");
  if (!Flipped) {
    Flipped = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  Flipped = false;
  checkForMatch();
}

function lockCard() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetMoves();
}

function checkForMatch() {
  if (firstCard.innerHTML === secondCard.innerHTML) {
    countMoves();
    lockCard();
    finish();
    return;
  }
  countMoves();
  unflipCards();
}

function unflipCards() {
  lock = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetMoves();
  }, 1000);
}

function resetMoves() {
  Flipped = false;
  lock = false;
  firstCard = "";
  secondCard = "";
}

function countMoves() {
  moves++;
}

function finish() {
  cardMatches--;
  if (cardMatches === 0) {
    alert(`Você ganhou em ${2 * moves} jogadas!`);
  }
}

function comparador() {
  return Math.random() - 0.5;
}
