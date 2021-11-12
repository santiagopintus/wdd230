document.addEventListener('DOMContentLoaded', () => {

    const apiURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
    
    fetch(apiURL)
        .then(response => response.json())
        .then(jsonObject => {
            console.table(jsonObject);
            const prophets = jsonObject['prophets'];
            createHtml(prophets)
        })
        .catch(err => console.log(err))
        
    })

function createHtml(prophets) {
    for (let prophet of prophets) {

        let card = document.createElement('section');
        card.classList.add('prophet');
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('prophet-info');
        let h2 = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let imageContainer = document.createElement('a');
        imageContainer.classList.add('image-container');
        let image = document.createElement('img');
        image.classList.add('prophet-img');
        
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`
        imageContainer.setAttribute('href', prophet.imageurl);
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);

        infoDiv.appendChild(h2);
        infoDiv.appendChild(birthDate);
        infoDiv.appendChild(birthPlace);
        imageContainer.appendChild(image);
        
        card.appendChild(infoDiv);
        card.appendChild(imageContainer);

        document.querySelector('div.cards').appendChild(card);
    }
}