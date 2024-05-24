import { useQuery } from "@tanstack/react-query";
import {
  PokemonApiTypes,
  PokemonApiAbility,
  PokemonApiStat,
} from "../Types/Pokemon/PokemonAPIType";
import { Pokemon } from "../Types/Pokemon/PokemonType";

const pokemonDoesNotExist = "Pokemon does not exist";

const fetchPokemon = async (nameOrId: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);

  if (response.ok) {
    const data = await response.json();
    const pokemonData: Pokemon = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((item: PokemonApiTypes) => item.type.name),
      abilities: data.abilities.map((item: PokemonApiAbility) => {
        return {
          name: item.ability.name,
          url: item.ability.url,
        };
      }),
      stats: data.stats.map((item: PokemonApiStat) => {
        return {
          baseStat: item.base_stat,
          name: item.stat.name,
          url: item.stat.url,
        };
      }),
      species: data.species,
    };
    return pokemonData;
  } else {
    if (response.status === 404) {
      throw new Error(pokemonDoesNotExist);
    }
  }
};

export const usePokemon = (nameOrId: string) => {
  // maybe check for cache here.
  return useQuery({
    queryKey: ["getPokemon", { nameOrId }],
    queryFn: () => fetchPokemon(nameOrId),
    retry: (_count, { message }) => message !== pokemonDoesNotExist,
  });
};
