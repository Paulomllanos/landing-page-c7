const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".nav__list");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navList.classList.toggle("open")
}