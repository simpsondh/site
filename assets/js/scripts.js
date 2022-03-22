var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
