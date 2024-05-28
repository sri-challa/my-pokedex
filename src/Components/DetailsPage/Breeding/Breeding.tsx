import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import InfoTile, { InfoTileProps } from "../../atoms/InfoTile/InfoTile";
import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";
import { Capitalize } from "../../../utils/capitalize";

export default function Breeding() {
  const { speciesData } = useDetails();
  const { habitat, genderRate, growthRate, eggGroups, hatchCounter } =
    speciesData!;

  const tilesInfo: InfoTileProps[] = [
    {
      heading: "Habitat",
      body: Capitalize(habitat),
    },
    {
      heading: "Gender Distribution",
      body: <GenderDistribution genderRate={genderRate} />,
    },
    {
      heading: "Growth Rate",
      body: Capitalize(growthRate),
    },
    {
      heading: "Egg Groups",
      body: <EggGroups eggGroups={eggGroups} />,
    },
    {
      heading: "Egg Cycles",
      body: hatchCounter.toString(),
    },
  ];

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={"1rem"}>
      {tilesInfo.map((info) => (
        <GridItem key={info.heading}>
          <InfoTile heading={info.heading} body={info.body} />
        </GridItem>
      ))}
    </Grid>
  );
}

function GenderDistribution({ genderRate }: { genderRate: number }) {
  const femaleDistribution = genderRate / 8;
  const maleDistribution = 1 - femaleDistribution;
  return (
    <HStack gap="1rem">
      {genderRate === -1 ? (
        <Text textStyle="content">Genderless</Text>
      ) : (
        <>
          <Text textStyle="content">{`Male: ${maleDistribution * 100}%`}</Text>
          <Text textStyle="content">{`Female: ${
            femaleDistribution * 100
          }%`}</Text>
        </>
      )}
    </HStack>
  );
}

function EggGroups({ eggGroups }: { eggGroups: string[] }) {
  return (
    <HStack gap="1rem">
      {eggGroups.map((egg) => (
        <Text key={egg} textStyle="content">
          {Capitalize(egg)}
        </Text>
      ))}
    </HStack>
  );
}
