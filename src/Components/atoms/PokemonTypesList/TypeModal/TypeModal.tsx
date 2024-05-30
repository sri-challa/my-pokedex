import {
  Modal,
  ModalOverlay,
  ModalContent,
  Divider,
  ModalBody,
  useToken,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { useFetchType } from "../../../../Services/api/useFetchType";
import { Type } from "../../../../Services/Types/PokemonType/Type";
import { Capitalize } from "../../../../utils/capitalize";
import InfoTile, { InfoTileProps } from "../../InfoTile/InfoTile";
import { calculateGeneration } from "../../../../utils/calculateGeneration";
import React from "react";
import PokemonTypes from "../PokemonTypesList";
import ModalHeader from "../../ModalHeader/ModalHeader";

interface TypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  url: string;
}

export default function TypeModal({
  isOpen,
  onClose,
  heading,
  url,
}: TypeModalProps) {
  const { data, isLoading } = useFetchType(url);
  const [background] = useToken("colors", [`${heading}.200`]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        sx={{ backgroundColor: `${background}`, maxWidth: "900px" }}
      >
        {/* <ModalHeader>
          <Text fontSize={["4xl"]}>{Capitalize(heading)}</Text>
        </ModalHeader>
        <ModalCloseButton /> */}
        <ModalHeader
          middleContent={<Text fontSize={["2xl"]}>{Capitalize(heading)}</Text>}
          rightContent={<span>Hi</span>}
        />

        <Divider borderColor="black" />
        <ModalBody>
          {isLoading && <p>Loading</p>}
          {data && <TypeModalBody data={data} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function TypeModalBody({ data }: { data: Type }) {
  const tilesInfo: InfoTileProps[] = [
    {
      heading: "Introduced",
      body: calculateGeneration(data.generation),
    },
    {
      heading: "Type Id",
      body: data.typeId.toString(),
    },
    {
      heading: "Move Damage Class",
      body: Capitalize(data.moveDamageClass),
    },
  ];

  const contents = [
    {
      damage: "Double Damage From",
      damageTypes: data.doubleDamageFrom,
    },
    {
      damage: "Double Damage To",
      damageTypes: data.doubleDamageTo,
    },
    {
      damage: "Half Damage From",
      damageTypes: data.halfDamageFrom,
    },
    {
      damage: "Half Damage To",
      damageTypes: data.halfDamageTo,
    },
    {
      damage: "No Damage From",
      damageTypes: data.noDamageFrom,
    },
    {
      damage: "No Damage To",
      damageTypes: data.noDamageTo,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Grid
        templateColumns={[null, "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={"1rem"}
      >
        {tilesInfo.map((info) => (
          <GridItem key={info.heading}>
            <InfoTile heading={info.heading} body={info.body} />
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns={["repeat(1, 1fr)", "0.5fr 1fr"]} gap={"0.5rem"}>
        {contents.map((content) => (
          <React.Fragment key={content.damage}>
            <GridItem>
              <Text textStyle="subHeading">{content.damage}</Text>
            </GridItem>
            <GridItem>
              {content.damageTypes.length >= 1 ? (
                <PokemonTypes types={content.damageTypes} />
              ) : (
                <Text textStyle="content">None</Text>
              )}
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
