/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["♥ ", "♦", "♠", "♣"];
  console.log("Hello Rigo from the console!");

  function deckBuilder() {
    let cards = [];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        const value = values[v];
        const suit = suits[s];
        cards.push({ value, suit });
      }
    }
    return cards;
  }
  // 0: {value: "A", suit: "Hearts"}
  // 1: {value: "2", suit: "Hearts"}
  // 2: {value: "3", suit: "Hearts"}

  const cards = deckBuilder(); //mazo de cartas

  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  console.log(cardValue, cardSuit);
  let value = document.querySelector(".center");
  value.innerHTML = cardValue;
  let value2 = document.querySelector(".left");
  value2.innerHTML = cardSuit;
  let value3 = document.querySelector(".right");
  value3.innerHTML = cardSuit;

  // let entity;
  // cardSuit === "Diamonds"
  //   ? (entity = "&diams;")
  //   : (entity = "&" + cardSuit.toLowerCase() + ";");
};
