const mainNav = document.querySelector("#mainNavbar");

window.addEventListener("scroll", function(){
    if (window.scrollY === 0 && mainNav.classList.contains("navbarColor")) {
        mainNav.classList.remove("navbarColor");
    }
    if (window.scrollY !== 0) {
        mainNav.classList.add("navbarColor");
    }
})

console.log("connected");