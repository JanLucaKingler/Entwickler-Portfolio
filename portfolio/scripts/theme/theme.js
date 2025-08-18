const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Prüfen, ob User ein gespeichertes Theme hat
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
    root.classList.toggle('dark');

    // Speicherung im LocalStorage
    if (root.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


toggleBtn.addEventListener('click', () => {
    root.classList.toggle('dark');

    if (root.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.querySelector('img').src = "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.querySelector('img').src = "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png";
    }
});