const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// creating a rectangle ---------------------
ctx.fillStyle = "yellow";
ctx.fillRect(10, 10, 100, 100);

// resizing the window affects the rectangle dimensions, the fix --------------
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "yellow";
  ctx.fillRect(10, 10, 100, 20);
});

// creating a circle ----------------------------
ctx.fillStyle = "green";
ctx.strokeStyle = "red";
ctx.lineWidth = 10;

ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// draw effect ----------------------------

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

function drawCircle(x, y) {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // to clean the canvas
  drawCircle(mouse.x, mouse.y);
  requestAnimationFrame(animate);
}
animate();
