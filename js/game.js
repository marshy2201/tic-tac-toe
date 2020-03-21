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
    const targetIsSpace = e.target.id.includes('space'); // check if target has an id including "space"
    const targetNextSibling = !e.target.nextElementSibling; // check if the target has a next sibling, this is to stop adding a nought or cross ovrlaying

    if (game.ready && targetIsSpace && targetNextSibling) {
      const symbol = this.activePlayer.createSymbol(e);
      
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
    if (this.checkForWin()) {
      this.endGame()
    } else {
      this.switchPlayers();
    }
  }

  /**
   * Check if the active player has won returning a boolean
   */
  checkForWin() {
    const x = this.activePlayer.symbols.map(symbol => symbol.x);
    const y = this.activePlayer.symbols.map(symbol => symbol.y);

    // check horizontal & vertical wins
    for (let i = 0; i < 3; i++) {
      if (x.filter(number => number === i).length === 3) return true;
      if (y.filter(number => number === i).length === 3) return true;
    }

    // check diagonal wins
    if (this.activePlayer.symbols.filter(symbol => symbol.x === symbol.y).length === 3) return true;
    
    const diagonalTopRightBottomLeft = this.activePlayer.symbols.filter(symbol => {
      return (symbol.y === 2 && symbol.x === 0) ||
             (symbol.y === 1 && symbol.x === 1) ||
             (symbol.y === 0 && symbol.x === 2)   
    });

    if (diagonalTopRightBottomLeft.length === 3) return true;

    return false;
  }

  /**
   * End Game
   */
  endGame() {
    game.ready = false;

    document.querySelector('#game-over h3').textContent = `${this.activePlayer.name} Wins!`;
    document.getElementById('game-over').style.display = "block";
  }

  /**
   * Reset Game
   */
  resetGame() {
    // hide game-over element
    document.getElementById('game-over').style.display = "none";

    // remove g elements that where created
    const groups = document.querySelectorAll('svg > g > g');
    
    for (let i = 0; i < groups.length; i++) {
      document.querySelector('svg > g').removeChild(groups[i]);
    }

    // Create new Game
    game = new Game();
    game.startGame();
  }
}