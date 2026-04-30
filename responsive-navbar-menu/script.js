// Alternância da navegação mobile com estado acessível.
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

function closeMenu() {
  menuToggle.classList.remove("active");
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 760) {
    closeMenu();
  }
});
