window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleDarkMode() {
    const body = document.body;
    const toggleImage = document.querySelector('.btnMode');
    const unityLogo = document.querySelector('.unity_logo')
    const githubLogo = document.querySelector('.github-logo'); 

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleImage.src = "images/sun.png"; 
        toggleImage.alt = 'Modo Claro';
        unityLogo.src = "images/Unity_dark.svg"
        githubLogo.src = "images/github-mark-white.png"; 
        githubLogo.alt = 'GitHub - Modo Oscuro';
    } else {
        toggleImage.src = "images/moon.png"; 
        toggleImage.alt = 'Modo Oscuro';
        unityLogo.src = "images/Unity_light.svg"
        githubLogo.src = "images/github-mark.png"; 
        githubLogo.alt = 'GitHub - Modo Claro';
    }
}

//Scroll
document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.querySelector('.items');
    const scroller = document.querySelector('.scroller');

    // Clonamos los elementos para mantener el flujo sin cortes
    const clone = itemsContainer.cloneNode(true);
    scroller.appendChild(clone);

    let speed = 0.5; // Control de velocidad (ajustable)
    let position = 0;

    function animate() {
        position -= speed;
        scroller.style.transform = `translateX(${position}px)`;

        // Reiniciar scroll cuando todos los elementos han salido completamente
        if (Math.abs(position) >= itemsContainer.scrollWidth) {
            position = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
});

