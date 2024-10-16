document.addEventListener('DOMContentLoaded', function() {
    // Плавне прокручування
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Переключення теми
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeIcon.src = "https://img.icons8.com/material-outlined/24/ffffff/sun.png"; // Змінюємо на сонце
        } else {
            themeIcon.src = "https://img.icons8.com/material-outlined/24/ffffff/moon-symbol.png"; // Змінюємо на місяць
        }
    });

    // Модальне вікно для зображень
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.zoom-img');
    const closeModal = document.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Закриття модального вікна при кліку на фон
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
