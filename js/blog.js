document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal para los artículos y comentarios
    const scrollRevealElements = document.querySelectorAll('[data-scroll-reveal]');
    
    const revealOnScroll = function() {
        scrollRevealElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    // Comprobar elementos visibles al cargar
    revealOnScroll();
    
    // Y al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Sistema de respuestas a comentarios
    const replyButtons = document.querySelectorAll('.comment-reply');
    
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const replyForm = this.closest('.comment-content').querySelector('.comment-reply-form');
            replyForm.classList.toggle('active');
        });
    });
    
    // Sistema de avatares con iniciales
    const avatarContainers = document.querySelectorAll('[data-initial]');
    
    avatarContainers.forEach(container => {
        const initials = container.getAttribute('data-initial');
        container.textContent = initials;
    });
    
    // Filtrado de artículos (ya funciona con CSS, esto es para mejor UX)
    const filterInputs = document.querySelectorAll('.filter-group input');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Scroll suave al grid de artículos
            document.querySelector('.blog-grid').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});