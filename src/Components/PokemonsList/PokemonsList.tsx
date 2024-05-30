import { Box, Button, Grid, GridItem, HStack, Text } from "@chakra-ui/react";

import IndividualPokemon from "./IndividualPokemon/IndividualPokemon";
import { useEffect, useState } from "react";
import {
  calculateCurrentPageText,
  calculatePokemonsForPage,
} from "../../utils/pageNavigationHelpers";

interface PokemonsListProps {
  pokemonsToDisplay: string[];
}

export default function PokemonsList({ pokemonsToDisplay }: PokemonsListProps) {
  const [pageSize, setPageSize] = useState<number>(1);
  const [currentList, setCurrentList] = useState([] as string[]);

  useEffect(() => {
    setCurrentList(calculatePokemonsForPage(pageSize, pokemonsToDisplay));
  }, [pageSize, pokemonsToDisplay]);

  return (
    // <Box border={"5px solid black"} padding={"2rem"}>
    <>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        {currentList.map((name, index) => (
          <button key={index}>
            <GridItem>
              <Box
                sx={{
                  padding: "1rem",
                  width: "100%",
                  border: "solid 1px gray",
                  borderRadius: "16px",
                  "&: hover": {
                    boxShadow: `0 4px 8px -4px black`,
                  },
                }}
              >
                <IndividualPokemon name={name} />
              </Box>
            </GridItem>
          </button>
        ))}
      </Grid>
      <HStack sx={{ justifyContent: "flex-end", gap: "1rem" }}>
        <Button
          isDisabled={pageSize === 1}
          onClick={() => {
            setPageSize(pageSize - 1);
          }}
        >
          Previous Page
        </Button>
        <Text textStyle="content">
          {calculateCurrentPageText(pageSize, pokemonsToDisplay.length)}
        </Text>
        <Button
          disabled={currentList.includes(currentList[currentList.length - 1])}
          onClick={() => {
            setPageSize(pageSize + 1);
          }}
        >
          Next Page
        </Button>
      </HStack>
    </>
    // </Box>
  );
}
