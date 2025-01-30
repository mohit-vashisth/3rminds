document.addEventListener("DOMContentLoaded", () => {
  const legal = document.querySelectorAll("#T_C_Privacy");
  const projectA1 = document.querySelectorAll(".tryProjectA1, .exploreProjectA1");

  const legalURL = import.meta.env.VITE_LEGAL_URL;
  const projectURL = import.meta.env.VITE_PROJECTA1_URL;

  legal.forEach((legalLink) => {
    legalLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = legalURL;
    });
  });

  projectA1.forEach((projectLink) => {
    projectLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = projectURL;
    });
  });
});
