// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});



// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});



// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ===============================
// Typing Effect
// ===============================

const typing = document.getElementById("typing");

if (typing) {

    const words = [

        "Front-End Developer",

        "Responsive Website Expert",

        "Freelancer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? 50 : 100);

    }

    type();

}



// ===============================
// Scroll Reveal
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});



// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been received.");

            form.reset();

        }

    });

}



// ===============================
// Hero Image Floating Animation
// ===============================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    let position = 0;

    setInterval(() => {

        position = position === 0 ? 15 : 0;

        heroImage.style.transform = `translateY(${position}px)`;

    }, 2000);

}