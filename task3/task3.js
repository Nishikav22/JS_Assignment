let slides = document.querySelectorAll(".slide");
let index = 0;
let interval;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto slide every 3 seconds
function startSlideshow() {
    interval = setInterval(nextSlide, 3000);
}

function stopSlideshow() {
    clearInterval(interval);
}

startSlideshow();

// Pause on hover
document.querySelector(".carousel-container").addEventListener("mouseenter", stopSlideshow);
document.querySelector(".carousel-container").addEventListener("mouseleave", startSlideshow);
