const scrollbarBg = document.getElementById('scrollbar-bg');

window.addEventListener('scroll', () => {
    // Total scrollable height
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Current scroll percentage
    const scrollPercent = (window.scrollY / scrollHeight) * 100;

    // Update the height of the scrollbar
    scrollbarBg.style.height = `${scrollPercent}%`;
});


let lastScrollY = window.scrollY;
const navbar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down → hide navbar
        navbar.style.transform = 'translateY(-130%)';
    } else {
        // Scrolling up → show navbar
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});