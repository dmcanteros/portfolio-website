document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    
    // The dropdown will show after clicking the hamburger bar menu
    function mobileMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    }
    
    /* The dropdown will close after clicking any menu item inside 
    the hamburger bar menu */
    function closeMenu() {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    }
});