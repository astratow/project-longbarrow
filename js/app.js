// app.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById("mobile-menu-list");
    const mobileMenuIcon = document.getElementById("mobile-menu");
    mobileMenuIcon.addEventListener("click", function() {
        mobileMenu.classList.toggle('show');
    });
    let year = new Date().getFullYear();
    document.querySelector('#year').innerText = year;
});