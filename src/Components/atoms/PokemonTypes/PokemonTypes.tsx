import { Badge, HStack } from "@chakra-ui/react";

interface PokemonTypesProps {
  types: string[];
}

export default function PokemonTypes({ types }: PokemonTypesProps) {
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
