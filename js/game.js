class Game {
  constructor() {
    this.board = new Board();
    this.ready = false;
  }
  
  /**
   * Return active player
   * @return {Object} the active player
   */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /** 
   * Initializes game. 
   */
  startGame() {
    // create players
    this.players = this.createPlayers();

    // Hide begin wrapper and stop snowfall animation
    document.getElementById('begin-game-wrapper').style.display = 'none';
    $.snowfall.stop();

    // animate board
    $('#board-wrapper').animate({ opacity: 1 }, 750);

    this.board.drawHTMLBoard();

    this.ready = true;
  }

  /**
   * Check if game is ready and event target has an id including the word `space`
   * @param {Object} e 
   */
  handleClick(e) {
    if (game.ready && e.target.id.includes('space')) {
      const symbol = this.activePlayer.createSymbol();
      
      this.playSymbol(symbol, e);
    }
  }

  /**
   * Create 2 Players
   */
  createPlayers() {
    return [
      new Player("Player 1", "player-1", "X", true),
      new Player("Player 2", "player-2", "O", false)
    ];
  }

  /**
   * find event parent element and append symbol to it
   * @param {Object} symbol 
   * @param {Object} e 
   */
  playSymbol(symbol, e) {
    // get g svg element
    const { parentElement } = e.target;
    
    // append symbol to parent g svg element
    parentElement.appendChild(symbol);

    this.updateGameState();
  }

  /**
   * Toggle players active boolean
   */
  switchPlayers() {
    this.players.forEach(player => player.active = player.active ? false : true);
  }

  /**
   * Updates game state after symbol has been added to the board
   */
  updateGameState() {
    this.switchPlayers();
  }
}