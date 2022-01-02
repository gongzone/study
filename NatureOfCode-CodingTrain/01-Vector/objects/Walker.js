class Walker {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

    this.update();
  }
  update() {
    this.x += Math.random() * (Math.random() >= 0.5 ? 1 : -1);
    this.y += Math.random() * (Math.random() >= 0.5 ? 1 : -1);
  }
}

export default Walker;
