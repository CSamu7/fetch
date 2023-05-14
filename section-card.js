import Card from "./card.js";
import sendRequest from "./send-request.js";

export default async function SectionCard() {
  const section = document.createElement("section");
  const allPokemon = await sendRequest("https://pokeapi.co/api/v2/pokemon/");

  allPokemon.results.forEach(async (pokemon) => {
    const name = pokemon.name;

    const getPokemon = await sendRequest(pokemon.url);
    const url = getPokemon.sprites.front_default;

    const card = Card(name, url);

    section.appendChild(card);
  });

  return section;
}
