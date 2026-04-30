// Cria uma pequena ondulação onde o usuário clica no botão.
const rippleButton = document.querySelector("#rippleButton");

rippleButton.addEventListener("click", (event) => {
  const dot = document.createElement("span");
  const bounds = rippleButton.getBoundingClientRect();

  dot.className = "ripple-dot";
  dot.style.left = `${event.clientX - bounds.left}px`;
  dot.style.top = `${event.clientY - bounds.top}px`;

  rippleButton.append(dot);
  dot.addEventListener("animationend", () => dot.remove());
});
