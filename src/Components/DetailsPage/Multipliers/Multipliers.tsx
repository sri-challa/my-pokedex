import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";
import { useFetchMultipleTypes } from "../../../Services/api/useFetchType";
import { Box, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import { calculateColorFromType } from "../../../utils/calculateColorFromType";
import MultipliersContent from "./MultipliersContent/MultipliersContent";
import { Type } from "../../../Services/Types/PokemonType/Type";

export default function Multipliers() {
  const { pokemonData } = useDetails();
  const { types } = pokemonData!;

  const [showAttack, setShowAttack] = useState<boolean>(true);
  const typeQueries = useFetchMultipleTypes(types);
  const isLoading = typeQueries.some((typeQuery) => typeQuery.isLoading);
  const isError = typeQueries.some((typeQuery) => typeQuery.isError);

  return (
    <>
      {isLoading && <span>Loading</span>}
      {isError && <span>Error</span>}
      {!isLoading && !isError && typeQueries && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormControl
            onChange={() => {
              setShowAttack(!showAttack);
            }}
            display="flex"
            alignItems="center"
          >
            <FormLabel htmlFor="Switch between attack and defence" mb="0">
              <Text textStyle="heading">
                {showAttack ? "Attack" : "Defence"}
              </Text>
            </FormLabel>
            <Switch
              size="md"
              colorScheme={`${calculateColorFromType(types)}`}
            />
          </FormControl>

          <MultipliersContent
            data={typeQueries.map((item) => item.data) as Type[]}
            isAttack={showAttack}
          />
        </Box>
      )}
    </>
  );
}
