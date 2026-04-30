// Salva o tema escolhido para o exemplo parecer um componente real.
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.setAttribute("aria-label", "Mudar para modo claro");
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.setAttribute("aria-label", isDark ? "Mudar para modo claro" : "Mudar para modo escuro");
});
