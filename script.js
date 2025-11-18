// Простая анимация появления при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .cta-card').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});
