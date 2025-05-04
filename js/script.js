/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Тест на виявлення рівня
    const startTestBtn = document.getElementById('start-test-btn');
    const testContainer = document.getElementById('test-container');
    const testResult = document.getElementById('test-result');
    const resultLevelSpan = document.getElementById('result-level');
    const resultRecommendationParagraph = document.getElementById('result-recommendation');

    if (startTestBtn) {
        startTestBtn.addEventListener('click', function() {
            // Тут можна додати логіку для відображення питань тесту
            // Для прикладу, просто покажемо результат через кілька секунд
            startTestBtn.style.display = 'none';
            testContainer.innerHTML = '<p>Тест завантажується...</p>';
            testContainer.style.display = 'block';

            setTimeout(function() {
                const randomNumber = Math.random();
                let level = '';
                let recommendation = '';

                if (randomNumber < 0.3) {
                    level = 'A1 (Початковий)';
                    recommendation = 'Рекомендуємо курс для початківців.';
                } else if (randomNumber < 0.6) {
                    level = 'B1 (Середній)';
                    recommendation = 'Рекомендуємо курс середнього рівня.';
                } else {
                    level = 'C1 (Просунутий)';
                    recommendation = 'Рекомендуємо курс для просунутого рівня.';
                }

                testContainer.style.display = 'none';
                resultLevelSpan.textContent = level;
                resultRecommendationParagraph.textContent = recommendation;
                testResult.style.display = 'block';
            }, 2000);
        });
    }

    // Випадаючі питання (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // Кнопка "Залишити відгук"
    const leaveReviewBtn = document.getElementById('leave-review-btn');
    const reviewForm = document.getElementById('review-form');

    if (leaveReviewBtn) {
        leaveReviewBtn.addEventListener('click', function() {
            reviewForm.style.display = 'block';
            this.style.display = 'none';
        });
    }

    // Обробка відправки відгука (просто показує повідомлення)
    const submitReviewForm = document.getElementById('submit-review-form');
    if (submitReviewForm) {
        submitReviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Дякуємо за ваш відгук!');
            reviewForm.style.display = 'none';
            if (leaveReviewBtn) {
                leaveReviewBtn.style.display = 'block';
            }
            submitReviewForm.reset();
        });
    }
});
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a'); // Отримуємо всі посилання в навігації

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    burgerMenu.classList.toggle('active'); // За бажанням можна анімувати бургер
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 820) { // Перевіряємо, чи ми на мобільному екрані
            navList.classList.remove('active');
            burgerMenu.classList.remove('active'); // Також закриваємо анімацію бургера, якщо є
        }
        // Перехід за посиланням відбувається автоматично
    });
});