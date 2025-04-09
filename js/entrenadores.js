document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(level => {
        const porcentaje = level.getAttribute('data-level');
        level.style.width = porcentaje + '%';
    });
});
