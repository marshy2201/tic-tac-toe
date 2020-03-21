class Player {
  constructor(name, id, symbolType, active) {
    this.name = name;
    this.id = id;
    this.symbolType = symbolType;
    this.active = active;
    this.symbols = [];
  }

  /**
   * Create SVG symbol
   * @param {Object} e 
   */
  createSymbol(e) {
    const symbol = new Symbol(this.symbolType, e.target.id);
    
    this.symbols.push(symbol);

    return symbol.drawSvgSymbol();
  }
}