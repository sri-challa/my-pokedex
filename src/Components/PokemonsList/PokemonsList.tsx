import {
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";

import IndividualPokemon from "./IndividualPokemon/IndividualPokemon";
import { useEffect, useState } from "react";
import {
  calculateCurrentPageText,
  calculatePokemonsForPage,
} from "../../utils/pageNavigationHelpers";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface PokemonsListProps {
  pokemonsToDisplay: string[];
  pokemonsPerPage?: number;
}

export default function PokemonsList({
  pokemonsToDisplay,
  pokemonsPerPage,
}: PokemonsListProps) {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [currentList, setCurrentList] = useState([] as string[]);

  // We might not need this.
  useEffect(() => {
    setCurrentList(
      calculatePokemonsForPage(pageNumber, pokemonsToDisplay, pokemonsPerPage)
    );
  }, [pageNumber, pokemonsPerPage, pokemonsToDisplay]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "300px",
      }}
    >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={4}
      >
        {currentList.map((name, index) => (
          <GridItem key={index}>
            <IndividualPokemon name={name} />
          </GridItem>
        ))}
      </Grid>
      <HStack sx={{ justifyContent: "flex-end", gap: "1rem" }}>
        <IconButton
          variant="customIconOnly"
          isDisabled={pageNumber === 1}
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
          aria-label="Go back to previous page"
          icon={<IconChevronLeft />}
        />
        <Text textStyle="content">
          {calculateCurrentPageText(
            pageNumber,
            pokemonsToDisplay.length,
            pokemonsPerPage
          )}
        </Text>
        <IconButton
          variant="customIconOnly"
          isDisabled={currentList.includes(
            pokemonsToDisplay[pokemonsToDisplay.length - 1]
          )}
          onClick={() => {
            pageNumber;
            setPageNumber(pageNumber + 1);
          }}
          aria-label="Go to next page"
          icon={<IconChevronRight />}
        />
      </HStack>
    </Box>
  );
}
