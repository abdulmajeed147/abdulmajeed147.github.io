
// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        });
    });
}

// ==========================================
// ANIMATED INTRODUCTION
// ==========================================

const words = [
    "Data Scientist",
    "AI Enthusiast",
    "Automation Developer",
    "Technology Learner"
];

let wordIndex = 0;

const typing = document.getElementById("typing");

if (typing) {
    setInterval(() => {

        typing.style.opacity = "0";

        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            typing.textContent = words[wordIndex];
            typing.style.opacity = "1";
        }, 300);

    }, 2500);
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
    ".section, .contact-section"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}

// ==========================================
// AUTOMATIC FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
