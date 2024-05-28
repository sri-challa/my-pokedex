import { Badge, HStack, Text } from "@chakra-ui/react";
import { PokemonType } from "../../../Services/Types/Pokemon/PokemonType";

interface PokemonTypesProps {
  types: PokemonType[];
}

export default function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <HStack flexWrap={"wrap"}>
      {types.map(({ name }, index) => (
        <Badge
          variant="solid"
          colorScheme={name}
          textAlign="center"
          padding="0.15rem 1rem"
          key={index}
        >
          <Text textStyle="content">{name}</Text>
        </Badge>
      ))}
    </HStack>
  );
}
