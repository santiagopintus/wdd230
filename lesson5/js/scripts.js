
function main() {
    showingMenu();
    showingDateFooter();
    showingAnnouncement();
}

function showingMenu() {
    let toggleMenu = document.querySelector('.toggle-menu');
    let navbar = document.querySelector('.navigation');

    toggleMenu.addEventListener('click', () => {
        navbar.classList.toggle('show');

        if (navbar.classList.contains('show')) {
            toggleMenu.innerHTML = 'X';
        } else {
            toggleMenu.innerHTML = '<div>&#9776; Menu</div>'
        }
    })

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
