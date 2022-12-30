const API_URL = "https://pokeapi.co/api/v2/pokemon";
const NUM_PKMN = 802;
const form = document.querySelector('form');
const container = document.querySelector('.pokemon');

function apiFetch(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((data) => appendPokemon(data));
}

form.addEventListener('submit', e => {
    e.preventDefault();
    apiFetch(randomId());
})

function randomId() {
    return Math.floor((Math.random() * NUM_PKMN) + 1);
}

function appendPokemon(data) {
    console.log(data)
    const {name, types, sprites} = data;
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <div class="card__img">
            <img src=${sprites.front_default} />
        </div>
        <div class="card__details">
            <h3>${name}</h3>
        </div>
    `;
    container.appendChild(div);
}