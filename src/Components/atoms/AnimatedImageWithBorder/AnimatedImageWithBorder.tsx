import { calculateImageUrl } from "../../../utils/calculateImageUrl";
import { Box, keyframes, Image } from "@chakra-ui/react";

interface AnimatedImageWithBorderProps {
  id: number;
  name: string;
  backgroundColor: string;
  maxHeight: string;
}

const upDowm = keyframes`  
  from {translateY(0)}   
  to {transform: translateY(8px)} 
`;

export default function AnimatedImageWithBorder({
  id,
  name,
  backgroundColor,
  maxHeight,
}: AnimatedImageWithBorderProps) {
  const animation = `${upDowm} infinite 1s alternate`;
  return (
    <Box bg={backgroundColor} borderRadius="16px">
      <Image
        maxHeight={maxHeight}
        src={calculateImageUrl(id)}
        alt={name}
        padding="1rem"
        animation={animation}
        margin={"auto"}
      />
    </Box>
  );
}
