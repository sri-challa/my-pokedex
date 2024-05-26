import { useQuery } from "@tanstack/react-query";
import { Species } from "../Types/Species/SpeciesType";
import { SpeciesApiEggGroup } from "../Types/Species/SpeciesApiType";
import {
  formatDataForCategory,
  formatDataForDescription,
} from "../../utils/formtApiData";

const speciesDoesNotExist = "Species does not exist";

const fetchSpecies = async (url: string | undefined) => {
  if (!url) {
    return undefined;
  }
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    console.log("in species hook", data);
    const speciesData: Species = {
      description: formatDataForDescription(data.flavor_text_entries) ?? "-",
      color: data.color.name ?? "-",
      category: formatDataForCategory(data.genera),
      eggGroups: data.egg_groups.map((item: SpeciesApiEggGroup) => item.name),
      shape: data.shape?.name ?? "-",
      isLegendary: data.is_legendary,
      isMythical: data.is_mythical,
      hatchCounter: data.hatch_counter,
      growthRate: data.growth_rate.name,
      habitat: data.habitat?.name || "none",
      generation: data.generation?.name || "none",
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

export const useSpecies = (url: string | undefined, enabled: boolean) => {
  return useQuery({
    queryKey: ["getSpecies", { url }],
    queryFn: () => fetchSpecies(url),
    retry: (_count, { message }) => message !== speciesDoesNotExist,
    enabled,
  });
};
