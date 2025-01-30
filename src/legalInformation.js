document.addEventListener("DOMContentLoaded", () => {
    const mainWebsiteLink = document.querySelector(".mainWebsite")
    const homeURL = import.meta.env.VITE_BASE_URL;
  
    mainWebsiteLink.addEventListener("click", (e)=>{
        e.preventDefault()
        window.location.href = homeURL;
    })
})