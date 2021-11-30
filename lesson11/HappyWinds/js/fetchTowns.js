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
    const $townsContainer = document.querySelector('.towns');

    for (let town of towns) {
        if (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs') {
            let $card = document.createElement('section');
            let $infoContainer = document.createElement('div');
            let $townTitle = document.createElement('h2');
            let $motto = document.createElement('p');
            let $yearFounded = document.createElement('p');
            let $population = document.createElement('p');
            let $rainfall = document.createElement('p');
            let $photoContainer = document.createElement('div');
            let $photo = document.createElement('img');

            $card.classList.add('town');
            $infoContainer.classList.add('info-container');
            $townTitle.textContent = town.name;
            $motto.textContent = town.motto;
            $motto.classList.add('motto');
            $yearFounded.textContent = 'Year Founded: ' + town.yearFounded;
            $population.textContent = 'Population: ' + town.currentPopulation;
            $rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;
            $photoContainer.classList.add('photo-container');
            //Change photo format to webp
            photoName = replaceFormat(town.photo, '.webp');
            $photo.setAttribute('src', `images/cards/${photoName}`);
            $photo.setAttribute('alt', `${town.name}`);
            $photoContainer.appendChild($photo);

            $infoContainer.appendChild($townTitle);
            $infoContainer.appendChild($motto);
            $infoContainer.appendChild($yearFounded);
            $infoContainer.appendChild($population);
            $infoContainer.appendChild($rainfall);

            $card.appendChild($infoContainer);
            $card.appendChild($photoContainer);

            $townsContainer.appendChild($card);
        }
    }
}

const replaceFormat = (filename, format) => {
    newName = filename.split('.')
    newName = newName[0] + format;
    return newName;
}