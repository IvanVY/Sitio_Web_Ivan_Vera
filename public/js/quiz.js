// public/js/quiz.js
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm && quizResult) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const answers = {
                q1: 'b', // Respuesta correcta para la pregunta 1
                q2: 'b', // Respuesta correcta para la pregunta 2
            };

            let score = 0;
            const formData = new FormData(quizForm);

            for (const [question, answer] of formData.entries()) {
                if (answer === answers[question]) {
                    score++;
                }
            }

            const result = `Obtuviste ${score} de ${Object.keys(answers).length} respuestas correctas.`;
            quizResult.textContent = result;
        });
    }
});