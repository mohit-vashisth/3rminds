const home = document.querySelector(".mainWebsite");

home.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/";
});
