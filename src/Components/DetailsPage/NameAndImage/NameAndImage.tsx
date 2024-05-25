import { Text, Image, keyframes, Box } from "@chakra-ui/react";
import { Capitalize } from "../../../utils/capitalize";
import { calculateImageUrl } from "../../../utils/calculateImageUrl";
import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";
import { NameContainer } from "./NameAndImage.styles";

const upDowm = keyframes`  
  from {translateY(0)}   
  to {transform: translateY(8px)} 
`;
export default function NameAndImage() {
  const animation = `${upDowm} infinite 1s alternate`;
  const { pokemonData } = useDetails();
  const { name, id, types } = pokemonData!;
  return (
    <>
      <NameContainer>
        <Text fontSize="lg">#{id}</Text>
        <Text fontSize={["4xl", "5xl", "6xl"]}>{Capitalize(name)}</Text>
      </NameContainer>
      <Box bg={`${types[0]}.100`} borderRadius="16px">
        <Image
          src={calculateImageUrl(id)}
          alt={name}
          padding="1rem"
          animation={animation}
        />
      </Box>
    </>
  );
}
