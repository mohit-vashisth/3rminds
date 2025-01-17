document.addEventListener('DOMContentLoaded', ()=>{
    const legalButton = document.querySelector("#T_C_Privacy")
    const projectA1Button = document.querySelector(".explore-btn")

    legalButton.addEventListener("click", (e)=>{
        e.preventDefault()
        const baseURL = import.meta.env.VITE_LEGAL_URL
        window.location.href = baseURL;
    })
    
    projectA1Button.addEventListener("click", ()=>{
        const baseURL = import.meta.env.VITE_PROJECTA1_URL
        window.location.href = baseURL;
    })
})