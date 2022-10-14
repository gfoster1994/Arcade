const board = document.getElementById("board")
const cellElements = document.getElementById("cell")
const mode1PlayerButton = document.getElementById("1PlayerButton")
const mode2PlayerButton = document.getElementById("2PlayerButton")
const hardResetButton = document.getElementById("resetButton")
const player1NameButton = document.getElementById("submit1")
const player2NameButton = document.getElementById("submit2")

let currentTurn = ""
let gameMode = 1
let count = 0
let player1Name = "Player 1"
let player2Name = "Player 2"
let gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

function gameSetup() {
    //click event handlers for game mode selection
    mode1PlayerButton.addEventListener("click", handleGameMode1)
    mode2PlayerButton.addEventListener("click", handleGameMode2)
}

//function for setting board to default
function buildInitialState() {
    const startingState= {
        players: ['x', 'o'],
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ]
      }
}

//functions for game mode selection
function handleGameMode1() {
    gameMode = 1
    player2Name = "Computer"
}
function handleGameMode2() {
    gameMode = 2
}

// // click event for each cell, call handleClick function,  does not allow more than one click on specific cell
// cellElements.forEach(cell => {
//     cell.addEventHandler("click", handleClick, {once: true} )
// })

// //handle click for any cell
// function handleClick(event) {
//     const cell = event.target

// // handle click for any cell
// // place x or o on cell
// // check for win
// // check for a draw
// // switch turns


// //render state
// function renderState() {
// }

// //reset the game 
// function resetGame() {

// }

// //randomize the initial turn 
// function randomizeTurn() {
//     //picks a random between 1 and 2 (exclude zero)
//     const randomNumber = Math.round(Math.random()) + 1
//     if (randomNumber === 1) {
//         currentTurn = "X"
//     } 
//     else {
//         currentTurn = "O"
//     }
// }

// //change the turn 
// function changeTurn() {
// }



// //click event handler to reset game
// hardResetButton.addEventListener("click", resetGame(){
// })

// //click event handlers for name entries
// player1NameButton.addEventListener("click", function(){
//     player1Name = document.getElementById("player1Name").value
//     console.log(player1Name)
// })

// player2NameButton.addEventListener("click", function(){
//     player2Name = document.getElementById("player2Name").value
//     console.log(player2Name)
// })