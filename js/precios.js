document.addEventListener('DOMContentLoaded', function() {
    // Toggle entre precios mensuales/anuales
    const pricingToggle = document.getElementById('pricingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Mostrar precios anuales
                monthlyPrices.forEach(price => {
                    price.classList.add('hidden');
                });
                yearlyPrices.forEach(price => {
                    price.classList.remove('hidden');
                });
            } else {
                // Mostrar precios mensuales
                yearlyPrices.forEach(price => {
                    price.classList.add('hidden');
                });
                monthlyPrices.forEach(price => {
                    price.classList.remove('hidden');
                });
            }
        });
    }
    
    // Efecto de hover en las tarjetas de precios
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Tooltips para móviles (touch devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
    
    if (isTouchDevice) {
        const featuresItems = document.querySelectorAll('.pricing-features li');
        
        featuresItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Evitar que se active si se hace clic en un enlace
                if (e.target.tagName === 'A') return;
                
                // Cerrar tooltips abiertos
                document.querySelectorAll('.tooltip.active').forEach(tooltip => {
                    if (tooltip !== this.querySelector('.tooltip')) {
                        tooltip.classList.remove('active');
                    }
                });
                
                // Alternar tooltip actual
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.classList.toggle('active');
                }
            });
        });
        
        // Cerrar tooltips al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.pricing-features li')) {
                document.querySelectorAll('.tooltip.active').forEach(tooltip => {
                    tooltip.classList.remove('active');
                });
            }
        });
    }
});
