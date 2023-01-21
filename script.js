const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

function handleSlideMenu() {
    if (navMenu.classList.contains('nav-hidden')) {
        navMenu.classList.remove('nav-hidden');
        navMenu.classList.add('nav-shown');
    } else {
        navMenu.classList.remove('nav-shown');
        navMenu.classList.add('nav-hidden');
    }
}

hamburger.addEventListener("click", () => {
    handleSlideMenu();
});