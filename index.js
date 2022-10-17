const board = document.getElementById("board")
const cellElements = document.querySelectorAll("[board-cell]")
const mode1PlayerButton = document.getElementById("1PlayerButton")
const mode2PlayerButton = document.getElementById("2PlayerButton")
const hardResetButton = document.getElementById("resetButton")
const gameUpdates = document.getElementById("gameUpdateMessage")
const playerNameDisplay = document.getElementById("nameDisplay")

//all possible winning combos
  const winCombos= [
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
    [2,4,6]
]

//default variable values
let currentTurn = ""
let gameMode = 1
let count = 0
let player1Name = "Player 1"
let player2Name = "Player 2"

//run game
//force game mode choice?
//optional name entry

//randomize starting turn

//if game mode = 1
function computerBehavior () {
    
}



randomizeTurn()




//only allow one click per cell, on click run handleClick func
cellElements.forEach(cell => {cell.addEventListener("click", handleCellClick, {once: true})})   

//eventListeners
mode1PlayerButton.addEventListener("click", handleGameMode1)
mode2PlayerButton.addEventListener("click", handleGameMode2)
document.getElementById("inputButton1").addEventListener("click", player1NameChange)
document.getElementById("inputButton2").addEventListener("click", player2NameChange) 
hardResetButton.addEventListener("click", resetGame)

function handleCellClick(event) {
    const currentCell = event.target
    currentCell.innerText = currentTurn
    // currentCell.classList.add(currentTurn)
    count ++
    if (checkWin(currentTurn)) {
        console.log("WINNER!!")
    }
    //check for draw via no winner and count hits 9 
    else if (count === 9) {
        console.log("DRAW!!")
    }
    //switch turns and continue if no draw/win
    else {
        switchTurns()
    }
}


//functions for game mode selection
//resets game, sets mode to 1 player, defaults player2 to computer
function handleGameMode1(event) {
    // resetGame()
    gameMode = 1
    // player2NameEntryForm.style.display = "none"
    player2Name = "Computer"
    gameUpdates.innerText = "Now enter your name!"
}
function handleGameMode2(event) {
    // resetGame()
    gameMode = 2
    player2Name = "Player 2"
    gameUpdates.innerText = "Now enter your names!"
}

 
// //functions for handling name entries
function player1NameChange() {
    player1Name = document.getElementById("playerName1").value
    updateNames ()
}
function player2NameChange() {
    player2Name = document.getElementById("playerName2").value
    updateNames ()
}

function updateNames () {
    if (player1Name === "" || player1Name === null) {
        player1Name = "Player 1"
    }
    if (player2Name === "" || player2Name === null) {
        if (gameMode = 1) {
            player2Name = "Computer"
        }
        else {
            player2Name = "Player 2"
        }
    }
nameDisplay.innerText = `${player1Name} VS ${player2Name}`
}


function resetGame() {
    //default variable values
    let currentTurn = "X"
    let gameMode = 1
    let count = 0
    let player1Name = "Player 1"
    let player2Name = "Player 2"
    cellElements.forEach((element) => {
        element.innerText = ""
        //CAUSING ISSUES WITH CLICKING BOXES AGAIN AFTER, MAYBE PREVENT DEFAULT??
    })
}

function checkWin (currentTurn) {
    return winCombos.some((combo) => {
        return combo.every((i) => {
            return cellElements[i].innerText === currentTurn
        })
    })
}

//randomize the starting turn
function randomizeTurn() {
    randomNumber = Math.round(Math.random()) + 1
    if (randomNumber === 1) {
        currentTurn = "X"
    }
    else {
        currentTurn = "O"
    }
}

//switch turns when called
function switchTurns() {
    if (currentTurn === "X") {
        nameDisplay.innerText = player1Name
        currentTurn = "O"
    }
    else {
        nameDisplay.innerText = player2Name
        currentTurn = "X"
    }
}




//old

//click handler for any board clicks
//grab the current cell by target 
//place x or o in innerText of current cell for display
//assign x or o onto class name for board tracking
//check for win 
//switch turns 
// function handleCellClick(event) {
//     const currentCell = event.target
//     currentCell.innerText = currentTurn
//     currentCell.classList.add(currentTurn)
//     count ++
//     if (checkWin(currentTurn)) {
//         console.log("WINNER!!")
//     }
//     //check for draw via no winner and count hits 9 
//     else if (count === 9) {
//         console.log("DRAW!!")
//     }
//     //switch turns and continue if no draw/win
//     else {
//         switchTurns()
//     }
// }

// //check for win conditions via combos array and cell id, 
// //winner if some match in combos array and all match in any specific combo array
// function checkWin (currentTurn) {
//     return winCombos.some((combo) => {
//         return combo.every((i) => {
//             return cellElements[i].classList.contains(currentTurn)
//         })
//     })
// }