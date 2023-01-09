let loader = document.querySelector(".loader"),
    header_circle = document.querySelector(".header_circle"),
    hero_circle = document.querySelector(".hero_circle"),
    html = document.querySelector('html'),
    body = document.querySelector('body')
window.addEventListener("load", () => {
    loader.classList.remove("not_loaded")
    html.classList.remove("not_loaded")
    body.classList.remove("not_loaded")
    header_circle.classList.toggle("moved")
    hero_circle.classList.toggle("moved")
})

let up = document.querySelector(".up")
window.addEventListener("scroll", () => {
    up.classList.toggle("scrolled", window.scrollY > 400)
})

var time = setInterval(position_changer, 800)
let hero_img_one = document.querySelector(".hero_img_one"),
    hero_img_two = document.querySelector(".hero_img_two")

function position_changer() {
    hero_img_one.classList.toggle("changed")
    hero_img_two.classList.toggle("changed")
}