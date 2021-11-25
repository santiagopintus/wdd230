const townsUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townsUrl)
    .then((response) => response.json())
    .then((jsonObject) => {
        createEventsHtml(jsonObject);
    })
    .catch((error) => {
        console.log(error);
    });

function createEventsHtml(jsonObject) {
    const towns = jsonObject['towns'];
    for (let town of towns) {
        if (town.name === cityName) {
            document.getElementById('eventsTitle').innerHTML = `Events in ${town.name}`;
            let events = town.events;
            let eventsList = document.createElement('ul');
            eventsList.classList.add('events');
            for (let event of events) {
                let listItem = document.createElement('li');
                listItem.innerHTML = event;
                eventsList.appendChild(listItem);
            }
            document.querySelector('.events-container').appendChild(eventsList);
        }
    }
}