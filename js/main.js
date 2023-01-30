const playMario = document.getElementById("playMario");
const playLuigi = document.getElementById("playLuigi");

const soundMario = new Audio("../assets/audio/mario.mp3");
const soundLuigi = new Audio("../assets/audio/luigi.mp3");

playMario.addEventListener("click", () => {
  soundMario.play();
});

playLuigi.addEventListener("click", () => {
  soundLuigi.play();
});
