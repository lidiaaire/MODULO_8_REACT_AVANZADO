export const getPokemons = () => {
  return pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      nombre: pokemon.name,
      url: pokemon.url,
    };
  });
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
