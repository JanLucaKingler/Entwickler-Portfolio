let whiteMode = localStorage.getItem("whiteMode");
const themeSwitch = document.querySelector('#theme-switch'); // ID beachten

const enableWhiteMode = () => {
    document.body.classList.add("whiteMode");
    localStorage.setItem("whiteMode", "active");
}
const disableWhiteMode = () => {
    document.body.classList.remove("whiteMode");
    localStorage.removeItem("whiteMode");
}

if(whiteMode === "active") enableWhiteMode();

themeSwitch.addEventListener("click", () => {
    whiteMode = localStorage.getItem("whiteMode");
    whiteMode !== "active" ? enableWhiteMode() : disableWhiteMode();
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const links = navLinks.querySelectorAll('a');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('open');
    });
})