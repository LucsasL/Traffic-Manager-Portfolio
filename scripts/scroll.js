const scrollAnimation = document.querySelector("div.scroll-anim");
let scrollPos = window.scrollY;
let scrolled = false;

document.addEventListener("scroll", () => {
  if (scrollPos > 0) {
    scrolled = true;
  }

  if (scrolled) {
    scrollAnimation.style.display = "none";
  }
})