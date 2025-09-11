// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Greeting message based on time
function showGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning 🌞";
    } else if (hours < 18) {
        greeting = "Good Afternoon 🌤";
    } else {
        greeting = "Good Evening 🌙";
    }

    // Add greeting under the header
    const header = document.querySelector("header");
    if (header) {
        const greetElement = document.createElement("p");
        greetElement.textContent = greeting;
        greetElement.style.marginTop = "10px";
        greetElement.style.fontWeight = "500";
        greetElement.style.fontSize = "18px";
        header.appendChild(greetElement);
    }
}

showGreeting();

// Contact form handling
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Grab values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simple validation
        if (name && email && message) {
            alert(`Thank you, ${ name }! Your message has been received.`);
            contactForm.reset(); // Clear the form
        } else {
            alert("Please fill out all fields before sending.");
        }
    });
}
