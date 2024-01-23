const cursor = document.querySelector("div#cursorCircle");
const blocks = document.querySelector("div.promises");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;

  if (posX == blocks.clientX && posY == blocks.clientX) {
    e.style.display = "block";
  }
})