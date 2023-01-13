let nCards;
let deck = [
  "./img/bobrossparrot.gif",
  "./img/explodyparrot.gif",
  "./img/fiestaparrot.gif",
  "./img/metalparrot.gif",
  "./img/revertitparrot.gif",
  "./img/tripletsparrot.gif",
  "./img/unicornparrot.gif",
];

nCards = prompt("Com quantas cartas quer jogar?");

while (!(nCards % 2 === 0 && nCards >= 4 && nCards <= 14)) {
  alert("Digite um numero par entre 4 e 14");
  nCards = prompt("Com quantas cartas quer jogar?");
}

let cards = document.querySelector(".cards");
deck.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
nCards = nCards / 2;

for (i = 0; i < nCards; i++) {
  cards.innerHTML += `<div class="card">
<div class="front-face face"><img src="./img/back.png" alt="" /></div>
<div class="back-face face">
  <img src="${deck[i]}" alt="" />
</div>
</div><div class="card">
<div class="front-face face"><img src="./img/back.png" alt="" /></div>
<div class="back-face face">
  <img src="${deck[i]}" alt="" />
</div>
</div>
`;
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
  return Math.random() - 0.5;
}
