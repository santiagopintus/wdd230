//Getting the temperature and wind speed from the HTML
const t = parseFloat(document.getElementById('temp').innerHTML);
const s = parseFloat(document.getElementById('speed').innerHTML);

/* Calculates windchill based on current temperature and wind speed */
function calculateWindChill() {
    if (t <= 50 && s >= 3) {
        const wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        document.getElementById('windChill').innerHTML = wc.toFixed(2) + "&#8457;";
        
    } else {
        document.getElementById('windChill').innerHTML = "N/A";
    }

}

calculateWindChill();
