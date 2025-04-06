document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('theme-toggle');
    const body = document.body;

    toggleTheme.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Restaurar tema guardado
    const temaGuardado = localStorage.getItem('theme');
    if (temaGuardado === 'dark') {
        body.classList.add('dark-mode');
    }
});

// DONE