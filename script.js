let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementById('gameBoard').children[index].innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkResult() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      document.getElementById('result').innerText = `Player ${gameBoard[a]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    document.getElementById('result').innerText = 'It\'s a tie!';
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('result').innerText = '';
  const cells = document.getElementById('gameBoard').children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
