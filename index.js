document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const contentSections = document.querySelectorAll(".tab-content");
    const navLinks = document.getElementById("nav-links");
  
    const homeLinks = [
      { id: "about", text: "About Me" },
      { id: "experience", text: "Professional Experience" },
      { id: "education", text: "Education" },
      { id: "projects", text: "Projects" },
      { id: "skills", text: "Skills" },
    ];
  
    const writeupsLinks = [
      { id: "ctf-writeups", text: "CTF Write-ups" },
      { id: "malware-writeups", text: "Malware Write-ups" },
    ];
  
    function updateNavLinks(links) {
      // Clear existing links
      navLinks.innerHTML = "";
  
      // Add new links
      links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${link.id}`;
        a.textContent = link.text;
        
        // Add click event listener
        a.addEventListener("click", event => {
          event.preventDefault();
          const targetId = link.id;
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        });
  
        li.appendChild(a);
        navLinks.appendChild(li);
      });
    }
  
    function switchTab(tabId) {
      // Switch active tab
      tabs.forEach(t => t.classList.remove("active"));
      document.getElementById(`${tabId}-tab`).classList.add("active");
  
      // Hide all content sections
      contentSections.forEach(section => {
        section.classList.remove("active");
        section.style.display = "none";
      });
  
      // Show only the selected tab's content
      const selectedContent = document.getElementById(tabId);
      if (selectedContent) {
        selectedContent.classList.add("active");
        selectedContent.style.display = "block";
      }
  
      // Update side nav links
      if (tabId === "home") {
        updateNavLinks(homeLinks);
      } else if (tabId === "writeups") {
        updateNavLinks(writeupsLinks);
      }
  
      // Scroll to top of content
      document.getElementById("main-content").scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
    // Add click event listeners to tabs
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.id.replace("-tab", "");
        switchTab(targetId);
      });
    });
  
    // Handle hash changes for direct linking
    function handleHashChange() {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          // Determine which tab the section belongs to
          const isWriteup = hash.includes("writeups");
          const tabId = isWriteup ? "writeups" : "home";
          
          // Switch to appropriate tab
          switchTab(tabId);
          
          // Scroll to section
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
  
    // Initialize with Home tab active
    switchTab("home");
  });
  