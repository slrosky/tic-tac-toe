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
const sqEl = Array.from(document.querySelectorAll('div'));
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
}

function render() {
  winner = getWinner();  
  console.log(winner)
  renderBoard();
    if (winner) {
        if (winner === 'T') {
          msgEl.innerHTML = "It's a Tie!";
        } else {
          msgEl.innerHTML = `"${playerLookup[winner]}"</span> - WINNER WINNER CHICKEN DINNER!`;
        }
      } else {
        // Show whose turn it currently is
        msgEl.innerHTML = `"<span ${playerLookup[turn]}">${playerLookup[turn].toUpperCase()}"'s</span> Turn`;
      }
    };

function renderBoard() {
    board.forEach(function(cell, idx) {
        const div = document.getElementById(`cell${idx}`);
        div.style.backgroundColor = playerLookup[cell]
    });
}
//textContent to change rather than background ^^

function handleBoardClick(e) {
  const idx = parseInt(e.target.id.slice(4));
    if (e.target.textContent) return;
    e.target.textContent = playerLookup[turn]
    board[idx] = turn;
    turn *= -1;
        render();
  }
  //check board[idx] rather than textContent

function getWinner() {
  console.log(board)
  for (let i = 0; i < winPlay.length; i++) {
  console.log(board[winPlay[i][0]])
    if (Math.abs(board[winPlay[i][0]] + board[winPlay[i][1]] + board[winPlay[i][2]]) === 3) return board[winPlay[i][0]];
  }
  if (board.includes(null)) return null;
  return 'T';
}

function clearBoard(e) {
  location.reload();
}; 

