import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { usePokemon } from "../../../Services/api/useFetchPokemon";

import AnimatedImageWithBorder from "../../atoms/AnimatedImageWithBorder/AnimatedImageWithBorder";
import { Capitalize } from "../../../utils/capitalize";
import PokemonTypesList from "../../atoms/PokemonTypesList/PokemonTypesList";

interface IndividualPokemonProps {
  name: string;
}
export default function IndividualPokemon({ name }: IndividualPokemonProps) {
  const { isLoading, data } = usePokemon(name);

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {data && (
        <VStack spacing={2}>
          <HStack sx={{ justifyContent: "space-between", width: "100%" }}>
            <Text textStyle="subHeading">#{data.id}</Text>
            <Text textStyle="heading">{Capitalize(data.name)}</Text>
          </HStack>
          <Box
            bg={`${data.types[0].name}.100`}
            borderRadius="16px"
            width={"100%"}
          >
            <AnimatedImageWithBorder
              id={data.id}
              name={data.name}
              backgroundColor={`${data.types[0].name}.100`}
              maxHeight={"250px"}
            />
          </Box>
          <PokemonTypesList types={data.types} />
        </VStack>
      )}
    </>
  );
}
