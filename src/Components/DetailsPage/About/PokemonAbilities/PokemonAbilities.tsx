import styled from "@emotion/styled";
import { useDetails } from "../../../../Pages/DetailsPage/state/useDetails";
import { UnorderedList } from "@chakra-ui/react";
import IndividualAbility from "./IndividualAbility/IndividualAbility";

const StyledContainer = styled("div")({
  display: "flex",
  gap: "1rem",
});

export default function PokemonAbilitites() {
  const { pokemonData } = useDetails();
  const { abilities } = pokemonData!;

  return (
    <>
      <StyledContainer>
        <UnorderedList sx={{ display: "flex", gap: "2rem" }}>
          {abilities.map((ability) => (
            <IndividualAbility
              abilityName={ability.name}
              abilityUrl={ability.url}
              key={ability.name}
            />
          ))}
        </UnorderedList>
      </StyledContainer>
    </>
  );
}
