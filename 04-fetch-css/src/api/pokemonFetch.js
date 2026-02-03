import { BASE_URL } from "@/core/config";

export const getPokemons = async () => {
  const url = BASE_URL;
  const response = await fetch(url);
  const pokemonsSinFormato = await response.json();
  console.log("pokemonsSinformato");
  console.log(pokemonsSinFormato);
  const pokemonsConFormato = formatArray(pokemonsSinFormato);
  return pokemonsConFormato;
};

const formatArray = (arrayPokemons) => {
  const newArray = arrayPokemons.results.map((pokemon, index) => {
    return {
      id: index,
      nombre: pokemon.name,
      url: pokemon.url,
    };
  });

  return newArray;
};

export const getPokemonByName = async (nameParam) => {
  if (!nameParam) return undefined;
  const baseURL = BASE_URL;
  const url = baseURL + nameParam;
  const response = await fetch(url);
  const pokemonSinFormato = await response.json();
  const retAux = formatPokemonObject(pokemonSinFormato);
  return retAux;
};

export const formatPokemonObject = (pokemon) => {
  return {
    nombre: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    type: pokemon.types.map((t) => {
      return t.type.name;
    }),
  };
};

export const getPokemonById = (idParam) => {
  let pokemonAux = pokemons.find((pokemon) => pokemon.id == idParam);
  return pokemonAux;
};

export const modifyName = (idPokemon, newName) => {
  pokemons.map((pokemon) => {
    if (pokemon.id == idPokemon) {
      pokemon.name = newName;
    }
  });
};

export const deletePokemonById = (idPokemon) => {
  let pokemonAux = pokemons.findIndex((pokemon) => pokemon.id == idPokemon);
  pokemons.splice(pokemonAux, 1);
};

export const addPokemon = (id, nombre, url, height, weight, type) => {
  pokemons.push({
    id: id,
    name: nombre,
    url: url,
    details: {
      height: height,
      weight: weight,
      type: type,
    },
  });
};
