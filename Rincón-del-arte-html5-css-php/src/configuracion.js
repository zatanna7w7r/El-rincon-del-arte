document.addEventListener('DOMContentLoaded', () => {
    const modoRadios = document.querySelectorAll('input[name="modo"]');
    
    modoRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.body.classList.toggle('dark-mode', e.target.value === 'oscuro');
        });
    });
});