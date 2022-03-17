let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]


let boardState = [
    [["", "", ""],
    ["", "", ""],
    ["", "", ""]]
]

var square1 = document.getElementById("square1")
square1.addEventListener("click", function(el){
    if(turnMove() % 2 === 0){
        square1.innerHTML = "X"
        board[0].splice(0, 1, "X")
    } else {
        square1.innerHTML = "O"
        board[0].splice(0, 1, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square2 = document.getElementById("square2")
square2.addEventListener("click", function(el){
    if(turnMove() % 2 === 0){
        square2.innerHTML = "X"
        board[0].splice(1, 1, "X")
    } else {
        square2.innerHTML = "O"
        board[0].splice(1, 1, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square3 = document.getElementById("square3")
square3.addEventListener("click", function(el){
    if(turnMove() % 2 === 0){
        square3.innerHTML = "X"
        board[0].splice(2, 2, "X")
    } else {
        square3.innerHTML = "O"
        board[0].splice(2, 2, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square4 = document.getElementById("square4")
square4.addEventListener("click", function(el){
    if(turnMove() % 2 === 0){
        square4.innerHTML = "X"
        board[1].splice(0, 1, "X")
    } else {
        square4.innerHTML = "O"
        board[1].splice(0, 1, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square5 = document.getElementById("square5")
square5.addEventListener("click", function(el){
    if((turnMove() % 2 === 0)){
        square5.innerHTML = "X"
        board[1].splice(1, 1, "X")
    } else {
        square5.innerHTML = "O"
        board[1].splice(1, 1, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square6 = document.getElementById("square6")
square6.addEventListener("click", function(el){
    if((turnMove() % 2 === 0)){
        square6.innerHTML = "X"
        board[1].splice(2, 2, "X")
    } else {
        square6.innerHTML = "O"
        board[1].splice(2, 2, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square7 = document.getElementById("square7")
square7.addEventListener("click", function(el){
    if((turnMove() % 2 === 0)){
        square7.innerHTML = "X"
        board[2].splice(0, 1, "X")
    } else {
        square7.innerHTML = "O"
        board[2].splice(0, 1, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square8 = document.getElementById("square8")
square8.addEventListener("click", function(el){
    if((turnMove() % 2 === 0)){
        square8.innerHTML = "X"
        board[2].splice(1, 1, "X")
    } else {
        square8.innerHTML = "O"
        board[2].splice(1, 1, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})

var square9 = document.getElementById("square9")
square9.addEventListener("click", function(el){
    if((turnMove() % 2 === 0)){
        square9.innerHTML = "X"
        board[2].splice(2, 2, "X")
    } else {
        square9.innerHTML = "O"
        board[2].splice(2, 2, "O")
    }
    console.log(board)
    recordBoardState()
    checkRowWin()
    checkColWin()
    checkDiagWin()
})



// const turnMove = () => turns++;
let turns = 0;
function turnMove() {
    return turns++
}

function checkRowWin() {
    board.forEach((row, index) => {
        if (row.toString() === "X,X,X") {
            if (index === 0) {
                square1.style.backgroundColor = "yellow"
                square2.style.backgroundColor = "yellow"
                square3.style.backgroundColor = "yellow"
                document.getElementById("buttons").style.display = "flex"
            } else if (index === 1) {
                square4.style.backgroundColor = "yellow"
                square5.style.backgroundColor = "yellow"
                square6.style.backgroundColor = "yellow"
                document.getElementById("buttons").style.display = "flex"
            } else {
                square7.style.backgroundColor = "yellow"
                square8.style.backgroundColor = "yellow"
                square9.style.backgroundColor = "yellow"
                document.getElementById("buttons").style.display = "flex"
            }
        } if (row.toString() === "O,O,O"){
            if (index === 0) {
                square1.style.backgroundColor = "yellow"
                square2.style.backgroundColor = "yellow"
                square3.style.backgroundColor = "yellow"
                document.getElementById("buttons").style.display = "flex"
            } else if (index === 1) {
                square4.style.backgroundColor = "yellow"
                square5.style.backgroundColor = "yellow"
                square6.style.backgroundColor = "yellow"
                document.getElementById("buttons").style.display = "flex"
            } else {
                square7.style.backgroundColor = "yellow"
                square8.style.backgroundColor = "yellow"
                square9.style.backgroundColor = "yellow"
                document.getElementById("buttons").style.display = "flex"
            }
        }
    })
}


function checkColWin() {
    if (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") {
        square1.style.backgroundColor = "yellow"
        square4.style.backgroundColor = "yellow"
        square7.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") {
        square2.style.backgroundColor = "yellow"
        square5.style.backgroundColor = "yellow"
        square8.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") {
        square3.style.backgroundColor = "yellow"
        square6.style.backgroundColor = "yellow"
        square9.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") {
        square1.style.backgroundColor = "yellow"
        square4.style.backgroundColor = "yellow"
        square7.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") {
        square2.style.backgroundColor = "yellow"
        square5.style.backgroundColor = "yellow"
        square8.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") {
        square3.style.backgroundColor = "yellow"
        square6.style.backgroundColor = "yellow"
        square9.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    }
}

function checkDiagWin() {
    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        square1.style.backgroundColor = "yellow"
        square5.style.backgroundColor = "yellow"
        square9.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
        square3.style.backgroundColor = "yellow"
        square5.style.backgroundColor = "yellow"
        square7.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        square1.style.backgroundColor = "yellow"
        square5.style.backgroundColor = "yellow"
        square9.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    } if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") {
        square3.style.backgroundColor = "yellow"
        square5.style.backgroundColor = "yellow"
        square7.style.backgroundColor = "yellow"
        document.getElementById("buttons").style.display = "flex"
    }
}

function resetGame() {
    const squares = document.getElementsByClassName("square")
    for (let i=0; i < squares.length; i++) {
        squares[i].textContent = ""
        squares[i].style.backgroundColor = "aliceblue"
    }
    boardState = [[ 
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]]
    board = [ 
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    document.getElementById("buttons").style.display = "none"
    console.log(board)
    console.log(boardState)
}

function recordBoardState() {
    boardState.push(board.map(row => row.map(cell => cell)))
    console.log(boardState)
}

function previousMove() {
    if (boardState.length === 1) {
        document.getElementById("buttons").style.display = "none"
    } else {
        board = boardState.pop()
        square1.textContent = boardState[boardState.length - 1][0][0]
        square2.textContent = boardState[boardState.length - 1][0][1]
        square3.textContent = boardState[boardState.length - 1][0][2]
        square4.textContent = boardState[boardState.length - 1][1][0]
        square5.textContent = boardState[boardState.length - 1][1][1]
        square6.textContent = boardState[boardState.length - 1][1][2]
        square7.textContent = boardState[boardState.length - 1][2][0]
        square8.textContent = boardState[boardState.length - 1][2][1]
        square9.textContent = boardState[boardState.length - 1][2][2]
        const squares = document.getElementsByClassName("square")
        for (let i=0; i < squares.length; i++) {
            squares[i].style.backgroundColor = "aliceblue"
        }
        console.log(boardState)
    }
}

function nextMove() {
    board = boardState.push()
    square1.textContent = boardState[boardState.length - 1][0][0]
    square2.textContent = boardState[boardState.length - 1][0][1]
    square3.textContent = boardState[boardState.length - 1][0][2]
    square4.textContent = boardState[boardState.length - 1][1][0]
    square5.textContent = boardState[boardState.length - 1][1][1]
    square6.textContent = boardState[boardState.length - 1][1][2]
    square7.textContent = boardState[boardState.length - 1][2][0]
    square8.textContent = boardState[boardState.length - 1][2][1]
    square9.textContent = boardState[boardState.length - 1][2][2]
    console.log(boardState)
}