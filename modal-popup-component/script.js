// Comportamento do modal: clique, overlay e fechamento com a tecla Escape.
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const cancelModal = document.querySelector("#cancelModal");
const backdrop = document.querySelector("#modalBackdrop");

function showModal() {
  backdrop.hidden = false;
  closeModal.focus();
}

function hideModal() {
  backdrop.hidden = true;
  openModal.focus();
}

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
cancelModal.addEventListener("click", hideModal);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    hideModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !backdrop.hidden) {
    hideModal();
  }
});
