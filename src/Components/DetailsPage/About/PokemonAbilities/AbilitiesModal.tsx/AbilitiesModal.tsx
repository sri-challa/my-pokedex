import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useFetchAbility } from "../../../../../Services/api/useFetchAbilility";
import { calculateGeneration } from "../../../../../utils/calculateGeneration";
import { Capitalize } from "../../../../../utils/capitalize";
import { useNavigate } from "react-router-dom";
import { Ability } from "../../../../../Services/Types/Ability/AbilityType";

interface AbilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  url: string;
}
export default function AbilitiesModal({
  isOpen,
  onClose,
  heading,
  url,
}: AbilitiesModalProps) {
  const { data, isLoading } = useFetchAbility(url);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"2xl"}>
        <ModalOverlay />
        <ModalContent sx={{ backgroundColor: "gray.300" }}>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <Divider borderColor="black" />
          <ModalBody>
            {isLoading && <p>Loading</p>}
            {data && <AbilitiesModalBody data={data} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function AbilitiesModalBody({ data }: { data: Ability }) {
  const navigate = useNavigate();
  const introduceText = `Introduced in ${calculateGeneration(data.generation)}`;
  const abilitiesList = [
    data.description,
    introduceText,
    "Other pokemons with this ability:",
  ];

  return (
    <UnorderedList>
      {abilitiesList.map((item, index) => (
        <ListItem key={index}>
          <Text textStyle="subHeading">{item}</Text>
        </ListItem>
      ))}
      <UnorderedList sx={{ paddingTop: "1rem" }}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={2}
        >
          {data.pokemons.map((pokemon) => (
            <GridItem key={pokemon}>
              <ListItem>
                <Button
                  textDecoration="underline"
                  colorScheme="teal"
                  variant="link"
                  onClick={() => {
                    navigate(`/pokemon/${pokemon}`);
                  }}
                >
                  {Capitalize(pokemon)}
                </Button>
              </ListItem>
            </GridItem>
          ))}
        </Grid>
      </UnorderedList>
    </UnorderedList>
  );
}
