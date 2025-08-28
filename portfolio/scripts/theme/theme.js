/*------------------Console Theme------------------*/
console.log(`%c
  _  _______ _   _  _____ _      ______ _____  
 | |/ /_   _| \\ | |/ ____| |    |  ____|  __ \\ 
 | ' /  | | |  \\| | |  __| |    | |__  | |__) |
 |  <   | | | . \` | | |_ | |    |  __| |  _  / 
 | . \\ _| |_| |\\  | |__| | |____| |____| | \\ \\ 
 |_|\\_\\_____|_| \\_|\\_____|______|______|_|  \\_\\
`, "color: turquoise; font-family: monospace; font-size: 19px;");

console.log("%c⚠️ Achtung!", "color: red; font-size: 20px; font-weight: bold;");
console.log("Der Zugriff oder die Manipulation dieser Website über die Browser-Konsole ist strengstens untersagt.");
console.log("Jegliche unautorisierte Veränderung oder das Ausführen von Skripten kann strafrechtlich verfolgt werden.");
console.log("© 2025 All Rights Reserved – Alle Rechte vorbehalten.");
console.log("Bitte respektiere die Seite und ihre Sicherheit. 🚫");

/*------------------Dark-/WhiteMode------------------*/

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

/*------------------Burger Menü------------------*/
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

/*------------------Section-Title-Animation------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.section-title').forEach(el => observer.observe(el));