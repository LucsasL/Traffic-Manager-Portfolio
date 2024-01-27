const checkBox = document.querySelector("input#bgButton");
const introImg = document.querySelector("section#intro");
const curvePath = document.querySelector("img.curves");

checkBox.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (introImg.style.background == "url('../img/pattern.png') no-repeat center") {
    introImg.style.background = "url('../img/pattern-light.png') no-repeat center";

  } else {
    introImg.style.background = "url('../img/pattern.png') no-repeat center";
  }  
}