let loader = document.querySelector(".loader"),
    header_circle = document.querySelector(".header_circle"),
    hero_circle = document.querySelector(".hero_circle")
window.addEventListener("load", () => {
    loader.classList.remove("not_loaded")
    header_circle.classList.toggle("moved")
    hero_circle.classList.toggle("moved")
})