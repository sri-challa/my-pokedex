import { keyframes, Image } from "@chakra-ui/react";

interface AnimatedImageProps {
  source: string;
  maxHeight?: string;
}

const upDowm = keyframes`  
  from {translateY(0)}   
  to {transform: translateY(8px)} 
`;

export default function AnimatedImage({
  source,
  maxHeight,
}: AnimatedImageProps) {
  const animation = `${upDowm} infinite 1s alternate`;
  return (
    <Image
      maxHeight={maxHeight ?? "250px"}
      src={source}
      padding="1rem"
      animation={animation}
      margin={"auto"}
    />
  );
}
