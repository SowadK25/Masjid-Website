var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('nav-links');
var links = document.getElementById('nav-links').getElementsByTagName("li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
});
