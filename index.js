const board = document.getElementById("board")
const cellElements = document.querySelectorAll(".cell")
const mode1PlayerButton = document.getElementById("1PlayerButton")
const mode2PlayerButton = document.getElementById("2PlayerButton")
const hardResetButton = document.getElementById("resetButton")
const player1NameButton = document.getElementById("submit1")
const player2NameButton = document.getElementById("submit2")
const initialState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

//default variable values
let currentTurn = ""
let gameMode = 1
let count = 0
let player1Name = "Player 1"
let player2Name = "Player 2"
//default array as const
const startingState = Array.from(Array(9).keys())
//initialize manipulatable array
let state = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

console.log(startingState)
console.log(gameState)

//apply event listener, that can only be clicked once, for each cell
cellElements.forEach(cell => {
    cell.addEventListener("click", handleCellClick)
})

function handleCellClick(event) {
    if (event.target.id === null){
        
    }
}

// //randomize the starting turn
// function randomizeTurn() {
//     randomNumber = Math.round(Math.random()) + 1
//     console.log(randomNumber)
//     if (randomNumber === 1) {
//         currentTurn = "X"
//     }
//     else {
//         currentTurn = "O"
//     }
// }

// //change the turn every time this function is called
// function incrementTurn() {
//     if (currentTurn === "X") {
//         currentTurn = "O"
//     }
//     else {
//         currentTurn = "X"
//     }
// }

// //click event handlers for game mode selection
// mode1PlayerButton.addEventListener("click", handleGameMode1)
// mode2PlayerButton.addEventListener("click", handleGameMode2)

// //functions for game mode selection
// function handleGameMode1() {
//     resetGame()
//     gameMode = 1
//     player2Name = "Computer"
// }
// function handleGameMode2() {
//     resetGame()
//     gameMode = 2
// }

// //function for resetting gameState
// function resetGame() {
//     gameState = startingState
//     currentTurn = ""
//     gameMode = 1
//     count = 0
//     player1Name = "Player 1"
//     player2Name = "Player 2"
// }

const winConditions= [
    //horizontal
    [0,1,2],
    [3,4,5], 
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [6,4,2]
]

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