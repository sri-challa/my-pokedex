import { useQuery } from "@tanstack/react-query";

const pokemonDoesNotExist = "Pokemon does not exist";

type Pokemon = {
  name: string;
  id: string;
  types: string[];
};

type PokemenTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const fetchPokemon = async (nameOrId: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);

  if (response.ok) {
    const data = await response.json();
    console.log("in hook", data);
    const pokemonData: Pokemon = {
      name: data.name,
      id: data.id,
      types: data.types.map((item: PokemenTypes) => item.type.name),
    };
    return pokemonData;
  } else {
    if (response.status === 404) {
      throw new Error(pokemonDoesNotExist);
    }
  }
};

export const usePokemon = (nameOrId: string) => {
  return useQuery({
    queryKey: ["getPokemon", { nameOrId }],
    queryFn: () => fetchPokemon(nameOrId),
    retry: (_count, { message }) => message !== pokemonDoesNotExist,
  });
};
