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
