//Span containing last updated date
const dateSpan = document.querySelector('#lastUpdate');
//Span containing the current year
const yearSpan = document.querySelector('#year');

let options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' }

let lastModified = new Date(document.lastModified);
let day = lastModified.getDate();
let month = lastModified.getMonth() + 1;
let year = lastModified.getFullYear();
let time = lastModified.toLocaleTimeString();

lastModified = `${month}/${day}/${year} ${time}`;

dateSpan.textContent = lastModified
yearSpan.textContent = year

//Loading roboto slab font
WebFont.load({
    google: {
        families: ['Roboto Slab']
    }
});
