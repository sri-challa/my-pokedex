import { Button } from "@chakra-ui/react";
import { Capitalize } from "../../../../../utils/capitalize";
import { useState } from "react";
import AbilitiesModal from "../AbilitiesModal.tsx/AbilitiesModal";

interface IndividualAbilityProps {
  abilityName: string;
  abilityUrl: string;
}
export default function IndividualAbility({
  abilityName,
  abilityUrl,
}: IndividualAbilityProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        key={abilityName}
        textDecoration="underline"
        colorScheme="teal"
        variant="link"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        {`${Capitalize(abilityName)}`}
      </Button>
      {openModal && (
        <AbilitiesModal
          isOpen={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          heading={Capitalize(abilityName)}
          url={abilityUrl}
        />
      )}
    </>
  );
}
