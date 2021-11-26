function main() {
    let pageh1 = document.querySelector('.page-title');

    showingMenu();
    showingDateFooter();
    
    //We are in Preston page
    if (pageh1.innerHTML == 'Preston Idaho') {
        showingAnnouncement();
    }
    //We are in Preston page
    if (pageh1.innerHTML == 'Gallery') {
        trackingTimeBetweenVisits();
        loadAllImages();
    }
}

function showingMenu() {
    let toggleMenu = document.querySelector('.toggle-menu');
    let navbar = document.querySelector('.navigation');

    toggleMenu.addEventListener('click', showMenu);

    function showMenu() {

        navbar.classList.toggle('show');

        if (navbar.classList.contains('show')) {
            toggleMenu.innerHTML = 'X';
        } else {
            toggleMenu.innerHTML = '<div>&#9776; Menu</div>'
        }
    }

}

function showingDateFooter() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const footerDate = document.getElementById('currentDate');

    const todayFormatted = today.toLocaleDateString('en-Us', options);
    footerDate.innerHTML = todayFormatted
}

function showingAnnouncement() {

    let today = new Date()
    let day = today.getDay();

    const announcement = document.getElementById('announcement');
    if (day == 5) {
        announcement.style.display = 'block';
    } else {
        announcement.style.display = 'none';
    }
}
main();

/* LOAD IMAGES OF THE GALLERY */
function loadAllImages() {

    const images = document.querySelectorAll('[data-src]');
    const imgOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                imgObserver.unobserve(entry.target);
            } else {
                return;
            }
        });
    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    });

    function loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) {
            return;
        }
        img.src = src;
        img.removeAttribute('data-src');
    }
}

function trackingTimeBetweenVisits() {
    today = new Date();
    timeBetweenP = document.getElementById('timeBetween');

    let lastVisit = localStorage.getItem('lastVisit');
    
    if (lastVisit == null) {
        //First visit to the site
        localStorage.setItem('lastVisit', today);
        lastVisit = localStorage.getItem('lastVisit');

        let lastVisitDate = new Date(lastVisit);

        calculateTimePassed(today, lastVisitDate);

    } else {
        //Not the first visit to the site
        let lastVisitDate = new Date(lastVisit);
        
        calculateTimePassed(today, lastVisitDate);
    }

    function calculateTimePassed(today, lastVisitDate) {

        let timeBetween = today - lastVisitDate;
        let timeBetweenInMinutes = timeBetween / (1000 * 60);
        let timeBetweenInHours = timeBetweenInMinutes / 60;
        let timeBetweenInDays = timeBetweenInHours / 24;
        let timeBetweenInWeeks = timeBetweenInDays / 7;
        let timeBetweenInMonths = timeBetweenInWeeks / 4.3;
        let timeBetweenInYears = timeBetweenInMonths / 12;
        let timeBetweenInDecades = timeBetweenInYears / 10;

        if (timeBetweenInDays < 7) {
            timePast = Math.round(timeBetweenInDays) + ' days ago';
        } else if (timeBetweenInWeeks < 4) {
            timePast = Math.round(timeBetweenInWeeks) + ' weeks ago';
        } else if (timeBetweenInMonths < 12) {
            timePast = Math.round(timeBetweenInMonths) + ' months ago';
        } else if (timeBetweenInYears < 10) {
            timePast = Math.round(timeBetweenInYears) + ' years ago';
        } else {
            timePast = Math.round(timeBetweenInDecades) + ' decades ago';
        }

        timeBetweenP.innerHTML = 'You visited this page ' + timePast;

        //Reseting counter
        localStorage.setItem('lastVisit', today);
    }

}

//Loading Work Sans font
WebFont.load({google: {families: ['Work Sans:300,400,500,600,700,900']}});

