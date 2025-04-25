document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 600);
  }, 1500);

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .project-card');
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animated elements
  document.querySelectorAll('.section, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s var(--easing), transform 0.6s var(--easing)';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});