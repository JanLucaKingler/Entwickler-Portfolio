const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    const maxIndex = portfolioDetails.length - 1;

    // Index sicher innerhalb der Grenzen
    index = Math.max(0, Math.min(index, maxIndex));

    // Slide verschieben (nur prozentual)
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Details aktivieren
    portfolioDetails.forEach((detail, i) => {
        detail.classList.toggle('active', i === index);
    });

    // Buttons aktivieren/deaktivieren
    arrowLeft.disabled = (index === 0);
    arrowRight.disabled = (index === maxIndex);

    // Optische Darstellung
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === maxIndex);
};

// Event-Listener
arrowRight.addEventListener('click', () => { index++; activePortfolio(); });
arrowLeft.addEventListener('click', () => { index--; activePortfolio(); });

// Initial
activePortfolio();
