//////////////////////////////////////////////
// Define custom elements/web components   ///
//////////////////////////////////////////////

class MobileHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header id='mobile-header'>
                <a href="./index.html"><img class="logo" src="./media/pics/logo.png"></a>
                <div>
                    <img id="hamburger" src="./media/icons/icons8-menu-rounded-30.png">
                    <nav class="nav-hidden">
                        <ul class="submenu">
                            <li><a href="./lessons.html">Lessons</a></li>
                            <li><a href="./live.html">Live</a></li>
                            <li><a href="./studio.html">Studio</a></li>
                            <li><a href="./media.html">Media</a></li>
                            <li><a href="./about.html">About</a></li>
                            <li class="attention-text">Hire Me!</li>
                        </ul>
                    </nav>
                </div>
            </header>
    `
    }
}

class DesktopHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section id="desktop-header-container">
        <header id="desktop-header">
        <div class="empty-div"></div>
        <div class="title-div">
            <a href="./index.html"><img class="logo" src="./media/pics/Blevins Percussion-logos_white.png"></a>
            <h3>North Georgia's spot for expert drum lessons</h3>
        </div>    
        <div class="vl"></div>
        <div class="title-div">
            <div>
                <h3>(706) 623 - 3786</h3>
                <h3>blevinspercussion@gmail.com</h3>
            </div>
        </div>
        <div class="empty-div"></div>
    </header>

        <section class="video-div">
            <video autoplay muted loop>
                <source src="./media/video/save tonight drumcam.mp4">
            </video>
        </section>

        <nav>
            <ul>
                <li><a href="./lessons.html"><img class="nav-image" src="./media/pics/lecture2.jpg"></a></li>
                <p>lessons</p>
                <li><a href="./live.html"><img class="nav-image" src="./media/pics/green_drumlites.jpg"></a></li>
                <p>live</p>
                <li><a href="./studio.html"><img class="nav-image" src="./media/pics/red_light.jpg"></a></li>
                <p>studio</p>
                <li><a href="./media.html"><img class="nav-image" src="./media/pics/rocknrodeo.jpg"></a></li>
                <p>media</p>
                <li><a href="./about.html"><img class="nav-image" src="./media/pics/tin-roof1.jpg"></a></li>
                <p>about</p>
            </ul>

        </nav>
        </section>
        
        `
    }
}

class AbbreviatedHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header id="desktop-header">
        <div class="empty-div"></div>
        <div class="title-div">
            <a href="./index.html"><img class="logo" src="./media/pics/Blevins Percussion-logos_white.png"></a>
            <h3>North Georgia's spot for expert drum lessons</h3>
        </div>    
        <div class="vl"></div>
        <div class="title-div">
            <div>
                <h3>(706) 623 - 3786</h3>
                <h3>blevinspercussion@gmail.com</h3>
            </div>
        </div>
        <div class="empty-div"></div>
    </header>
    <nav class="abb-nav">
        <ul>
            <li><a class="abb-nav-text" href="./lessons.html">lessons</a></li>
            <li><a class="abb-nav-text" href="./live.html">live</a></li>
            <li><a class="abb-nav-text" href="./studio.html">studio</a></li>
            <li><a class="abb-nav-text" href="./media.html">media</a></li>
            <li><a class="abb-nav-text" href="./about.html">about</a></li>
        </ul>
    </nav>
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
customElements.define('mobile-header', MobileHeader);
customElements.define('desktop-header', DesktopHeader);
customElements.define('abb-header', AbbreviatedHeader);
customElements.define('my-footer', Footer);

// Define variables for DOM elements
const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


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

