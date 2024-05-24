import { useQuery } from "@tanstack/react-query";
import { Species } from "../Types/Species/SpeciesType";
import { SpeciesApiEggGroup } from "../Types/Species/SpeciesApiType";

const speciesDoesNotExist = "Species does not exist";

const fetchSpecies = async (id: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  if (response.ok) {
    const data = await response.json();
    console.log("in hook", data);
    const speciesData: Species = {
      description: data.flavor_text_entries[0].flavor_text,
      color: data.color.name,
      eggGroups: data.egg_groups.map((item: SpeciesApiEggGroup) => item.name),
      shape: data.shape.name,
      isLegendary: data.is_legendary,
      isMythical: data.is_mythical,
      hatchCounter: data.hatch_counter,
      growthRate: data.growth_rate.name,
      habitat: data.habitat.name,
      generation: data.generation.name,
      genderRate: data.gender_rate,
      evolutionChain: data.evolution_chain.url,
    };
    return speciesData;
  } else {
    if (response.status === 404) {
      throw new Error(speciesDoesNotExist);
    }
  }
};

export const useSpecies = (id: string) => {
  return useQuery({
    queryKey: ["getSpecies", { id }],
    queryFn: () => fetchSpecies(id),
    retry: (_count, { message }) => message !== speciesDoesNotExist,
  });
};
