const menuTogle = document.querySelector('.menu-togle input');
const nav = document.querySelector('nav ul');

menuTogle.addEventListener('click', function () {
  nav.classList.toggle('open');
});

// GALLERY SLIDER

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () =>{
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")


    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
});

// WHATSAPP API
function wa() {
  location.assign('https://wa.me/6283845562342?text=website%20nya%20bagus%20po.%20inpo%20tutor%20buat%20website%20kek%20gini%20dong');
}








