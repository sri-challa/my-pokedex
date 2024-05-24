import { Box, Image, VStack, Text } from "@chakra-ui/react";
import { NameContainer } from "./InfoCard.styles";
import PokemonTypes from "../../atoms/PokemonTypes/PokemonTypes";

interface InfoCardProps {
  imageUrl: string;
  types: string[];
  name: string;
  pokedexId: number;
}
export default function InfoCard({
  imageUrl,
  types,
  name,
  pokedexId,
}: InfoCardProps) {
  return (
    <VStack spacing={2}>
      <PokemonName pokedexId={pokedexId} name={name} />
      <Box
        bg={`${types[0]}.100`}
        borderRadius="8px"
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Image boxSize="150px" src={imageUrl} alt={name} padding="1rem" />
      </Box>
      <PokemonTypes types={types} />
    </VStack>
  );
}

function PokemonName({ pokedexId, name }: { pokedexId: number; name: string }) {
  return (
    <NameContainer>
      <Text fontSize="md">#{pokedexId}</Text>
      <Text fontSize="md" fontWeight={700}>
        {name}
      </Text>
    </NameContainer>
  );
}
