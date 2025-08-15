function showSection(id) {
  const sections = ['home', 'about', 'menu', 'contact'];

  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (el) {
      el.style.display = (sec === id) ? (id === 'home' ? 'flex' : 'block') : 'none';
    }
  });

  // Navigačné linky
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick')?.includes(id)) {
      link.classList.add('active');
    }
  });

  // Reset + show button
  const homeBtn = document.getElementById('order-btn');
  if (homeBtn) {
    homeBtn.classList.remove('visible');
    if (id === 'home') {
      setTimeout(() => homeBtn.classList.add('visible'), 500);
    }
  }

  const aboutBtn = document.getElementById('order-btn-about');
  if (aboutBtn) {
    aboutBtn.classList.remove('visible');
    if (id === 'about') {
      setTimeout(() => aboutBtn.classList.add('visible'), 1000);
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const homeBtn = document.getElementById('order-btn');
    if (homeBtn) homeBtn.classList.add('visible');
  }, 500);
});


