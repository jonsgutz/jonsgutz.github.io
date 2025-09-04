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

// Function to toggle company projects
function toggleProjects(projectId) {
  const projectsContent = document.getElementById(projectId);
  const toggleButton = projectsContent.previousElementSibling;
  const toggleIcon = toggleButton.querySelector('.toggle-icon');
  const toggleText = toggleButton.querySelector('.toggle-text');
  
  if (projectsContent.classList.contains('collapsed')) {
    projectsContent.classList.remove('collapsed');
    projectsContent.classList.add('expanded');
    toggleIcon.textContent = '▼';
    toggleText.textContent = 'Hide Company Projects';
  } else {
    projectsContent.classList.remove('expanded');
    projectsContent.classList.add('collapsed');
    toggleIcon.textContent = '▶';
    toggleText.textContent = 'View Company Projects';
  }
}