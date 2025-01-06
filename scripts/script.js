function toggleDarkMode() {
    const body = document.body;
    const toggleImage = document.querySelector('.dark-mode-toggle');
    const githubLogo = document.querySelector('.github-logo'); 

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleImage.src = "images/sun.png"; 
        toggleImage.alt = 'Modo Claro';
        githubLogo.src = "images/github-mark-white.png"; 
        githubLogo.alt = 'GitHub - Modo Oscuro';
    } else {
        toggleImage.src = "images/moon.png"; 
        toggleImage.alt = 'Modo Oscuro';
        githubLogo.src = "images/github-mark.png"; 
        githubLogo.alt = 'GitHub - Modo Claro';
    }
}


// Desactivar el menú contextual en el video
document.getElementById('miVideo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

const sliders = document.querySelectorAll('.slider');
let slideIntervals = [];

sliders.forEach((slider, index) => {
    slider.setAttribute('data-slide-index', index);
    showSlide(index, 0);
    startAutoSlide(index);
});

function showSlide(sliderIndex, slideIndex) {
    const slides = sliders[sliderIndex].querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
    sliders[sliderIndex].setAttribute('data-current-slide', slideIndex);

    const dots = sliders[sliderIndex].nextElementSibling.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function changeSlide(direction, sliderIndex) {
    const slides = sliders[sliderIndex].querySelectorAll('.slide');
    let currentIndex = parseInt(sliders[sliderIndex].getAttribute('data-current-slide'));
    let newIndex = (currentIndex + direction + slides.length) % slides.length;
    showSlide(sliderIndex, newIndex);
}

function currentSlide(slideIndex, sliderIndex) {
    showSlide(sliderIndex, slideIndex);
}

function startAutoSlide(sliderIndex) {
    slideIntervals[sliderIndex] = setInterval(() => {
        changeSlide(1, sliderIndex);
    }, 4000); // Cambiar cada 4 segundos
}

function stopAutoSlide(sliderIndex) {
    clearInterval(slideIntervals[sliderIndex]);
}

const projects = document.querySelectorAll('.project');
projects.forEach((project, projectIndex) => {
    project.addEventListener('mouseenter', () => {
        const slider = project.querySelector('.slider');
        const sliderIndex = parseInt(slider.getAttribute('data-slide-index'));
        stopAutoSlide(sliderIndex);
    });
    project.addEventListener('mouseleave', () => {
        const slider = project.querySelector('.slider');
        const sliderIndex = parseInt(slider.getAttribute('data-slide-index'));
        startAutoSlide(sliderIndex);
    });
});
