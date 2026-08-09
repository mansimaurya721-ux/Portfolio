// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        // Only handle internal section links
        if (targetId && targetId.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });

});


// ===============================
// Sticky Navbar
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

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

        if (window.scrollY >= sectionTop) {

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
// EmailJS Contact Form
// ===============================

// Initialize EmailJS
if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "S-w9rL9Znw5GWPGC8"
    });

} else {

    console.error("EmailJS library is not loaded.");

}


// Get Contact Form
const form = document.getElementById("contact-form");
const status = document.getElementById("status");


if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();


        // Get input fields
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");


        // Check fields exist
        if (!nameInput || !emailInput || !messageInput) {

            console.error("Contact form fields are missing.");

            if (status) {
                status.innerHTML = "❌ Form configuration error.";
            }

            return;

        }


        // Get values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();


        // ===============================
        // Validation
        // ===============================

        if (name === "" || email === "" || message === "") {

            if (status) {
                status.innerHTML = "⚠️ Please fill in all fields.";
            }

            return;

        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            if (status) {
                status.innerHTML = "⚠️ Please enter a valid email address.";
            }

            return;

        }


        // ===============================
        // Show Sending Message
        // ===============================

        if (status) {

            status.innerHTML = "📨 Sending message...";

        }


        // Disable submit button
        const submitButton = form.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        if (submitButton) {

            submitButton.disabled = true;

        }


        // ===============================
        // Send Email Using EmailJS
        // ===============================

        emailjs.send(
            "service_okwt0t6",
            "template_h2mxtes", {
                name: name,
                email: email,
                message: message
            }
        )

        .then(function(response) {

            console.log(
                "EmailJS SUCCESS:",
                response.status,
                response.text
            );


            if (status) {

                status.innerHTML =
                    "✅ Message sent successfully!";

            }


            // Clear form
            form.reset();


            // Remove validation borders
            const inputs =
                form.querySelectorAll("input, textarea");

            inputs.forEach(input => {

                input.style.border = "";

            });


        })

        .catch(function(error) {

            console.error("EmailJS ERROR:", error);


            if (status) {

                status.innerHTML =
                    "❌ Failed to send message. Please try again.";

            }

        })

        .finally(function() {

            // Enable button again
            if (submitButton) {

                submitButton.disabled = false;

            }

        });

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

        heroImage.style.transform =
            `translateY(${position}px)`;

    }, 2000);

}


// ===============================
// Console Message
// ===============================

console.log("Portfolio JavaScript loaded successfully.");