let pokemonList = [];

const flipCard = (pokemonid) => {
  let selectedCard = document.getElementById(pokemonid);

  selectedCard.classList.toggle("flip");
};

const generatePokeCards = () => {
  let pokeListElement = document.getElementById("pokelist");

  let pokecards = "";

  for (pokemon of pokemonList) {
    console.log(pokemon);
    let card = `<div class="card" id="card-${
      pokemon.name
    }" onclick="flipCard('card-${pokemon.name}')">
            <div class="card-front card-${pokemon.type.toLowerCase()}">
                <img src="${pokemon.image}"
                    alt="">
                <h3>${pokemon.name}</h3>
                <div class="details">
                    <div><b>Type:</b> ${pokemon.type}</div>
                    <div><b>HP:</b> ${pokemon.hp}</div>
                    <div><b>Attack:</b>${pokemon.attack}</div>
                    <div><b>Defense:</b> ${pokemon.defense}</div>

                </div>
            </div>
            <div class="card-back">
                <h1>Ability: ${pokemon.ability.name}</h1>
                <p>Ability: ${pokemon.ability.name}
                    ${pokemon.ability.desc}
                </p>
            </div>
        </div>`;

    pokecards += card;
  }

  pokeListElement.innerHTML = pokecards;
};

const fetchPokemonData = async () => {
  const response = await fetch("http://127.0.0.1:5500/pokemon.json");
  const data = await response.json();

  console.log(101, data);

  pokemonList = data;
  generatePokeCards();
};

fetchPokemonData();
