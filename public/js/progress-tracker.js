document.addEventListener('DOMContentLoaded', () => {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    const userId = localStorage.getItem('userId');

    if (userId) {
        fetch(`/user/progress?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                Object.assign(progress, data.progress || {});
                localStorage.setItem('progress', JSON.stringify(progress));
                showProgress();
            });
    }

    function updateProgress(tema) {
        progress[tema] = true;
        localStorage.setItem('progress', JSON.stringify(progress));

        if (userId) {
            fetch('/user/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, progress })
            });
        }

        showProgress();
    }

    function showProgress() {
        const temas = document.querySelectorAll('.card-title');
        const progressBar = document.getElementById('progress-bar');

        let completed = 0;
        temas.forEach(tema => {
            if (progress[tema.textContent]) {
                tema.innerHTML += ' ✔';
                completed++;
            }
        });

        if (progressBar) {
            const total = temas.length;
            const percentage = (completed / total) * 100;
            progressBar.style.width = `${percentage}%`;
            progressBar.textContent = `${Math.round(percentage)}%`;
        }
    }

    showProgress();
});