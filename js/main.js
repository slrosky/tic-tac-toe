/*----- constants -----*/
const playerLookup = {
    '1': 'x',
    '-1': 'o',
    'null': 'transparent' 
  };

let winPlay = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2]
];
/* Winner thought process

visualizing the game board
 0 | 1 | 2
---|---|---
 3 | 4 | 5
---|---|---
 6 | 7 | 8
 
 column 1 = 0 3 6
 column 2 = 1 4 7
 column 3 = 2 5 8
 row 1 = 0 1 2
 row 2 = 3 4 5
 row 3 = 6 7 8
 down diag = 0 4 8
 up diag = 6 4 2
 
 */


/*----- app's state (variables) -----*/
let board; // array of squares (1, -1, null) rendered al columns
let turn; // 1 or -1 (player)
let winner; // player that won (-1 or 1), a tie ('T'), or game in play (?)

/*----- cached element references -----*/
const sqEl = document.querySelectorAll('div');
let gameBoard = document.getElementById('board')
const msgEl = document.getElementById('msg');


/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', init);
gameBoard.addEventListener('click', handleBoardClick)

/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
    turn();
}

function render() {
    renderBoard();
    if (winner) {
        if (winner === 'T') {
          msgEl.innerHTML = "It's a Tie!";
        } else {
          msgEl.innerHTML = `<span ${playerLookup[winner]}">${playerLookup[winner].toUpperCase()}"</span> - WINNER WINNER CHICKEN DINNER!`;
        }
      } else {
        // Show whose turn it currently is
        msgEl.innerHTML = `<span ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}'s</span> Turn`;
      }
    };

function renderBoard() {
    board.forEach(function(cell) {
        const div = document.getElementById();
        div.style.backgroundColor = playerLookup[cell]
    });
}

function handleBoardClick(e) {
    const square = sqEl.indexOf(e.target);
    if (!square.includes(null)) return;
    if (square === -1 || winner)
    //apply the attribute of which ever player's turn it is
    turn *= -1;
    if (winner = !null());
        render();
    //do I need to splice the playerLookup propert to the array (to hold the "data")
  }

function getWinner() {
  for (let i = 0; i < board.length; i++) {
    checkBoard(i);
    if (winner) break;
  }
}

function clearBoard(e) {
///If a cell/square has a -1 or 1 value in it -> replace with 'null'
}; 

