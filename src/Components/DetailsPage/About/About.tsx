import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";
import PokemonTypes from "../../atoms/PokemonTypes/PokemonTypes";
import HeadingAndDescription, {
  HeadingAndDescriptionProps,
} from "../../atoms/HeadingAndDescription/HeadingAndDescription";
import { Box } from "@chakra-ui/react";
import DetailsTiles from "./DetailsTiles/DetailsTiles";
import Stats from "./PokemonStats/PokemonStats";
import PokemonAbilitites from "./PokemonAbilities/PokemonAbilities";

export default function About() {
  const { pokemonData, speciesData } = useDetails();
  const { types } = pokemonData!;
  const { description } = speciesData!;

  const contents: HeadingAndDescriptionProps[] = [
    {
      heading: "Story",
      content: description,
    },
    {
      heading: "Type",
      content: <PokemonTypes types={types} />,
    },
    {
      heading: "Details",
      content: <DetailsTiles />,
    },
    {
      heading: "Abilities",
      content: <PokemonAbilitites />,
    },
    {
      heading: "Stats",
      content: <Stats />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {contents.map((item) => (
        <HeadingAndDescription
          key={item.heading}
          heading={item.heading}
          content={item.content}
        />
      ))}
    </Box>
  );
}
