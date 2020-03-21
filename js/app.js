/**
 * Begin noughts and crosses snowfall animation
 */
$.snowfall.start({
  size: {
    min: 30,
    max: 45
  },
  interval: 200
}); 

// New game class
let game = new Game();

/**
 * Listen for click on `#start-game`
 */
const startButton = document.getElementById('start-game');

startButton.addEventListener('click', () => {
  game.startGame();
});

/**
 * Listen for clicks on the board 
 */
document.addEventListener('click', e => game.handleClick(e));

/**
 * Listen for click on `#play-again`
 */
const playAgainButton = document.getElementById('play-again');

playAgainButton.addEventListener('click', () => game.resetGame());
