import { Text } from "@chakra-ui/react";
import { Container } from "./HeadingAndDescription.styles";

export interface HeadingAndDescriptionProps {
  heading: string;
  content: string | React.ReactNode;
}
export default function HeadingAndDescription({
  heading,
  content,
}: HeadingAndDescriptionProps) {
  return (
    <Container>
      <Text textStyle="heading">{heading}</Text>
      {typeof content === "string" ? (
        <Text textStyle="content">{content}</Text>
      ) : (
        <>{content}</>
      )}
    </Container>
  );
}
