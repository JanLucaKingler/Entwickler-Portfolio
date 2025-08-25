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
