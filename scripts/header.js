const header  = document.querySelector("header");
const body = document.querySelector("body");

function headerBehavior() {
  let scroll = window.scrollY;

  if (scroll > 0) {
    header.style.display = "none";

  }
}