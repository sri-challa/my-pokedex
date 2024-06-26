import { Badge, HStack, Text } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import { PokemonType } from "../../../Services/Types/Pokemon/PokemonType";
import TypeModal from "./TypeModal/TypeModal";
import React from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    // close the modal when the url changes. Indicates we navigated to a new page.
    setOpenModal(false);
  }, [location.pathname]);

  return (
    <Suspense fallback={<span>Loading</span>}>
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
      {openModal && (
        <TypeModal
          isOpen
          onClose={() => {
            setOpenModal(false);
          }}
          heading={name}
          url={url}
        />
      )}
    </Suspense>
  );
}
