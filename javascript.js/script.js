document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a, .btn");
  const sections = document.querySelectorAll("section");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  function showSection(id) {
    // prepnutie sekcií
    sections.forEach(sec => sec.classList.toggle("active", sec.id === id));
    links.forEach(link => link.classList.toggle("active", link.dataset.section === id));

    // animácia buttonov
    const homeBtn = document.getElementById("order-btn");
    if (homeBtn) {
      homeBtn.classList.remove("visible");
      if (id === "home") {
        setTimeout(() => homeBtn.classList.add("visible"), 500);
      }
    }

    const aboutBtn = document.getElementById("order-btn-about");
    if (aboutBtn) {
      aboutBtn.classList.remove("visible");
      if (id === "about") {
        setTimeout(() => aboutBtn.classList.add("visible"), 1000);
      }
    }

    // posun hore
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.dataset.section;
      if (target) {
        showSection(target);
        navLinks.classList.remove("show"); // zavrie menu po kliknutí
      }
    });
  });

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // default sekcia
  showSection("home");
});
