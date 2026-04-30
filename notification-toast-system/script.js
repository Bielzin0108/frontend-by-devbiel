// Criador de notificações reutilizável com texto por tipo e fechamento automático.
const toastStack = document.querySelector("#toastStack");
const toastButtons = document.querySelectorAll("[data-toast]");

const toastContent = {
  success: {
    title: "Salvo com sucesso",
    message: "Suas alterações já estão no ar.",
    icon: "S"
  },
  info: {
    title: "Nova atualização",
    message: "Uma nova versão está pronta para revisar.",
    icon: "I"
  },
  warning: {
    title: "Quase cheio",
    message: "O armazenamento está perto do limite do plano.",
    icon: "W"
  },
  error: {
    title: "Ação falhou",
    message: "Tente novamente em instantes.",
    icon: "E"
  }
};

function removeToast(toast) {
  toast.classList.add("hide");
  toast.addEventListener("animationend", () => toast.remove(), { once: true });
}

function createToast(type) {
  const data = toastContent[type];
  const toast = document.createElement("article");

  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${data.icon}</span>
    <div>
      <strong>${data.title}</strong>
      <p>${data.message}</p>
    </div>
    <button class="toast-close" type="button" aria-label="Fechar notificação">x</button>
    <span class="toast-progress"></span>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => removeToast(toast));
  toastStack.append(toast);

  setTimeout(() => {
    if (toast.isConnected) {
      removeToast(toast);
    }
  }, 3600);
}

toastButtons.forEach((button) => {
  button.addEventListener("click", () => createToast(button.dataset.toast));
});
