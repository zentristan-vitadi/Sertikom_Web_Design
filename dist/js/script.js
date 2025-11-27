const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const position = window.scrollY > 0
    navbar.classList.toggle("scrolling-active", position)
}) 

