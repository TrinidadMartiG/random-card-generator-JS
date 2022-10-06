
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
let cards = ["♦", "♥", "♠", "♣"];

let generateCard = () => {
    let htmlNum = document.querySelector('#num');
    let htmlCard = document.querySelector('#card');
    let htmlCard2 = document.querySelector('#card2');

    let randomCard = [Math.floor(Math.random() * cards.length)];
    let randomNum = [Math.floor(Math.random() * num.length)];

    if (cards[randomCard] === "♦") htmlCard.style.color = 'red';
    if (cards[randomCard] === "♦") htmlCard2.style.color = 'red';
    if (cards[randomCard] === "♥") htmlCard.style.color = 'red';
    if (cards[randomCard] === "♥") htmlCard2.style.color = 'red';
    if (cards[randomCard] === "♠") htmlCard.style.color = 'black';
    if (cards[randomCard] === "♠") htmlCard2.style.color = 'black';
    if (cards[randomCard] === "♣") htmlCard.style.color = 'black';
    if (cards[randomCard] === "♣") htmlCard2.style.color = 'black';


    htmlNum.innerHTML = num[randomNum];
    htmlCard.innerHTML = cards[randomCard];
    htmlCard2.innerHTML = cards[randomCard];

}

/* function Card() {
let randomCard = cards[Math.floor(Math.random() * cards.length)];
let randomNum = num[Math.floor(Math.random() * num.length)];

  document.getElementById("card").innerHTML = randomCard;
  document.getElementById("card2").innerHTML = randomCard;
  document.getElementById("num").innerHTML = randomNum;
} */