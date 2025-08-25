document.querySelectorAll('.experience-details').forEach(item => {
    const starsContainer = item.querySelector('.star-rating');

    starsContainer.innerHTML = "";
    const count = parseInt(item.getAttribute('data-stars'), 10) || 0;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = i < count ? '★' : '☆';
        starsContainer.appendChild(star);
    }
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

// Menü ein-/ausblenden
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
});

// Menü schließen bei Klick auf Link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('open');
    });
});