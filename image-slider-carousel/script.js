// Carrossel com pontos, setas, suporte ao teclado e reprodução automática simples.
const slides = document.querySelector("#slides");
const slideItems = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const dotsContainer = document.querySelector("#dots");
let currentIndex = 0;
let autoplayId;

function renderDots() {
  dotsContainer.innerHTML = "";

  slideItems.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.append(dot);
  });
}

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  slideItems.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
  });

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = (index + slideItems.length) % slideItems.length;
  updateCarousel();
  restartAutoplay();
}

function restartAutoplay() {
  clearInterval(autoplayId);
  autoplayId = setInterval(() => goToSlide(currentIndex + 1), 4200);
}

prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    goToSlide(currentIndex - 1);
  }

  if (event.key === "ArrowRight") {
    goToSlide(currentIndex + 1);
  }
});

renderDots();
updateCarousel();
restartAutoplay();
