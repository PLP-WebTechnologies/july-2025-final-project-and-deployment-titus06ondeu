// Fade-in effect for heading
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("h1").style.opacity = 0;
    setTimeout(() => {
        document.querySelector("h1").style.transition = "opacity 1.5s ease";
        document.querySelector("h1").style.opacity = 1;
    }, 200);

    // Make contact info clickable to copy
    const contactText = document.querySelector("p");
    contactText.style.cursor = "pointer";

    contactText.addEventListener("click", () => {
        const text = contactText.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Contact information copied to clipboard!");
        });
    });
});
