const dateSpan = document.querySelector('#currentDate');
let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
let today = new Date().toLocaleDateString('en-Us', options);

dateSpan.textContent = today