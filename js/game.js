class Game {
  constructor() {
    this.board = new Board();
    this.ready = false;
  }

  /** 
   * Initializes game. 
   */
  startGame() {
    // Hide begin wrapper and stop snowfall animation
    document.getElementById('begin-game-wrapper').style.display = 'none';
    $.snowfall.stop();

    // animate board
    $('#board-wrapper').animate({ opacity: 1 }, 750);

    this.board.drawHTMLBoard();
  }
}