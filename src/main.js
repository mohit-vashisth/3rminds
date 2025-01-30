document.addEventListener("DOMContentLoaded", () => {
  // Select the links for legal and projectA1
  const legalLinks = document.querySelectorAll("#T_C_Privacy");
  const projectLinks = document.querySelectorAll(".tryProjectA1, .exploreProjectA1");

  // Environment URLs (update based on your setup)
  const baseURL = import.meta.env.VITE_BASE_URL; // "3rminds.netlify.app"
  const legalURL = `${baseURL}/legal`; // "https://3rminds.netlify.app/legal"
  const projectURL = `${baseURL}/projectA1`; // Adjust this if necessary

  // Route mapping for SPA
  const routes = {
    "/legal": "legalInformation.html",
    "/projectA1": "index.html",
  };

  // Function to handle navigation and change the URL without reloading
  const handleNavigation = (path) => {
    history.pushState({}, "", path); // Change the URL without reloading
    loadContent(path); // Load the content dynamically based on the path
  };

  // Function to dynamically load content
  const loadContent = async (path) => {
    const route = routes[path];
    if (!route) return; // If route is undefined, do nothing

    try {
      // Fetching the correct content for the route (based on environment URLs)
      const response = await fetch(`${baseURL}/${route}`);
      const html = await response.text();
      document.getElementById("root").innerHTML = html; // Update the content inside "root"
    } catch (error) {
      console.error("Error loading page:", error);
    }
  };

  // Add click listeners to the legal and projectA1 links
  legalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      handleNavigation("/legal"); // Navigate to /legal (without reloading the page)
    });
  });

  projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      handleNavigation("/projectA1"); // Navigate to /projectA1 (without reloading the page)
    });
  });

  // Handle browser back/forward buttons
  window.onpopstate = () => loadContent(window.location.pathname);

  // Load the correct content on initial load
  loadContent(window.location.pathname);
});
