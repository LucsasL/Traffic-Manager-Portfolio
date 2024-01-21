const musicButton = document.querySelector("input#music");
const audioPlayer = document.querySelector("audio#player");

function musicControl(musicName) {
  let music = new Audio(musicName);
  music.loop = true;
  music.controls;

  musicButton.addEventListener("click", function () {
    if (musicButton.checked == false) {
      music.pause();

    }
  })
}