import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useDetails } from "../../../../Pages/DetailsPage/state/useDetails";
import styled from "@emotion/styled";
import { calculateColorFromType } from "../../../../utils/calculateColorFromType";
import { Capitalize } from "../../../../utils/capitalize";

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export default function PokemonStats() {
  const { pokemonData } = useDetails();
  const { stats, types } = pokemonData!;

  return (
    <Grid templateColumns={"repeat(1, 1fr)"} gap="1rem" maxWidth="300px">
      {stats.map((stat) => (
        <GridItem key={stat.name}>
          <StyledContainer>
            <Text
              textStyle="subHeading"
              color={`${calculateColorFromType(types)}.500`}
            >
              {Capitalize(stat.name)}
            </Text>
            <Text textStyle="content">{stat.baseStat}</Text>
          </StyledContainer>
        </GridItem>
      ))}
    </Grid>
  );
}
