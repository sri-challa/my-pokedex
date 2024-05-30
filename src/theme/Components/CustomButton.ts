import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// Docs: https://v2.chakra-ui.com/docs/components/icon-button/theming

const customIconOnly = defineStyle({
  padding: 0,
  height: "40px",
  width: "40px",
  borderRadius: "full",

  _hover: {
    backgroundColor: "gray.200",
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "Reddit Mono",
  },
  variants: { customIconOnly },
});
