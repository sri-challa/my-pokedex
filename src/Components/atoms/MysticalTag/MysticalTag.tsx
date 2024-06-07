import { Badge, Tooltip } from "@chakra-ui/react";

export default function MysticalTag() {
  return (
    <>
      <Tooltip label="Mythical Pokémon are a group of Pokémon seen so rarely in the Pokémon world that some question their very existence, with some even going so far as to worship them as deities.">
        <Badge variant="outline" colorScheme="pink" padding="0.25rem">
          Mystical Pokemon
        </Badge>
      </Tooltip>
    </>
  );
}
