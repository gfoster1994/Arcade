const board = document.getElementById("board")
const cellElements = document.getElementById("cell")
const mode1PlayerButton = document.getElementById("1PlayerButton")
const mode2PlayerButton = document.getElementById("2PlayerButton")
const hardResetButton = document.getElementById("resetButton")
const player1NameButton = document.getElementById("submit1")
const player2NameButton = document.getElementById("submit2")

let state;
let currentTurn = null;
let gameMode = null
let count = 0;
let player1Name = "Player 1"
let player2Name = "Player 2"


//randomize the initial turn 
function randomizeStartingTurn() {
    currentTurn = Math.floor(Math.random(1, 2))
    if (currentTurn = 1) {
        currentTurn = "x"
    } else {
        currentTurn = "o"
    }
    return currentTurn
    console.log(currentTurn)
}

//click event handlers for game mode selection
mode1PlayerButton.addEventListener("click", function(){
    gameMode = 1
    console.log(gameMode)
    player2Name = "Computer"
    console.log(player1Name, player2Name)
    //add function to reset game later
})

mode2PlayerButton.addEventListener("click", function(){
    gameMode = 2
    console.log(gameMode)
    console.log(player1Name, player2Name)
    //add function to reset game later
})

//click event handler to reset game
hardResetButton.addEventListener("click", function(){
    console.log("reset!")
})

//click event handlers for name entries
player1NameButton.addEventListener("click", function(){
    player1Name = document.getElementById("player1Name").value
    console.log(player1Name)
})

player2NameButton.addEventListener("click", function(){
    player2Name = (document.getElementById("player2Name").value)
    console.log(player2Name)
})










// //initial state of the game
// function buildInitialState() {
//     const gameState = {
//         players: ["x", "o"], 
//         board: [
//             [null, null, null], 
//             [null, null, null],
//             [null, null, null]
//         ]
//     }
// }
// // ???
// function renderState() {

// }



// cellElements.addEventListener("click", handleClick() {

// })




/*

function tick() {
    // this is an incremental change that happens to the state every time you update...
  
    renderState()
  }

  setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible


// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
//add event listener  for board
// board.addEventListener("click", function() {
//  console.log(event.target.innerText)
// })
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
board.addEventListener('click', onBoardClick); // etc

// now you might have things like
document.addEventListener('keydown', function (event) {
    // here you might read which key was pressed and update the state accordingly
  })

  */