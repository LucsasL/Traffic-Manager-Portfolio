function backgroundChange() {
  // const background = document.querySelector("body");
  const letter = document.querySelector("p");
  const buttonBg = document
    .querySelector("div#bgcolor")
    .addEventListener("click");

  if (document.body.style.background == "#fff") {
    document.body.style.background = "#000";
    // letter.style.color = "#fff";
    // buttonBg.style.background = "#0f0";
    
  } else {
    document.body.style.background = "#fff";
    // letter.style.color = "#000";
  }
}
