document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".activity-card");

    function revealCards() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 150); // delay each card
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // run on load in case already visible
});
