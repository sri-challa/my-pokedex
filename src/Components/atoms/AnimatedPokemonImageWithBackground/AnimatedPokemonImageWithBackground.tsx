import { useState } from "react";
import { calculateImageUrl } from "../../../utils/calculateImageUrl";
import { Box, keyframes, Image } from "@chakra-ui/react";

interface AnimatedPokemonImageWithBackgroundProps {
  id: number;
  name: string;
  backgroundColor: string;
  maxHeight: string;
}

const upDowm = keyframes`  
  from {translateY(0)}   
  to {transform: translateY(8px)} 
`;

export default function AnimatedPokemonImageWithBackground({
  id,
  name,
  backgroundColor,
  maxHeight,
}: AnimatedPokemonImageWithBackgroundProps) {
  const animation = `${upDowm} infinite 1s alternate`;
  const [imageError, setImageError] = useState(false);

  return (
    <Box bg={backgroundColor} borderRadius="16px">
      <Image
        maxHeight={maxHeight}
        src={imageError ? "/assets/pokeBall.png" : calculateImageUrl(id)}
        alt={name}
        padding="1rem"
        animation={animation}
        margin={"auto"}
        onError={() => {
          setImageError(true);
        }}
      />
    </Box>
  );
}
