// Validação leve do formulário de cadastro com mensagens úteis.
const form = document.querySelector("#signupForm");
const fields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  confirmPassword: document.querySelector("#confirmPassword")
};
const terms = document.querySelector("#terms");
const termsError = document.querySelector("#termsError");
const result = document.querySelector("#result");

function setFieldError(input, message) {
  const field = input.closest(".field");
  field.classList.add("invalid");
  field.querySelector(".error").textContent = message;
}

function clearFieldError(input) {
  const field = input.closest(".field");
  field.classList.remove("invalid");
  field.querySelector(".error").textContent = "";
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = "";
  termsError.textContent = "";

  let valid = true;
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const password = fields.password.value;
  const confirmPassword = fields.confirmPassword.value;

  if (name.length < 2) {
    setFieldError(fields.name, "Informe seu nome completo.");
    valid = false;
  } else {
    clearFieldError(fields.name);
  }

  if (!validEmail(email)) {
    setFieldError(fields.email, "Informe um e-mail válido.");
    valid = false;
  } else {
    clearFieldError(fields.email);
  }

  if (password.length < 8) {
    setFieldError(fields.password, "Use pelo menos 8 caracteres.");
    valid = false;
  } else {
    clearFieldError(fields.password);
  }

  if (confirmPassword !== password || !confirmPassword) {
    setFieldError(fields.confirmPassword, "As senhas precisam ser iguais.");
    valid = false;
  } else {
    clearFieldError(fields.confirmPassword);
  }

  if (!terms.checked) {
    termsError.textContent = "Aceite os termos para continuar.";
    valid = false;
  }

  if (valid) {
    result.textContent = "Conta criada com sucesso.";
    form.reset();
  }
});

Object.values(fields).forEach((input) => {
  input.addEventListener("input", () => clearFieldError(input));
});

terms.addEventListener("change", () => {
  termsError.textContent = "";
});
