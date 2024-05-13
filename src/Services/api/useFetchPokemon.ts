import { useQuery } from "@tanstack/react-query";

const pokemonDoesNotExist = "Pokemon does not exist";

const fetchPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (response.ok) {
    return await response.json();
  } else {
    if (response.status === 404) {
      throw new Error(pokemonDoesNotExist);
    }
  }
};

export const usePokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", { name }],
    queryFn: () => fetchPokemon(name),
    retry: (_count, { message }) => message !== pokemonDoesNotExist,
  });
};
