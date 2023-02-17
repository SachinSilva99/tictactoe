var board = [['', '', ''], ['', '', ''], ['', '', '']];
var currentPlayer = 'X';
var gameOver = false;

// add event listener to all td elements
document.querySelectorAll('td').forEach(function(el) {
  el.addEventListener('click', function(e) {
    if (e.target.textContent === '' && !gameOver) {
      // update board and check for win or draw
      var row = e.target.parentNode.rowIndex;
      var col = e.target.cellIndex;
      board[row][col] = currentPlayer;
      e.target.textContent = currentPlayer;
      e.target.classList.add(currentPlayer.toLowerCase());
      checkWin(currentPlayer);
      checkDraw();
      // toggle current player
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  });
});

// play button
document.querySelector('#play-again').addEventListener('click', function() {
  // reset board and variables
  board = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer = 'X';
  gameOver = false;
  document.querySelectorAll('td').forEach(function(el) {
    el.textContent = '';
    el.classList.remove('x', 'o');
  });
  document.querySelector('#result').textContent = '';
});

function checkWin(player) {
  // check rows
  for (var i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      gameOver = true;
      document.querySelector('#result').textContent = player + ' wins!';
    }
  }
  // check columns
  for (var j = 0; j < 3; j++) {
    if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
      gameOver = true;
      document.querySelector('#result').textContent = player + ' wins!';
    }
  }
  // check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    gameOver = true;
    document.querySelector('#result').textContent = player + ' wins!';
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    gameOver = true;
    document.querySelector('#result').textContent = player + ' wins!';
  }
}
function checkDraw() {
    var emptyCells = 0;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          emptyCells++;
        }
      }
    }
    if (emptyCells === 0 && !gameOver) {
      gameOver = true;
      document.querySelector('#result').textContent = 'It\'s a draw!';
    }
  }

  