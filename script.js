/* ================= THEME TOGGLE ================= */
function toggleTheme() {
    document.body.classList.toggle("dark");
}

/* Mobile Menu */
function toggleMenu() {
    document.querySelector(".nav").classList.toggle("show");
}


/* ================= SCROLL ANIMATIONS ================= */
const animatedElements = document.querySelectorAll(".animate");

function showOnScroll() {
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);


/* ================= GALLERY IMAGE POPUP ================= */
function openPopup(imgElement) {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");

    popup.style.display = "flex";
    popupImg.src = imgElement.src;
}

function closePopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.display = "none";
}


/* ================= OPTIONAL SAFETY (CLICK OUTSIDE IMAGE) ================= */
const popupBox = document.getElementById("imagePopup");

if (popupBox) {
    popupBox.addEventListener("click", function (e) {
        if (e.target === popupBox) {
            closePopup();
        }
    });
}


/* Set indicator on page load */
window.addEventListener("load", () => {
    moveIndicator(navLinks[0]);
});



// ===== Scroll Spy Menu Highlight =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
function toggleMenu() {
    document.querySelector(".nav").classList.toggle("show");
}


/* ================= CONTACT FORM SUCCESS ANIMATION ================= */



const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "✅ Message sent successfully!";
            status.className = "form-status success";
            status.style.display = "block";
            form.reset();
        } else {
            status.innerHTML = "❌ Something went wrong. Try again!";
            status.className = "form-status error";
            status.style.display = "block";
        }

    } catch (error) {
        status.innerHTML = "❌ Network error. Please try again.";
        status.className = "form-status error";
        status.style.display = "block";
    }
});
