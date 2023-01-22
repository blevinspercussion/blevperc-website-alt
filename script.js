//////////////////////////////////////////////
// Define custom elements/web components   ///
//////////////////////////////////////////////

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="./index.html"><img class="logo" src="./media/pics/logo.png"></a>
                <div>
                    <img id="hamburger" src="./media/icons/icons8-menu-rounded-30.png">
                    <nav class="nav-hidden">
                        <ul class="submenu">
                            <li><a href="./lessons.html">Lessons</a></li>
                            <li><a href="./live.html">Live</a></li>
                            <li><a href="./studio.html">Studio</a></li>
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

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <p>
                Website design for blevinspercussion.com copyright &copy; 2023 Adam B. Codes, <a href="https://adamb.codes">adamb.codes</a>
            </p>    
        `
    }
}

// Define custom elements
customElements.define('my-header', Header);
customElements.define('my-footer', Footer);

// Define variables for DOM elements
const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

// Event handlers
function handleSlideMenu() {
    if (navMenu.classList.contains('nav-hidden')) {
        navMenu.classList.remove('nav-hidden');
        navMenu.classList.add('nav-shown');
    } else {
        navMenu.classList.remove('nav-shown');
        navMenu.classList.add('nav-hidden');
    }
}

// Event listeners
hamburger.addEventListener("click", () => {
    handleSlideMenu();
});