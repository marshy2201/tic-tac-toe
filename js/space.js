class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `space-${y}-${x}`;
    this.used = false;
  }

  /*
   * Create and render SVG space
   */
  drawSVGSpace() {
    const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const svgSpace = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    svgGroup.setAttributeNS(null, "transform", `translate(${this.y * 100}, ${this.x * 100})`);

    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "height", 100);
    svgSpace.setAttributeNS(null, "width", 100);
    svgSpace.setAttributeNS(null, "fill", "transparent");

    svgGroup.appendChild(svgSpace);
    document.querySelector('svg > g').appendChild(svgGroup);
  }
}
