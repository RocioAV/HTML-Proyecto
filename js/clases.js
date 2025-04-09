
document.addEventListener('DOMContentLoaded', function() {
    // Activar modo oscuro (igual que en index.html)
    
    // Smooth scroll para horarios
    const scheduleItems = document.querySelectorAll('.schedule-row .class');
    scheduleItems.forEach(item => {
        item.addEventListener('click', function() {
            const classType = this.classList[1];
            document.getElementById(classType).checked = true;
            
            // Scroll suave a la galería
            document.querySelector('.classes-gallery').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Snap scrolling para la galería
    const gallery = document.querySelector('.classes-gallery');
    if ('scrollSnapType' in document.documentElement.style) {
        gallery.style.scrollSnapType = 'y proximity';
        gallery.style.scrollPadding = '60px 0 0 0';
        
        const cards = document.querySelectorAll('.class-card');
        cards.forEach(card => {
            card.style.scrollSnapAlign = 'start';
        });
    }
});