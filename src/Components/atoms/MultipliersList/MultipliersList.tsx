import { GridItem, Text } from "@chakra-ui/react";
import { PokemonType } from "../../../Services/Types/Pokemon/PokemonType";
import PokemonTypesList from "../PokemonTypesList/PokemonTypesList";
import { makeTypesClickable } from "../../../utils/makeTypesClickable";

interface MultipliersListProps {
  title: string;
  types: PokemonType[];
  isTypeClickabe: boolean;
}
/**
 * Wrap this with <Grid> with appropriate columns
 */
export default function MultipliersList({
  title,
  types,
  isTypeClickabe,
}: MultipliersListProps) {
  return (
    <>
      <GridItem>
        <Text textStyle="subHeading">{title}</Text>
      </GridItem>
      <GridItem>
        {types.length >= 1 ? (
          <PokemonTypesList
            types={isTypeClickabe ? makeTypesClickable(types) : types}
          />
        ) : (
          <Text textStyle="content">None</Text>
        )}
      </GridItem>
    </>
  );
}
