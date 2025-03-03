const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

// shop animation


// Toggle Mobile Menu
const mobileMenu = document.getElementById("mobile");
const navbar = document.getElementById("navbar");
const closeMenu = document.getElementById("close");

mobileMenu.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("active");
});

// Add Scroll Animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    },
    {
        threshold: 0.1,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

// Add Hover Effects to Buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});