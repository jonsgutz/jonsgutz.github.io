document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('#nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Handle hash changes for direct linking
  function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);
  
  // Handle initial hash if present
  handleHashChange();
});