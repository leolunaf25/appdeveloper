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

// Código para mejorar la experiencia de scroll horizontal de imágenes

document.addEventListener("DOMContentLoaded", function() {
    // Aplicar a todos los contenedores de scroll
    const scrollWrappers = document.querySelectorAll('.scroll_wrapper');
    
    scrollWrappers.forEach(wrapper => {
      // Detectar cuando el mouse está sobre el contenedor
      wrapper.addEventListener('mouseenter', function() {
        this.style.cursor = 'grab';
      });
      
      // Variables para el scroll con arrastre
      let isDown = false;
      let startX;
      let scrollLeft;
      
      // Mouse presionado
      wrapper.addEventListener('mousedown', function(e) {
        isDown = true;
        this.style.cursor = 'grabbing';
        startX = e.pageX - this.offsetLeft;
        scrollLeft = this.scrollLeft;
        e.preventDefault();
      });
      
      // Mouse suelta
      wrapper.addEventListener('mouseup', function() {
        isDown = false;
        this.style.cursor = 'grab';
      });
      
      // Mouse sale del área
      wrapper.addEventListener('mouseleave', function() {
        isDown = false;
      });
      
      // Mouse se mueve mientras está presionado
      wrapper.addEventListener('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - this.offsetLeft;
        const walk = (x - startX) * 2; // Velocidad de scroll * 2
        this.scrollLeft = scrollLeft - walk;
      });
      
      // Tratar de prevenir el scroll vertical cuando se hace scroll horizontal
      wrapper.addEventListener('wheel', function(e) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          this.scrollLeft += e.deltaX;
        }
      }, { passive: false });
    });
    
    // Función para mostrar u ocultar indicadores de scroll
    function updateScrollIndicators() {
      scrollWrappers.forEach(wrapper => {
        // Verificar si hay scroll horizontal
        if (wrapper.scrollWidth > wrapper.clientWidth) {
          wrapper.classList.add('has-scroll');
        } else {
          wrapper.classList.remove('has-scroll');
        }
      });
    }
    
    // Actualizar indicadores al cargar y redimensionar
    updateScrollIndicators();
    window.addEventListener('resize', updateScrollIndicators);
    
    // Función para ajustar alturas de imágenes basado en el contenido
    function adjustImageHeights() {
      const projectSections = document.querySelectorAll('.presentation_container');
      
      projectSections.forEach(section => {
        const imageContainer = section.querySelector('.header_image_one');
        const textContainer = section.querySelector('.header_main');
        
        if (imageContainer && textContainer && window.innerWidth > 768) {
          // En pantallas grandes, intentar igualar alturas
          const textHeight = textContainer.offsetHeight;
          if (textHeight > 400) {
            imageContainer.style.minHeight = textHeight + 'px';
          }
        }
      });
    }
    
    // Ejecutar ajuste después de cargar todas las imágenes
    window.addEventListener('load', adjustImageHeights);
    window.addEventListener('resize', adjustImageHeights);
  });

