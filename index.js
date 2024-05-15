const carousel = document.querySelector("[data-carousel]");
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".slide-indicators");
let currentSlide = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
    indicatorsContainer.children[index].classList.toggle(
      "active",
      index === currentSlide,
    );
  });
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  updateCarousel();
}

carousel.addEventListener("click", (event) => {
  if (event.target.matches("[data-carousel-button]")) {
    const direction = event.target.dataset.carouselButton === "next" ? 1 : -1;
    goToSlide(currentSlide + direction);
  } else if (event.target.matches(".slide-indicator")) {
    goToSlide(Array.from(indicatorsContainer.children).indexOf(event.target));
  }
});

slides.forEach((_, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("slide-indicator");
  indicator.addEventListener("click", () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

updateCarousel(); // Initialize
