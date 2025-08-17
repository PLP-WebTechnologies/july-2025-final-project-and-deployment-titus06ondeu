// Fade-in on scroll
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
});
