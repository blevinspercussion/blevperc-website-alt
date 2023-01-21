// Get DOM Elements 
const body = document.querySelector("body");
const menuServices = document.getElementById("menu-services");
const menuBio = document.getElementById("menu-bio");
const menuContact = document.getElementById("menu-contact");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

// Function to create sub menus
function createSubMenu(parentElement, ulID, ...elements) {
    const newUL = document.createElement("ul");
    newUL.id = ulID;
    newUL.className = "sub-menu";
    for (let i=0; i<elements.length; i++) {
        let newLI = document.createElement("li");
        let newA = document.createElement("a");
        newLI.className = "li-" + elements[i];
        newA.className = "link-" + elements[i];
        newA.textContent = elements[i];
        newA.href = "./" + elements[i] + ".html";
        newUL.appendChild(newLI);
        newLI.appendChild(newA);
    }
    parentElement.appendChild(newUL);
}

function deleteSubMenu(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Creat sub menus
menuServices.addEventListener("click", () => {
    document.getElementById("services-sub-menu") === null ? createSubMenu(menuServices, "services-sub-menu", "lessons", "live performance", "studio") : document.getElementById("services-sub-menu").remove()
})

hamburger.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
    } else {
        navMenu.classList.add("active")
    }
})
