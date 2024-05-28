import { useQuery } from "@tanstack/react-query";
import { Ability } from "../Types/Ability/AbilityType";
import {
  formatDataForAbilityDescription,
  formatDataForPokemonNameFromAbility,
} from "../../utils/formtApiData";

const abilityDoesNotExist = "Ability does not exist";

const fetchPokemon = async (url: string) => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const formattedData: Ability = {
      description: formatDataForAbilityDescription(data.effect_entries),
      generation: data.generation.name,
      pokemons: formatDataForPokemonNameFromAbility(data.pokemon),
    };

    return formattedData;
  } else {
    if (response.status === 404) {
      throw new Error(abilityDoesNotExist);
    }
  }
};

export const useFetchAbility = (url: string) => {
  // maybe check for cache here.
  return useQuery({
    queryKey: ["getAbility", { url }],
    queryFn: () => fetchPokemon(url),
    retry: (_count, { message }) => message !== abilityDoesNotExist,
  });
};
