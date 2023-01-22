

// Define custom elements/web components
class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img class="logo" src="./media/pics/logo.png">
                <div>
                    <img id="hamburger" src="./media/icons/icons8-menu-rounded-30.png">
                    <nav class="nav-hidden">
                        <ul class="submenu">
                            <li>Lessons</li>
                            <li>Live</li>
                            <li>Studio</li>
                            <li>Media</li>
                            <li>About</li>
                            <li class="attention-text">Hire Me!</li>
                        </ul>
                    </nav>
                </div>
            </header>
    `
    }
}

customElements.define('my-header', Header);

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