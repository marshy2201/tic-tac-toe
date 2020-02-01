class Player {
  constructor(name, id, symbol, active) {
    this.name = name;
    this.id = id;
    this.symbol = symbol;
    this.active = active;
  }

  /**
   * Create SVG symbol
   * @param {Object} e 
   */
  createSymbol() {
    const symbol = new Symbol(this.symbol);
    return symbol.drawSvgSymbol();
  }
}