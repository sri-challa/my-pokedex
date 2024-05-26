import { Box } from "@chakra-ui/react";
import DetailsCard from "../../Components/DetailsPage/DetailsCard/DetailsCard";

import { DetailsProvider } from "./state/DetailsContext";
import { useDetails } from "./state/useDetails";

export default function DetailsPage() {
  return (
    <DetailsProvider>
      <RenderDetailsPage />
    </DetailsProvider>
  );
}

function RenderDetailsPage() {
  const {
    pokemonData,
    isPokemonLoading,
    isPokemonError,
    speciesData,
    isSpeciesLoading,
    isSpeciesError,
  } = useDetails();

  return (
    <>
      {(isPokemonLoading || isSpeciesLoading) && <span>Loading</span>}
      {(isPokemonError || isSpeciesError) && <span>Error</span>}
      {pokemonData && speciesData && (
        <Box
          // bg={`${pokemonData.types[0]}.200`}
          // add a border here matching the header nav
          bg="gray.100"
          borderRadius="8px"
          padding="1rem"
        >
          <DetailsCard />
        </Box>
      )}
    </>
  );
}
