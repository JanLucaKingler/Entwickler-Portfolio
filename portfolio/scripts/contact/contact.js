const scriptURL = 'https://script.google.com/macros/s/AKfycbz8MRi19oqT6jwLGPXgRhmyD2S4HE-EMIhjpwrk1FvxFL9n-Esk87uhwGYHoGoDPjIi/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            if (response.ok) {
                msg.textContent = "✅ Die Nachricht wurde erfolgreich gesendet.";
                form.reset();
            } else {
                throw new Error("Antwort vom Server war nicht OK.");
            }
        })
        .catch(error => {
            msg.textContent = "❌ Fehler beim Senden – bitte später erneut versuchen.";
            console.error('Error!', error.message);
        })
        .finally(() => {
            setTimeout(() => {
                msg.textContent = "";
            }, 5000);
        });
});