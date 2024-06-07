import { Box } from "@chakra-ui/react";
import AnimatedImage from "../AnimatedImage/AnimatedImage";

interface ModalLoaderProps {
  height: string;
}

export default function ModalLoader({ height }: ModalLoaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height,
      }}
    >
      <AnimatedImage source="/assets/pokeBall.png" />
    </Box>
  );
}
