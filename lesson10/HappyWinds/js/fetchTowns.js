const townsUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townsUrl)
    .then((response) => response.json())
    .then((jsonObject) => {
        createTownsHtml(jsonObject);
    })
    .catch((error) => {
        console.log(error);
    });

function createTownsHtml(jsonObject) {
    const towns = jsonObject['towns'];
    const townsContainer = document.querySelector('.towns');

    for (let town of towns) {
        if (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs') {
            let card = document.createElement('section');
            let infoContainer = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let photoContainer = document.createElement('div');
            // let photo = document.createElement('img');

            card.classList.add('town');
            infoContainer.classList.add('info-container');
            h2.textContent = town.name;
            motto.textContent = 'Motto: ' + town.motto;
            yearFounded.textContent = 'Year Founded: ' + town.yearFounded;
            population.textContent = 'Population: ' + town.currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
            photoContainer.classList.add('photo-container');
            photoContainer.style.backgroundImage = `url('images/${town.photo}')`;

            infoContainer.appendChild(h2);
            infoContainer.appendChild(motto);
            infoContainer.appendChild(yearFounded);
            infoContainer.appendChild(population);
            infoContainer.appendChild(rainfall);
            // photoContainer.appendChild(photo);

            card.appendChild(infoContainer);
            card.appendChild(photoContainer);

            townsContainer.appendChild(card);
        }
    }
}