let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const thumbnails = document.querySelectorAll('.thumbnails .thumb');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function goToSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Inicializar el slider
showSlide(slideIndex);

// Configurar los botones
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Configurar las miniaturas
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => goToSlide(index));
});

// Eliminar el intervalo automático
// setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
