const menu = document.getElementById("menu-icon")
const navList = document.querySelector(".nav__list")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navList.classList.toggle("open")
}