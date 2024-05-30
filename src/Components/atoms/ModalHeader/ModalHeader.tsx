import { Grid, GridItem } from "@chakra-ui/react";

interface HeaderProps {
  leftContent?: React.ReactNode;
  middleContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}
export default function ModalHeader({
  leftContent,
  middleContent,
  rightContent,
}: HeaderProps) {
  return (
    <Grid
      gridTemplateColumns={["repeat(3, 1fr)"]}
      textAlign={"center"}
      alignItems={"center"}
      padding="1.5rem"
    >
      <GridItem>{leftContent}</GridItem>
      <GridItem>{middleContent}</GridItem>
      <GridItem marginLeft="auto">{rightContent}</GridItem>
    </Grid>
  );
}
