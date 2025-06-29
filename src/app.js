import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  const suits = ["♦" , "♥" , "♠" , "♣"];
  const numberCard = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1]

  const randomSuits = suits[Math.floor(Math.random() * suits.length)];
  const randomNumberCard = numberCard[Math.floor(Math.random() * numberCard.length)];


  console.log("Hello Rigo from the console!");
};
