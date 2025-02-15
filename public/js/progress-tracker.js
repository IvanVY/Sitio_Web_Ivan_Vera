document.addEventListener('DOMContentLoaded', () => {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};

    // Actualizar el progreso al completar un tema
    function updateProgress(tema) {
        progress[tema] = true;
        localStorage.setItem('progress', JSON.stringify(progress));
    }

    // Mostrar el progreso en la página
    function showProgress() {
        const temas = document.querySelectorAll('.card-title');
        temas.forEach(tema => {
            if (progress[tema.textContent]) {
                tema.innerHTML += ' ✅';
            }
        });
    }

    showProgress();
});