import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../Types/Pokemon/PokemonType";
import {
  formatDataForAbilities,
  formatDataForStats,
  formatDataForType,
} from "../../utils/formtApiData";

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
      types: formatDataForType(data.types),
      abilities: formatDataForAbilities(data.abilities),
      stats: formatDataForStats(data.stats),
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
