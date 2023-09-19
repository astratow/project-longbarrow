// app.js
const mobileMenu = document.getElementById("mobile-menu-list");
const mobileMenuIcon = document.getElementById("mobile-menu");

mobileMenuIcon.addEventListener("click", function() {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});