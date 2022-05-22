//*********Properties*********

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let responseMessage = ""
let gameMessage = document.getElementById("message")
let theTotal = document.getElementById("total-element")
let theCards = document.getElementById("theCards-element")

let player = {
  name : "Player",
  chips : 200
}

let playerElement = document.getElementById("player-element")
playerElement.textContent = player.name + ": $" + player.chips


//********Functions********

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1 // 1 - 13
  if(randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true

  theCards.innerHTML = "Cards:"
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  playGame()
}

function playGame() {
  theCards.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
    theCards.textContent += cards[i] + " "
  }
    //+ cards[0] + ", " + cards[1]
  
  
  theTotal.textContent = "Total: " + sum   
    if (sum < 21) {
    responseMessage = "Do you want another card?"
  } else if (sum === 21) {
    responseMessage = "Blackjack!"
    hasBlackjack = true
  } else {
    responseMessage = "You lose. Sorry, chump."
    isAlive = false
  }
  gameMessage.textContent = responseMessage
  }  

  function newCard() {
    if (isAlive === true && hasBlackjack === false) {
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(card)
    playGame()
    }
  }


