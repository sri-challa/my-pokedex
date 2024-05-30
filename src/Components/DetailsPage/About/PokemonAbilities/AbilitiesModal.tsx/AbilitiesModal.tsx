import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  UnorderedList,
  ListItem,
  Divider,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useFetchAbility } from "../../../../../Services/api/useFetchAbilility";
import { calculateGeneration } from "../../../../../utils/calculateGeneration";
import { Capitalize } from "../../../../../utils/capitalize";
import { Ability } from "../../../../../Services/Types/Ability/AbilityType";
import ModalHeader from "../../../../atoms/ModalHeader/ModalHeader";
import { IconX } from "@tabler/icons-react";
import PokemonsList from "../../../../PokemonsList/PokemonsList";

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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={{ backgroundColor: "gray.300", maxWidth: "1200px" }}>
          <ModalHeader
            middleContent={
              <Text fontSize={["2xl"]}>{Capitalize(heading)}</Text>
            }
            rightContent={
              <IconButton
                backgroundColor="transparent"
                icon={<IconX />}
                aria-label={`Close ${heading} details`}
                onClick={onClose}
              />
            }
          />
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
  const introduceText = `Introduced in ${calculateGeneration(data.generation)}`;
  const abilitiesList = [
    data.description,
    introduceText,
    "Other pokemons with this ability:",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <UnorderedList>
        {abilitiesList.map((item, index) => (
          <ListItem key={index}>
            <Text textStyle="subHeading">{item}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      <PokemonsList pokemonsToDisplay={data.pokemons} pokemonsPerPage={4} />
    </Box>
  );
}
