const music = document.getElementById("bg-music");
const btn = document.querySelector(".music-btn");

// Toggle manual
function toggleMusic() {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸️ Pause Music";
  } else {
    music.pause();
    btn.textContent = "▶️ Play Music";
  }
}

// First interaction auto play
document.addEventListener("click", function firstClick() {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸️ Pause Music";
  }
  document.removeEventListener("click", firstClick);
});