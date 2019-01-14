const mainElement = document.querySelector('.main');
const searchInputElement = document.querySelector('.search input');
const searchBtnElement = document.querySelector('.search i');

pretrazi();

function pretrazi() {
    fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
    .then(data => data.json())
    .then(data => {
        let fraza = searchInputElement.nodeValue;
        console.log(fraza);
        let pattern = ``;
        for(let i = 0; i < data.length; i++) {
            let film = data[i];
            pattern += `<div class="movie">
                            <div class="movie--img__container"><img src="${film.slika}" class="movie--img"></div>
                            <p class="movie--title">${film.naziv} (${film.godina})</p>
                        </div>`;
        }

        mainElement.innerHTML = pattern;
    });
};

function pretraziFilmove() {
    fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
    .then(data => data.json())
    .then(data => {
        let fraza = searchInputElement.value;
        console.log(fraza);
        let pattern = ``;
        for(let i = 0; i < data.length; i++) {
            let film = data[i];
            if(fraza != null && film.naziv.toLowerCase().includes(fraza.toLowerCase())) {
                pattern += `<div class="movie">
                <div class="movie--img__container"><img src="${film.slika}" class="movie--img"></div>
                <p class="movie--title">${film.naziv} (${film.godina})</p>
            </div>`;
            }
        }

        mainElement.innerHTML = pattern;
    });
};

searchInputElement.addEventListener('input', pretraziFilmove);
