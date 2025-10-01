/* -------- Greeting -------- */
const greetText = document.getElementById('greetText');
(function showGreeting() {
  const h = new Date().getHours();
  const t = h < 12 ? "Good Morning 🌅" : h < 18 ? "Good Afternoon 🌞" : "Good Evening 🌙";
  if (greetText) greetText.textContent = `${t} — I build web apps that solve real problems.`;
})();

/* -------- Theme Toggle -------- */
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀" : "🌙";
  try {
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  } catch (e) {}
});
(function applySavedTheme() {
  try {
    const t = localStorage.getItem('theme');
    if (t === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeToggle) themeToggle.textContent = "☀";
    }
  } catch (e) {}
})();

/* -------- Mobile menu -------- */
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
menuToggle?.addEventListener('click', () => navbar.classList.toggle('show'));

/* -------- Skills progress animation -------- */
const progressBars = document.querySelectorAll('.progress');
function animateSkills() {
  progressBars.forEach(bar => {
    const val = parseInt(bar.dataset.skill || bar.getAttribute('data-skill') || '0', 10);
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = val + '%';
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

/* -------- Testimonials carousel -------- */
let tIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
function rotateTestimonials() {
  if (!testimonials.length) return;
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[tIndex].classList.add('active');
  tIndex = (tIndex + 1) % testimonials.length;
}
setInterval(rotateTestimonials, 3500);
rotateTestimonials();

/* -------- Projects Filter -------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projects.forEach(p => {
      const cat = p.dataset.category;
      p.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
    });
  });
});

/* -------- Modal logic (optional) -------- */
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalLink = document.getElementById('modalLink');
const modalClose = modal?.querySelector('.modal-close');

document.querySelectorAll('.project-open').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const card = btn.closest('.project-card');
    modalTitle.textContent = card?.querySelector('h3')?.textContent || '';
    modalText.textContent = card?.querySelector('p')?.textContent || '';
    modalLink.href = btn.href;
    if (modal) {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    }
  });
});
modalClose?.addEventListener('click', () => {
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
});

/* -------- Contact form -------- */
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }
  alert(`Thanks ${name}! Your message is received.`);
  contactForm.reset();
});

/* -------- Nav link highlight on scroll -------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#navbar a');
function highlightNav() {
  let cur = '';
  sections.forEach(s => {
    const top = s.offsetTop - 80;
    if (pageYOffset >= top) cur = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);