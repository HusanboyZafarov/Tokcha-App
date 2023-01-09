let loader = document.querySelector(".loader"),
    header_circle = document.querySelector(".header_circle")
loader.classList.add("not_loaded")
window.addEventListener("load", () => {
    loader.classList.remove("not_loaded")
    header_circle.classList.toggle("moved")
})