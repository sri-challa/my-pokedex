import { createContext } from "react";
import { Pokemon } from "../../../Services/Types/Pokemon/PokemonType";
import { Species } from "../../../Services/Types/Species/SpeciesType";
import { usePokemon } from "../../../Services/api/useFetchPokemon";
import { useSpecies } from "../../../Services/api/useFetchSpecies";
import { useParams } from "react-router-dom";

export const DetailsContext = createContext<
  | {
      pokemonData: Pokemon | undefined;
      isPokemonLoading: boolean;
      isPokemonError: boolean;
      speciesData: Species | undefined;
      isSpeciesLoading: boolean;
      isSpeciesError: boolean;
    }
  | undefined
>(undefined);

export function DetailsProvider({ children }: { children: React.ReactNode }) {
  const { id } = useParams();
  const {
    data: pokemonData,
    isLoading: isPokemonLoading,
    isError: isPokemonError,
  } = usePokemon(id!);

  const speciesUrl = pokemonData?.species.url;

  // species is fetched after pokemon data is fetched as the url is contained in the response.
  const {
    data: speciesData,
    isLoading: isSpeciesLoading,
    isError: isSpeciesError,
  } = useSpecies(speciesUrl, !!pokemonData);

  return (
    <DetailsContext.Provider
      value={{
        pokemonData,
        isPokemonLoading,
        isPokemonError,
        speciesData,
        isSpeciesLoading,
        isSpeciesError,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}
