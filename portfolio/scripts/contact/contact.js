
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz8MRi19oqT6jwLGPXgRhmyD2S4HE-EMIhjpwrk1FvxFL9n-Esk87uhwGYHoGoDPjIi/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
