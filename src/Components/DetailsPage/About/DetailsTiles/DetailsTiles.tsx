import { Grid, GridItem } from "@chakra-ui/react";
import { calculateGeneration } from "../../../../utils/calculateGeneration";
import { Capitalize } from "../../../../utils/capitalize";
import InfoTile, { InfoTileProps } from "../../../atoms/InfoTile/InfoTile";
import { useDetails } from "../../../../Pages/DetailsPage/state/useDetails";

export default function DetailsTiles() {
  const { pokemonData, speciesData } = useDetails();
  const { height, weight } = pokemonData!;
  const { generation, shape, category, color } = speciesData!;

  const tilesInfo: InfoTileProps[] = [
    {
      heading: "Introduced",
      body: calculateGeneration(generation),
    },
    {
      heading: "Category",
      body: category,
    },
    {
      heading: "Shape",
      body: Capitalize(shape),
    },
    {
      heading: "Color",
      body: Capitalize(color),
    },
    {
      heading: "Height",
      body: `${height / 10}m`,
    },
    {
      heading: "Weight",
      body: `${weight / 10}kg`,
    },
  ];

  return (
    <Grid
      templateColumns={[null, "repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
      gap={"1rem"}
    >
      {tilesInfo.map((info) => (
        <GridItem key={info.heading}>
          <InfoTile heading={info.heading} body={info.body} />
        </GridItem>
      ))}
    </Grid>
  );
}
