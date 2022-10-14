const board = document.getElementById("board")
const cellElements = document.getElementById("cell")

let player1 = document.getElementById("player1Name")
let player2 = document.getElementById("player2Name")
let state;
let currentTurn = null;
let count = 0;

//determine the game type

document.getElementById("submit1").addEventListener("click", function(){
    if (player1 === null) {
        let player1 = "Player 1"
    }
})
document.getElementById("submit2").addEventListener("click", function(){
    if (player2 === null) {
        let player1 = "Player 2"
    }
})


//randomize the initial turn 
function randomizeStartingTurn() {
    currentTurn = Math.floor(Math.random(1, 2))
    if (currentTurn = 1) {
        let currentTurn = "x"
    } else {
        let currentTurn = "o"
    }
    return currentTurn
}

// function setNames() {
//     if (player1Name === null) {
//         player1Name = "PLAYER 1"
//     }
//     if (player2Name === null) {
//         player2Name = "PLAYER 2"
//     }
// }

//initial state of the game
function buildInitialState() {
    const gameState = {
        players: ["x", "o"], 
        board: [
            [null, null, null], 
            [null, null, null],
            [null, null, null]
        ]
    }
}
// ???
function renderState() {

}



cellElements.addEventListener("click", handleClick() {

})




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