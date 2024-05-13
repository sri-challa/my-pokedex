import { useQuery } from "@tanstack/react-query";

// export type PokemonsList = {
//   name: string;
//   url: string;
// }[];

const fetchPokemons = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
  );
  const data = await response.json();
  return data.results;
};

export const useHomePokemons = () => {
  return useQuery({
    queryKey: ["homePokemons"],
    queryFn: fetchPokemons,
  });
};
