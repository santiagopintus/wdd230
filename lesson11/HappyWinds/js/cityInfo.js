const prestonId = '5604473';
const sodaSpringId = '5607916';
const fishHavenId = '5585010';

let cityName;

//Depending on the city, I consult a different data.
if (document.URL.includes('preston')) {
    cityId = prestonId;
    cityName = 'Preston';
} else if (document.URL.includes('sodasprings')) {
    cityId = sodaSpringId;
    cityName = 'Soda Springs';
} else if (document.URL.includes('fishhaven')) {
    cityId = fishHavenId;
    cityName = 'Fish Haven';
}

const apiKey = "057e1b5ddc6ca4ac1e70d670cfd1c1fe";
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=imperial`;

// Fetching the data from the api
fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((objectResponse) => {
        createHtml(objectResponse);
    })
    .catch(function (error) {
        console.log(error);
    });

function createHtml(response) {
    const $currently = document.getElementById('currently');
    const currently = response.weather[0].description;
    $currently.innerHTML = currently;

    const $temp = document.getElementById('temp');
    const temp = response.main.temp;
    $temp.innerHTML = temp;

    const $speed = document.getElementById('speed');
    const speed = response.wind.speed;
    $speed.innerHTML = speed;

    const $humidity = document.getElementById('humidity');
    const humidity = response.main.humidity;
    $humidity.innerHTML = `${humidity}%`;

    const $windChill = document.getElementById('windChill');
    const windChill = response.main.feels_like;
    $windChill.innerHTML = windChill;
}

fetch(forecastURL)
    .then((response) => response.json())
    .then((objectResponse) => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        //Getting the forecast at 18:00 hours
        let days18pm = objectResponse.list.filter(forecast => forecast.dt_txt.includes("18:00:00"));
        const $forecastContainer = document.getElementById('forecastContainer');
        let isFirstDay = true;

        //Creating the HTML foreach 5 days
        //Loop to get just 5 results
        for (let day = 0; day <= 4; day++) {
            const $dayDiv = document.createElement('DIV');
            $dayDiv.classList.add('one-day');

            //The first day will have an extra class
            if (isFirstDay) {
                $dayDiv.classList.add('first-day');
                isFirstDay = false;
            }

            const $dayName = document.createElement('P');
            $dayName.classList.add('day-title');

            const $dayIcon = document.createElement('IMG')
            const $dayTemp = document.createElement('P')

            //Converting each day to a Date object
            let d = new Date(days18pm[day].dt_txt);
            let temp = days18pm[day].main.temp;

            $dayName.textContent = daysOfWeek[d.getDay()];
            $dayTemp.innerHTML = `${temp} °F`;
            
            // Setting the icon
            const imgalt = days18pm[day].weather[0].description;
            const icon = days18pm[day].weather[0].icon
            const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            $dayIcon.setAttribute('src', src);
            $dayIcon.setAttribute('alt', imgalt);

            $dayDiv.appendChild($dayName);
            $dayDiv.appendChild($dayIcon);
            $dayDiv.appendChild($dayTemp);

            $forecastContainer.appendChild($dayDiv);
            $forecastContainer.style.width = 'fit-content';

            document.getElementById('loadingMessage').style.display = 'none'
        }
    })
    