// app.js
const mobileMenu = document.getElementById("mobile-menu-list");
const mobileMenuIcon = document.getElementById("mobile-menu");

mobileMenuIcon.addEventListener("click", function() {
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});

let year = new Date().getFullYear();
// let year = getFullYear();
console.log(year);
// let document.querySelector('#year').innerText = year;
document.querySelector('#year').outerText = year;