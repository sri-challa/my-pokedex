import { Text, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { useFetchAbility } from "../../../../../Services/api/useFetchAbilility";
import { calculateGeneration } from "../../../../../utils/calculateGeneration";
import { Capitalize } from "../../../../../utils/capitalize";
import { Ability } from "../../../../../Services/Types/Ability/AbilityType";
import PokemonsList from "../../../../PokemonsList/PokemonsList";
import CustomModal from "../../../../atoms/CustomModal/CustomModal";

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
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      heading={Capitalize(heading)}
      body={
        <>
          {isLoading && <p>Loading</p>}
          {data && <AbilitiesModalBody data={data} />}
        </>
      }
    />
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
