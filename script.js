// ======================================================
// MANSI MAURYA PORTFOLIO - COMPLETE JAVASCRIPT
// ======================================================


// ======================================================
// PRELOADER
// ======================================================

window.addEventListener("load", function() {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function() {

            preloader.classList.add("hide");

        }, 800);

    }

});


// ======================================================
// MOBILE NAVIGATION
// ======================================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");


if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function() {

        navbar.classList.toggle("mobile-open");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navbar.classList.contains("mobile-open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}


// ======================================================
// CLOSE MOBILE MENU AFTER CLICK
// ======================================================

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbar) {

            navbar.classList.remove("mobile-open");

        }

        if (menuBtn) {

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});


// ======================================================
// SMOOTH SCROLLING
// ======================================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ======================================================
// STICKY HEADER
// ======================================================

const header = document.getElementById("header");


function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", updateHeader);

updateHeader();


// ======================================================
// ACTIVE NAVIGATION
// ======================================================

const sections = document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// ======================================================
// TYPING EFFECT
// ======================================================

const typing = document.getElementById("typing");


if (typing) {

    const words = [

        "Full Stack Developer",
        "Frontend Developer",
        "MERN Learner",
        "Web Developer"

    ];


    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typing.textContent =
                currentWord.substring(
                    0,
                    charIndex
                );

            charIndex++;


            if (
                charIndex >
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1400
                );

                return;

            }

        } else {

            typing.textContent =
                currentWord.substring(
                    0,
                    charIndex
                );

            charIndex--;


            if (charIndex < 0) {

                charIndex = 0;

                deleting = false;

                wordIndex++;


                if (
                    wordIndex >=
                    words.length
                ) {

                    wordIndex = 0;

                }

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 50 : 90
        );

    }


    typeEffect();

}


// ======================================================
// SCROLL REVEAL
// ======================================================

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function(entries, observer) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            }, {
                threshold: 0.12
            }
        );


    revealElements.forEach(function(element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function(element) {

        element.classList.add("show");

    });

}


// ======================================================
// SCROLL TO TOP BUTTON
// ======================================================

const topBtn =
    document.getElementById("topBtn");


function updateTopButton() {

    if (!topBtn) {
        return;
    }


    if (window.scrollY > 500) {

        topBtn.style.display = "grid";

    } else {

        topBtn.style.display = "none";

    }

}


window.addEventListener(
    "scroll",
    updateTopButton
);

updateTopButton();


if (topBtn) {

    topBtn.addEventListener(
        "click",
        function() {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// ======================================================
// EMAILJS INITIALIZATION
// ======================================================

if (typeof emailjs !== "undefined") {

    emailjs.init({

        publicKey: "Zz105-2jjpMKA2dSv"

    });

    console.log(
        "✅ EmailJS initialized successfully"
    );

} else {

    console.error(
        "❌ EmailJS library is not loaded"
    );

}


// ======================================================
// CONTACT FORM
// ======================================================

const form =
    document.getElementById(
        "contact-form"
    );

const status =
    document.getElementById(
        "status"
    );


if (form) {

    form.addEventListener(
        "submit",
        async function(e) {

            e.preventDefault();


            // --------------------------------------------------
            // INPUT FIELDS
            // --------------------------------------------------

            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const messageInput =
                document.getElementById("message");


            // --------------------------------------------------
            // CHECK INPUTS
            // --------------------------------------------------

            if (!nameInput ||
                !emailInput ||
                !messageInput
            ) {

                console.error(
                    "❌ Contact form fields are missing."
                );


                if (status) {

                    status.textContent =
                        "❌ Form configuration error.";

                }

                return;

            }


            // --------------------------------------------------
            // VALUES
            // --------------------------------------------------

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();


            // --------------------------------------------------
            // EMPTY FIELD VALIDATION
            // --------------------------------------------------

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                if (status) {

                    status.textContent =
                        "⚠️ Please fill in all fields.";

                }

                return;

            }


            // --------------------------------------------------
            // EMAIL VALIDATION
            // --------------------------------------------------

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                if (status) {

                    status.textContent =
                        "⚠️ Please enter a valid email address.";

                }

                return;

            }


            // --------------------------------------------------
            // CHECK EMAILJS
            // --------------------------------------------------

            if (
                typeof emailjs === "undefined"
            ) {

                if (status) {

                    status.textContent =
                        "❌ EmailJS is not loaded.";

                }

                console.error(
                    "EmailJS library is missing."
                );

                return;

            }


            // --------------------------------------------------
            // SHOW SENDING
            // --------------------------------------------------

            if (status) {

                status.textContent =
                    "📨 Sending message...";

            }


            // --------------------------------------------------
            // SUBMIT BUTTON
            // --------------------------------------------------

            const submitButton =
                form.querySelector(
                    'button[type="submit"], input[type="submit"]'
                );


            const originalButtonHTML =
                submitButton ?
                submitButton.innerHTML :
                "";


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.innerHTML =
                    `
                    Sending...
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    `;

            }


            // --------------------------------------------------
            // EMAILJS SEND
            // --------------------------------------------------

            try {

                const response =
                    await emailjs.send(

                        "service_okwt0t6",

                        "template_h2mxtes",

                        {

                            name: name,

                            email: email,

                            message: message

                        }

                    );


                // --------------------------------------------------
                // SUCCESS
                // --------------------------------------------------

                console.log(
                    "✅ EmailJS SUCCESS:",
                    response.status,
                    response.text
                );


                if (status) {

                    status.textContent =
                        "✅ Message sent successfully!";

                }


                form.reset();


            } catch (error) {

                // --------------------------------------------------
                // ERROR
                // --------------------------------------------------

                console.error(
                    "❌ EmailJS ERROR:",
                    error
                );


                if (status) {

                    if (
                        error &&
                        error.status === 412
                    ) {

                        status.textContent =
                            "❌ Gmail connection expired. Reconnect Gmail in EmailJS.";

                    } else if (
                        error &&
                        error.status === 404
                    ) {

                        status.textContent =
                            "❌ EmailJS Service/Template not found. Check your IDs.";

                    } else {

                        status.textContent =
                            "❌ Failed to send message. Please try again.";

                    }

                }

            } finally {

                // --------------------------------------------------
                // ENABLE BUTTON
                // --------------------------------------------------

                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        originalButtonHTML ||
                        `
                        Send Message
                        <i class="fa-solid fa-arrow-right"></i>
                        `;

                }

            }

        }
    );

}


// ======================================================
// CURRENT YEAR
// ======================================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ======================================================
// ESC KEY - CLOSE MOBILE MENU
// ======================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            navbar
        ) {

            navbar.classList.remove(
                "mobile-open"
            );


            if (menuBtn) {

                const icon =
                    menuBtn.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }

    }
);


// ======================================================
// CONSOLE MESSAGE
// ======================================================

console.log(
    "%c Mansi Maurya Portfolio 🚀 ",
    "color:#a78bfa;font-size:18px;font-weight:bold;"
);

console.log(
    "Portfolio JavaScript loaded successfully."
);