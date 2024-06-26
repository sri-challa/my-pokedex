import { Text } from "@chakra-ui/react";
import { Capitalize } from "../../../utils/capitalize";
import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";
import { NameContainer } from "./NameAndImage.styles";
import AnimatedPokemonImageWithBackground from "../../atoms/AnimatedPokemonImageWithBackground/AnimatedPokemonImageWithBackground";

export default function NameAndImage() {
  const { pokemonData } = useDetails();
  const { name, id, types } = pokemonData!;
  return (
    <>
      <NameContainer>
        <Text fontSize="lg">#{id}</Text>
        <Text fontSize={["4xl", "5xl", "6xl"]}>{Capitalize(name)}</Text>
      </NameContainer>
      <AnimatedPokemonImageWithBackground
        id={id}
        name={name}
        backgroundColor={`${types[0].name}.100`}
        maxHeight={"700px"}
      />
    </>
  );
}
