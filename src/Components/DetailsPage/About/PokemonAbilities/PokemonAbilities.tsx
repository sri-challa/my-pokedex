import { useDetails } from "../../../../Pages/DetailsPage/state/useDetails";
import { HStack } from "@chakra-ui/react";
import IndividualAbility from "./IndividualAbility/IndividualAbility";

export default function PokemonAbilitites() {
  const { pokemonData } = useDetails();
  const { abilities } = pokemonData!;

  return (
    <>
      <HStack gap="1rem" flexWrap="wrap">
        {abilities.map((ability) => (
          <IndividualAbility
            abilityName={ability.name}
            abilityUrl={ability.url}
            key={ability.name}
          />
        ))}
      </HStack>
    </>
  );
}
