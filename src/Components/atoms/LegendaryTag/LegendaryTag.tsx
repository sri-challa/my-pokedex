import { Badge, Tooltip } from "@chakra-ui/react";

export default function LengendaryTag() {
  return (
    <>
      <Tooltip label="Legendary Pokémon are a group of incredibly rare and often very powerful Pokémon">
        <Badge variant="outline" colorScheme="purple" padding="0.25rem">
          Legendary Pokemon
        </Badge>
      </Tooltip>
    </>
  );
}
