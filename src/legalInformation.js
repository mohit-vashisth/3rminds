document.addEventListener("DOMContentLoaded", ()=>{
    const mainWebsiteLink = document.querySelector(".mainWebsite")

    mainWebsiteLink.addEventListener("click", (e)=>{
        e.preventDefault()
        const baseURL = import.meta.env.VITE_BASE_URL
        window.location.href = baseURL;
    })
})