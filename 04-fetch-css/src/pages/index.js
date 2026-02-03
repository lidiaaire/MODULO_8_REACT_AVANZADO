import React, { useEffect, useState } from "react";
import {
  getPokemonById,
  getPokemonByName,
  getPokemons,
} from "@/api/pokemonFetch";

import { TOKEN_PASSWORD } from "@/core/config";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchToPokemon = async () => {
      const pokemonsAux = await getPokemons();
      setPokemons(pokemonsAux);
    };

    fetchToPokemon();
  }, []);

  const onClickHandler = async (nombre) => {
    // Peticion get de un pokemon por su NOMBRE
    const pokemonInfo = await getPokemonByName(nombre);
    console.log("Cargando pokemon:", nombre);
    console.log(pokemonInfo);
  };
  // Peticion de get pokemons
  return (
    <>
      <div>
        <span>{TOKEN_PASSWORD}</span>
      </div>
      <ul>
        {pokemons.map((pokemon, index) => {
          return (
            <div key={index}>
              <span>{pokemon.nombre}</span>
              <button onClick={() => onClickHandler(pokemon.nombre)}>
                Get Pokemon Info
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
