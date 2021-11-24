const prestonId = '5604473';
const sodaSpringId = '5607916';
const fishHavenId = '5607916';

const pageTitle = document.querySelector('.page-title');

if (pageTitle.innerHTML === 'Preston, Idaho') {
    cityId = prestonId;
} else if (pageTitle.innerHTML === 'Soda Springs, Idaho') {
    cityId = sodaSpringId;
} else if (pageTitle.innerHTML === 'Fish Haven, Idaho') {
    cityId = fishHavenId;
}

const apiKey = "057e1b5ddc6ca4ac1e70d670cfd1c1fe";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=imperial`;

// Fetching the data from the api
fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
        createHtml(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function createHtml(response) {
    console.log(response);
    const currently_element = document.getElementById('currently');
    const currently = response.weather[0].description;
    currently_element.innerHTML = currently;

    const temp_element = document.getElementById('temp');
    const temp = response.main.temp;
    temp_element.innerHTML = temp;

    const speed_element = document.getElementById('speed');
    const speed = response.wind.speed;
    speed_element.innerHTML = speed;

    const humidity_element = document.getElementById('humidity');
    const humidity = response.main.humidity;
    humidity_element.innerHTML = `${humidity}%`;

    const windChill_element = document.getElementById('windChill');
    const windChill = response.main.feels_like;
    windChill_element.innerHTML = windChill;
}

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let days18pm = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        const forecastContainer = document.getElementById('forecastContainer');
        let isFirstDay = true;

        //Loop to get just 5 results
        for (let day = 0; day <= 4; day++) {
            const dayDiv = document.createElement('DIV');
            dayDiv.classList.add('one-day');

            if (isFirstDay) {
                dayDiv.classList.add('first-day');
                isFirstDay = false;
            }

            const dayName_e = document.createElement('P');
            dayName_e.classList.add('day-title');

            const dayIcon_e = document.createElement('IMG')
            const dayTemp_e = document.createElement('P')

            let d = new Date(days18pm[day].dt_txt);
            let dayTemp = days18pm[day].main.temp;

            dayName_e.textContent = daysOfWeek[d.getDay()];
            dayTemp_e.innerHTML = `${dayTemp} °F`;
            
            // Setting the icon
            const imgalt = days18pm[day].weather[0].description;
            const icon = days18pm[day].weather[0].icon
            const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            dayIcon_e.setAttribute('src', src);
            dayIcon_e.setAttribute('alt', imgalt);

            dayDiv.appendChild(dayName_e);
            dayDiv.appendChild(dayIcon_e);
            dayDiv.appendChild(dayTemp_e);

            forecastContainer.appendChild(dayDiv);
            forecastContainer.style.width = 'fit-content';

            document.getElementById('loadingMessage').style.display = 'none'
        }
    })
    