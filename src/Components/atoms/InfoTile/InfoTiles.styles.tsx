import styled from "@emotion/styled";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
});

export const StyledButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: string }>(({ color }) => {
  return {
    padding: "1rem",
    backgroundColor: "white",
    // boxShadow: "2px 4px 4px -2px green",
    boxShadow: "0 4px 8px -4px green;",
    gap: "0.25rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",

    "&: hover": {
      backgroundColor: color,
    },
  };
});
