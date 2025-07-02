import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here



  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }
  const numeroCarta = document.querySelectorAll(`.value`)
  const suitsCarta = document.querySelectorAll(`.suit`)




  const mostrarCarta = () => {
    const suits = ["♦", "♥", "♠", "♣"];
    const numberCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

    const randomSuit = getRandom(suits)
    const randomNumber = getRandom(numberCard)


    suitsCarta.forEach(suit => {
      suit.textContent = randomSuit;
      suit.style.color = (randomSuit === "♦" || randomSuit === "♥") ? "red" : "black";
    });
    numeroCarta.forEach(numero => {
      numero.textContent = randomNumber;
      //numero.style.color = (randomSuit === "♦" || randomSuit === "♥") ? "red" : "black";
    });

  }
  window.addEventListener("load", mostrarCarta());

  document.querySelector(`#boton`).addEventListener(`click`, () => {
    mostrarCarta()
  })
  setInterval(mostrarCarta, 3000);
};