import { Box, Text } from "@chakra-ui/react";

export interface InfoTileProps {
  heading: string;
  body: string | React.ReactNode;
}
export default function InfoTile({ heading, body }: InfoTileProps) {
  return (
    <Box
      sx={{
        padding: "1rem",
        bg: "white",
        boxShadow: `0 4px 8px -4px black`,
        gap: "0.25rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text textStyle="subHeading">{heading}</Text>
      {typeof body === "string" ? (
        <Text textStyle="content">{body}</Text>
      ) : (
        body
      )}
    </Box>
  );
}
