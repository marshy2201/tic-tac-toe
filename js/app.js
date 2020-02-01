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
const game = new Game();

/**
 * Listen for click on `#start-game` and class startGame on game object
 */
const startButton = document.getElementById('start-game');

startButton.addEventListener('click', () => {
  game.startGame();
});

/**
 * Listen for clicks on the board 
 */
document.addEventListener('click', e => game.handleClick(e));
