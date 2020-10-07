const hamburger = document.querySelector(".hambuger");
const nav-links= document.querySelector(".nav-links");
const links = document.querySelectorAll (".nav-links li");

hamburger.addEventListener ("click", () => {
nav-links.classList.toggle ("open");
});