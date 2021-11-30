const townsUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Fetch the JSON data, then create the HTML for the town events
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
    //For each town, if the city is the city we're in, create the html
    for (let town of towns) {
        //cityName is defined in cityInfo.js
        if (town.name === cityName) {
            document.getElementById('eventsTitle').innerHTML = `Events in ${town.name}`;

            let events = town.events;
            let $eventsList = document.createElement('ul');
            $eventsList.classList.add('events');
            //Each event will have a list item
            for (let event of events) {
                let $listItem = document.createElement('li');
                $listItem.innerHTML = event;
                $eventsList.appendChild($listItem);
            }

            document.querySelector('.events-container').appendChild($eventsList);
        }
    }
}