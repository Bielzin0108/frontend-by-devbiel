// Pequenos controles deixam o demo de animação mais interativo.
const pauseButton = document.querySelector("#pauseButton");
const speedButton = document.querySelector("#speedButton");

pauseButton.addEventListener("click", () => {
  const paused = document.body.classList.toggle("paused");
  pauseButton.textContent = paused ? "Reproduzir" : "Pausar";
});

speedButton.addEventListener("click", () => {
  const fast = document.body.classList.toggle("fast");
  speedButton.textContent = fast ? "Normal" : "Rápido";
});
