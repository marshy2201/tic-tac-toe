class Board {
  constructor() {
    this.rows = 3;
    this.columns = 3;
    this.spaces = this.createSpaces();
  }

  /**
   * Generate 2D array of spaces.
   * @return {Array} An array of space objects
   */
  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++) {
      const column = [];

      for (let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }

      spaces.push(column);
    }

    return spaces;
  }

  /*
   * Render all SVG spaces 
   */
  drawHTMLBoard() {
    for (let x = 0; x < this.spaces.length; x++) {
      for (let y = 0; y < this.spaces[x].length; y++) {
        this.spaces[x][y].drawSVGSpace();
      }
    }
  }
}