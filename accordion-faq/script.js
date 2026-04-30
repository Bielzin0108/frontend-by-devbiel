// Comportamento do acordeão com apenas um item aberto por vez.
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const trigger = item.querySelector(".accordion-trigger");

  trigger.addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");

    accordionItems.forEach((currentItem) => {
      currentItem.classList.remove("open");
      currentItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});
