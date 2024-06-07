import { useToken, Grid, GridItem, Text, Box } from "@chakra-ui/react";
import { useFetchType } from "../../../../Services/api/useFetchType";
import { Type } from "../../../../Services/Types/PokemonType/Type";
import { Capitalize } from "../../../../utils/capitalize";
import InfoTile from "../../InfoTile/InfoTile";
import MultipliersList from "../../MultipliersList/MultipliersList";
import {
  contentsForInfoTileOnTypeModal,
  contentsForMultipliersOnTypeModal,
} from "../../../../utils/typeModalHelpers";
import PokemonsList from "../../../PokemonsList/PokemonsList";
import CustomModal from "../../CustomModal/CustomModal";
import ModalLoader from "../../ModalLoader/ModalLoader";

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
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      heading={Capitalize(heading)}
      backgroundColor={background}
      body={
        <>
          {isLoading && <ModalLoader height="800px" />}
          {data && <TypeModalBody data={data} />}
        </>
      }
    />
  );
}

function TypeModalBody({ data }: { data: Type }) {
  const tilesInfo = contentsForInfoTileOnTypeModal(data);
  const contents = contentsForMultipliersOnTypeModal(data);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
      <Text textStyle="subHeading" textAlign="center">
        Pokemon
      </Text>
      <PokemonsList pokemonsToDisplay={data.pokemon} pokemonsPerPage={4} />
    </Box>
  );
}
