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
import InfoTile from "../../InfoTile/InfoTile";
import ModalHeader from "../../ModalHeader/ModalHeader";
import MultipliersList from "../../MultipliersList/MultipliersList";
import {
  contentsForInfoTileOnTypeModal,
  contentsForMultipliersOnTypeModal,
} from "../../../../utils/typeModalHelpers";

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
  const tilesInfo = contentsForInfoTileOnTypeModal(data);
  const contents = contentsForMultipliersOnTypeModal(data);

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
          <MultipliersList
            title={content.damage}
            types={content.damageTypes}
            isTypeClickabe={false}
            key={content.damage}
          />
        ))}
      </Grid>
    </Box>
  );
}
