// Adiciona uma pequena inclinação 3D no movimento do ponteiro e reinicia ao sair.
const cards = document.querySelectorAll(".feature-card");

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / rect.height) * 8);

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  });
});
