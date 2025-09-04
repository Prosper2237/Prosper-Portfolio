// Greeting
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
    greeting.textContent = "Good Morning, welcome to my portfolio!";
} else  if (hour < 18) {
    greeting.textContent = "Good Afternoon, enjoy exploring!";
} else {
    greeting.textContent = "Good Evening, thanks for visiting!";
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Grab values
    const name = document.querySelector("#contactForm input[type='text'").value;
    const email = document.querySelector("#contactForm input[type='email'").value;
    const message = document.querySelector("#contactForm input[type=textarea").value;

    // Basic validation (Optional)
    if (!name || !email || !message) {
        document.getElementById("formMessage").textContent = "Please fill out all fields";
        return 
    }

    // Show confirmation
    document.getElementById("formMessage").textContent =
    `Thanks ${name}! Your message has been received. I'll reply to ${email} soon.`;
    
    // Reset form 
    document.getElementById("formMessage").requestFullscreen();
});

// ==== optional smoth scroll for nav links ====
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", function(e) {
         e.preventDefault();
         const targetId = this.getAttribute("herf").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smoth"});
    }
    });
});

// ===Fade-in on Scroll===
const observer = new IntersectionObserver(enteries => {
    enteries.forEach(entery => {
        if (entery.isIntersecting) {
            entery.target.classList.add("visible");
        }
    });
}, {threshold: 0.2 });

// Applynfade-in effect to all sections 
document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section)
});

// Smooth scroll for nav links
document.querySelector('a[href^="#]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// adding script
function loadProject(path) {
    const frame = document.getElementById("project-frame");
    frame.src = path;
    document.getElementById("project-viewer").scrollIntoView({ behavior: "smooth"});
}

