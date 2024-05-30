import { Badge, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PokemonType } from "../../../Services/Types/Pokemon/PokemonType";
import TypeModal from "./TypeModal/TypeModal";
import React from "react";

type PokemonTypesListItem = PokemonType & {
  isClickable?: boolean;
};
interface PokemonTypesListProps {
  types: PokemonTypesListItem[];
}

export default function PokemonTypesList({ types }: PokemonTypesListProps) {
  return (
    <HStack flexWrap={"wrap"}>
      {types.map(({ name, url, isClickable }) => (
        <React.Fragment key={name}>
          {isClickable ? (
            <ClickableType name={name} url={url} />
          ) : (
            <Badge
              variant="solid"
              colorScheme={name}
              textAlign="center"
              padding="0.15rem 1rem"
            >
              <Text textStyle="content">{name}</Text>
            </Badge>
          )}
        </React.Fragment>
      ))}
    </HStack>
  );
}

function ClickableType({ name, url }: { name: string; url: string }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Badge
        variant="solid"
        colorScheme={name}
        textAlign="center"
        padding="0.15rem 1rem"
        onClick={() => {
          setOpenModal(true);
        }}
        cursor={"pointer"}
        aria-label={`Click on ${name} to view in detail`}
      >
        <Text textStyle="content">{name}</Text>
      </Badge>
      <TypeModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        heading={name}
        url={url}
      />
    </>
  );
}
