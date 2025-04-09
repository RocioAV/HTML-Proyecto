document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const modalCloseBtns = document.querySelectorAll('.modal-close, .modal-close-btn');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    // Contador de caracteres para el textarea
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            charCount.textContent = this.value.length;
            
            if (this.value.length > 500) {
                this.value = this.value.substring(0, 500);
                charCount.textContent = 500;
            }
        });
    }

    // Envío del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.spinner');
            
            // Mostrar spinner y deshabilitar botón
            btnText.textContent = 'Enviando...';
            spinner.classList.remove('hidden');
            submitBtn.disabled = true;
            
            // Simular envío (en un caso real sería una petición AJAX)
            setTimeout(function() {
                // Ocultar spinner y mostrar modal
                spinner.classList.add('hidden');
                btnText.textContent = 'Enviar mensaje';
                submitBtn.disabled = false;
                
                // Mostrar modal de confirmación
                confirmationModal.classList.add('active');
                
                // Resetear formulario
                contactForm.reset();
                charCount.textContent = '0';
            }, 2000);
        });
    }

    // Cerrar modal
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            confirmationModal.classList.remove('active');
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    confirmationModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });

    // Validación personalizada para el campo de teléfono
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Permitir solo números, espacios, + y -
            this.value = this.value.replace(/[^0-9\s+-]/g, '');
        });
    }
});