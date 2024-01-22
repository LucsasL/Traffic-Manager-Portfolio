const navMenu = document.querySelector("menu");
const menuButton = document.querySelector("div#menuButton")

function menu() {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "block";

  } else {
    navMenu.style.display = "none";

  }
}

function menuBehavior() {
  if (window.innerWidth <= 768) {
    navMenu.style.display = "none";
    menuButton.style.display = "block";

  } else {
    navMenu.style.display = "block";
      
  }
}