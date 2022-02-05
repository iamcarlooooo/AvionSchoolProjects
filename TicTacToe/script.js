let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]


var square1 = document.getElementById("square1")
square1.addEventListener("click", function(turnMove){
    if (turnMove % 2 === 0) {
        square1.innerHTML = "X"
        board[0].splice(0, 1, "X")
    } else {
        square1.innerHTML = "O"
        board[0].splice(0, 1, "O")
    }
    console.log(board)
})

var square2 = document.getElementById("square2")
square2.addEventListener("click", function(turnMove){
    if (turnMove % 2 === 0) {
        square2.innerHTML = "X"
        board[0].splice(1, 1, "X")
    } else {
        square2.innerHTML = "O"
        board[0].splice(1, 1, "O")
    }
    console.log(board)
})

var square3 = document.getElementById("square3")
square3.addEventListener("click", function(turnMove){
    if (turnMove % 2 === 0) {
        square3.innerHTML = "X"
        board[0].splice(2, 2, "X")
    } else {
        square3.innerHTML = "O"
        board[0].splice(2, 2, "O")
    }
    console.log(board)
})

var square4 = document.getElementById("square4")
square4.addEventListener("click", function(turnMove){
    if (turnMove % 2 === 0) {
        square4.innerHTML = "X"
        board[1].splice(0, 0, "X")
    } else {
        square4.innerHTML = "O"
        board[1].splice(0, 1, "O")
    }
    console.log(board)
})

var square5 = document.getElementById("square5")
square5.addEventListener("click", function(turnMove){
    if ((turnMove % 2 === 0)) {
        square5.innerHTML = "X"
        board[1].splice(1, 1, "X")
    } else {
        square5.innerHTML = "O"
        board[1].splice(1, 1, "O")
    }
    console.log(board)
})

var square6 = document.getElementById("square6")
square6.addEventListener("click", function(turnMove){
    if ((turnMove % 2 === 0)) {
        square6.innerHTML = "X"
        board[1].splice(2, 2, "X")
    } else {
        square6.innerHTML = "O"
        board[1].splice(2, 2, "O")
    }
    console.log(board)
})

var square7 = document.getElementById("square7")
square7.addEventListener("click", function(turnMove){
    if ((turnMove % 2 === 0)) {
        square7.innerHTML = "X"
        board[2].splice(0, 1, "X")
    } else {
        square7.innerHTML = "O"
        board[2].splice(0, 1, "O")
    }
    console.log(board)
})

var square8 = document.getElementById("square8")
square8.addEventListener("click", function(turnMove){
    if ((turnMove % 2 === 0)) {
        square8.innerHTML = "X"
        board[2].splice(1, 1, "X")
    } else {
        square8.innerHTML = "O"
        board[2].splice(1, 1, "O")
    }
    console.log(board)
})

var square9 = document.getElementById("square9")
square9.addEventListener("click", function(turnMove){
    if ((turnMove % 2 === 0)) {
        square9.innerHTML = "X"
        board[2].splice(1, 1, "X")
    } else {
        square9.innerHTML = "O"
        board[2].splice(2, 2, "O")
    }
    console.log(board)
})



function turnMove(board) {
    turns = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j]) {
                turns = turns + 1
            } else {
                turns = turns + 0
            }
        }
    }
    return turns
}