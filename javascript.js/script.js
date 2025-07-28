function showSection(id) {
  // Skryjeme všetky content sekcie + úvodnú (okrem home)
  const sections = ['home', 'about', 'menu', 'contact'];
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (sec === id) {
      if (sec === 'home') {
        el.style.display = 'flex'; // úvodná má flexbox
      } else {
        el.style.display = 'block'; // ostatné blok
      }
    } else {
      el.style.display = 'none';
    }
  });

  // Aktivujeme/zrušíme aktívny link v menu
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick').includes(id)) {
      link.classList.add('active');
    }
  });

}
