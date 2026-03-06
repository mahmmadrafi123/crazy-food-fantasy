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


/* ===== LOADER ===== */
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



/* ================= VIDEO GALLERY (REAL VIDEOS) ================= */
/* 1) Replace these IDs with YOUR real video IDs */
const myVideoList = [
  { id: "dyg5XSf4cvw", title: "Cooking at Home", sub: "Simple recipe" },
  { id: "vYyC4Kd4Ens", title: "Street Food Vlog", sub: "Food experience" },
  { id: "fZZ-mPdY3Lc", title: "Song Celebration", sub: "Fans celebration moment" },
  { id: "pKp47zkql2c", title: "Travel & Nature", sub: "Peaceful moments" }
];

function renderVideoGallery() {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;

  grid.innerHTML = myVideoList.map(v => {
    const thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
    return `
      <div class="video-card" onclick="openVideo('${v.id}')">
        <img class="video-thumb" src="${thumb}" alt="${v.title}">
        <div class="video-card-body">
          <div class="video-card-title">${v.title}</div>
          <div class="video-card-sub">${v.sub}</div>
        </div>
      </div>
    `;
  }).join("");
}

function openVideo(videoId){
  const popup = document.getElementById("videoPopup");
  const frame = document.getElementById("videoFrame");
  if (!popup || !frame) return;

  // autoplay on open
  frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  popup.style.display = "flex";
}

function closeVideo(){
  const popup = document.getElementById("videoPopup");
  const frame = document.getElementById("videoFrame");
  if (!popup || !frame) return;

  popup.style.display = "none";
  frame.src = ""; // stop video
}

/* click outside to close */
document.addEventListener("click", (e) => {
  const popup = document.getElementById("videoPopup");
  const inner = document.querySelector(".video-popup-inner");
  if (!popup || popup.style.display !== "flex") return;

  if (e.target === popup) closeVideo();
});

/* render on load */
window.addEventListener("load", renderVideoGallery);

