// Validação simples no navegador para o formulário de login.
const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");
const successMessage = document.querySelector("#successMessage");

function showError(input, message) {
  const field = input.closest(".field");
  const error = field.querySelector(".error-message");

  field.classList.add("invalid");
  error.textContent = message;
}

function clearError(input) {
  const field = input.closest(".field");
  const error = field.querySelector(".error-message");

  field.classList.remove("invalid");
  error.textContent = "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  let isValid = true;

  if (!email) {
    showError(emailInput, "O e-mail é obrigatório.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError(emailInput, "Informe um endereço de e-mail válido.");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (!password) {
    showError(passwordInput, "A senha é obrigatória.");
    isValid = false;
  } else if (password.length < 6) {
    showError(passwordInput, "A senha deve ter pelo menos 6 caracteres.");
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  if (isValid) {
    successMessage.textContent = "Tudo certo! Seus dados de login parecem bons.";
    form.reset();
  }
});

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Ocultar" : "Mostrar";
});

[emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => clearError(input));
});
