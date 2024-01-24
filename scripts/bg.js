document.addEventListener("click", () => {
  const bg = document.querySelector("body");
  const checkBox = document.querySelector("input#bgButton");

  if (checkBox.checked) {
    bg.style.backgroundColor = "var(--bgWhite)";

  } else {
    bg.style.backgroundColor = "var(--bg)";
  }
})