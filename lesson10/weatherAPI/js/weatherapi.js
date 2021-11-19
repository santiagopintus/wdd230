const prestonId = '5604473';
const apiKey = "057e1b5ddc6ca4ac1e70d670cfd1c1fe";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${prestonId}&appid=${apiKey}&units=imperial`;

// Fetching the data from the api
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const src = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
        const description = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = src;
        document.getElementById('icon').setAttribute('src', src);
        document.getElementById('icon').setAttribute('alt', description);
    })
    .catch(function (error) {
        console.log(error);
    });
