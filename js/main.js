let soundMario = new Audio("../assets/audio/mario.mp3");
let soundLuigi = new Audio("../assets/audio/luigi.mp3");

playMario.addEventListener("click", () => {
  soundMario.play();
});

playLuigi.addEventListener("click", () => {
  soundLuigi.play();
});
