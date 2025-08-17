// ===== FADE-IN ON SCROLL =====
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => item.classList.add('fade-in'));

function checkVisibility() {
    galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// ===== LIGHTBOX FUNCTIONALITY =====
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="preview">
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.lightbox-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
