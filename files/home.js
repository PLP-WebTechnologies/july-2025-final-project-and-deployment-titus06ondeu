const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('active', 'prev', 'next');
    });

    const total = images.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    images[currentIndex].classList.add('active');
    images[prevIndex].classList.add('prev');
    images[nextIndex].classList.add('next');
}

function moveNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function movePrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

setInterval(moveNext, 3000);
updateCarousel();
