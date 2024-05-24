import { calculateImageUrl } from "../../../utils/calculateImageUrl";
import { Image, keyframes, useBreakpointValue } from "@chakra-ui/react";

interface ResponsiveImageProps {
  id: number;
  name: string;
}

const spin = keyframes`  
  from {translateY(0)}   
  to {transform: translateY(8px)} 
`;
export default function ResponsiveImage({ id, name }: ResponsiveImageProps) {
  // const [isLarge] = useMediaQuery(["(min-width: 992px)"]);

  const spinAnimation = `${spin} infinite 1s alternate`;

  return (
    <Image
      //   boxSize={isLarge ? "350px" : "250px"}
      //   boxSize={useBreakpointValue({ base: "250px", lg: "80%" })}
      boxSize={"75%"}
      src={calculateImageUrl(id)}
      alt={name}
      padding="1rem"
      display="block"
      margin="auto"
      animation={spinAnimation}
    />
  );
}
