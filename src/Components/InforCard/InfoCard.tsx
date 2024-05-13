import { Badge, Box, Image, VStack, Text, HStack } from "@chakra-ui/react";
import { NameContainer } from "./InfoCard.styles";

interface InfoCardProps {
  imageUrl: string;
  types: string[];
  name: string;
  pokedexId: string;
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

function PokemonName({ pokedexId, name }: { pokedexId: string; name: string }) {
  return (
    <NameContainer>
      <Text fontSize="md">#{pokedexId}</Text>
      <Text fontSize="md" fontWeight={700}>
        {name}
      </Text>
    </NameContainer>
  );
}

function PokemonTypes({ types }: { types: string[] }) {
  return (
    <HStack>
      {types.map((type, index) => (
        <Badge
          variant="solid"
          colorScheme={type}
          textAlign="center"
          padding="0.15rem 1rem"
          key={index}
        >
          {type}
        </Badge>
      ))}
    </HStack>
  );
}
