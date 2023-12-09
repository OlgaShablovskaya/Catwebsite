let answersSubmitted = false; 

function checkAnswers() {
    if (answersSubmitted) {
        return; 
    }

    answersSubmitted = true; 

    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const inputElements = question.querySelectorAll('input');
        inputElements.forEach(input => {
            input.disabled = true;
        });

        const feedback = question.querySelector('.feedback');
        feedback.textContent = '';

        const correctAnswer = question.dataset.correct;
        const selectedAnswer = question.querySelector('input:checked');

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                question.classList.add('correct');
                feedback.textContent = 'Верно';
            } else {
                question.classList.add('incorrect');
                feedback.textContent = 'Не верно';
            }
        } else {
            question.classList.add('incorrect');
            feedback.textContent = 'Не выбран ответ';
        }

        feedback.style.opacity = 1;
    });

    if (allAnswersCorrect()) {
        alert('Все ответы правильные!');
    }
}

function resetAnswers() {
    answersSubmitted = false; 
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const inputElements = question.querySelectorAll('input');
        inputElements.forEach(input => {
            input.disabled = false;
            input.checked = false;
        });

        const feedback = question.querySelector('.feedback');
        feedback.textContent = '';

        question.classList.remove('correct', 'incorrect');
    });
}

function allAnswersCorrect() {
    const questions = document.querySelectorAll('.question');
    return Array.from(questions).every(question => question.classList.contains('correct'));
}
