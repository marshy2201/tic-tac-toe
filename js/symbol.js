class Symbol {
  constructor(type, id) {
    this.type = type;
    this.x = parseInt(id.charAt(8));
    this.y = parseInt(id.charAt(6));
  }

  /**
   * Create SVG g element
   * Create a nought or cross symbol depending on the type
   */
  drawSvgSymbol() {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttributeNS(null, 'transform', 'translate(50, 50)');

    if (this.type === "X") {
      const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line1.setAttributeNS(null, 'x1', -20);
      line1.setAttributeNS(null, 'y1', -20);
      line1.setAttributeNS(null, 'x2', 20);
      line1.setAttributeNS(null, 'y2', 20);
      line1.setAttributeNS(null, 'stroke', '#FA7132');

      const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line2.setAttributeNS(null, 'x1', -20);
      line2.setAttributeNS(null, 'y1', 20);
      line2.setAttributeNS(null, 'x2', 20);
      line2.setAttributeNS(null, 'y2', -20);
      line2.setAttributeNS(null, 'stroke', '#FA7132');

      group.appendChild(line1);
      group.appendChild(line2);

      return group;
    } else {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

      circle.setAttributeNS(null, 'r', 20);
      circle.setAttributeNS(null, 'stroke', '#32BBFA');

      group.appendChild(circle);

      return group;
    }
  }
}