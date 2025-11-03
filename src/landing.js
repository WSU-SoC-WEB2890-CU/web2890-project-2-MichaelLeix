const container = document.querySelector('.card-container');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

btnRight.addEventListener('click', () => {
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
});

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    const screenPercent = window.innerHeight / 20;

    if (window.scrollY > screenPercent) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
});