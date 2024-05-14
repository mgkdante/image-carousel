const buttons = document.querySelectorAll("[data-carousel-button]");
const sliderPointers = document.querySelector("[data-pointer-slides]");
const slides = document.querySelector("[data-slides]");
let newIndex;

[...slides.children].forEach(() => {
  const sliderPointer = document.createElement("div");
  sliderPointer.classList.add("slide-index");
  sliderPointers.appendChild(sliderPointer);
});

sliderPointers.children[0].setAttribute("data-active", "");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const activeSlide = slides.querySelector("[data-active]");
    const activePointer = sliderPointers.querySelector("[data-active]");
    newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    sliderPointers.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activePointer.dataset.active;
  });
});

[...sliderPointers.children].forEach((pointer, index) => {
  pointer.addEventListener("click", () => {
    const activeSlide = slides.querySelector("[data-active]");
    const activePointer = sliderPointers.querySelector("[data-active]");
    newIndex = index;
    slides.children[newIndex].dataset.active = true;
    sliderPointers.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activePointer.dataset.active;
  });
});
