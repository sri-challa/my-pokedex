import { Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <div>
      <span>Search for Pokemon by name or its pokedex number</span>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
        ]}
        gap={6}
      >
        <GridItem bg="green.100">
          <span>Pokemon here</span>
          <Image
            boxSize="150px"
            src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem w="100%" h="10" bg="red.100" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="red.100" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </div>
  );
}
