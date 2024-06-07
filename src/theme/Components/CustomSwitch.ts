import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    backgroundColor: `${c}.300`,
    _checked: {
      backgroundColor: `${c}.700`,
    },
  };
});

const baseStyleThumb = defineStyle(() => {
  return {
    backgroundColor: "white",
    _checked: {
      backgroundColor: "white",
    },
  };
});

const baseStyle = definePartsStyle((props) => ({
  container: {},
  thumb: baseStyleThumb(),
  track: baseStyleTrack(props),
}));

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
});
