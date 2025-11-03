// thumbnail click => swap main image
document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.querySelector('.product-gallery .main-image img');
    const thumbs = document.querySelectorAll('.thumbnail-row img');

    if (thumbs.length && mainImg) {
        thumbs.forEach(t => {
            t.addEventListener('click', () => {
                // remove active from others
                thumbs.forEach(x => x.classList.remove('active'));
                t.classList.add('active');

                const src = t.dataset.large || t.src;
                mainImg.src = src;
            });
        });
    }

    // simple accessible snap for related carousel (left / right buttons optional)
    const related = document.querySelector('.related-cards');
    if (related) {
        // add keyboard support: left/right to scroll
        related.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') related.scrollBy({ left: 220, behavior: 'smooth' });
            if (e.key === 'ArrowLeft') related.scrollBy({ left: -220, behavior: 'smooth' });
        });
    }
});
