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
