// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll('.animate-text, .animate-image, .card');

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Active Nav Highlight =====
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 200;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
