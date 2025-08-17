// Reveal elements on scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    faders.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
});
