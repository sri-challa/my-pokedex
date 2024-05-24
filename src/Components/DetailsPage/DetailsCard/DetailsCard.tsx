import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NameAndImage from "../NameAndImage/NameAndImage";
import PokemonInfo from "../PokemonInfo/PokemonInfo";

export default function DetailsCard() {
  return (
    <Grid
      templateColumns={[null, null, "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={"0.5rem"}
    >
      <GridItem textAlign={useBreakpointValue({ base: "center", md: "left" })}>
        <NameAndImage />
      </GridItem>
      <GridItem>
        <PokemonInfo />
      </GridItem>
    </Grid>
  );
}
