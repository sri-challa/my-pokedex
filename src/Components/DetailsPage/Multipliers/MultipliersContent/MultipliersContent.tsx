import { Type } from "../../../../Services/Types/PokemonType/Type";
import {
  calculateAttackMultipliers,
  calculateDefenceMultipliers,
} from "../../../../utils/Multipliers/calculateMultipliers";
import { Grid } from "@chakra-ui/react";
import MultipliersList from "../../../atoms/MultipliersList/MultipliersList";
import { contentsForMultipliersTab } from "../../../../utils/Multipliers/multiplierHelpers";

interface MultipliersContentProps {
  data: Type[];
  isAttack: boolean;
}
export default function MultipliersContent({
  data,
  isAttack,
}: MultipliersContentProps) {
  const attack = calculateAttackMultipliers(data);
  const defence = calculateDefenceMultipliers(data);
  const contents = contentsForMultipliersTab(isAttack, attack, defence);

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={"0.5rem"}>
      {contents.map((content) => (
        <MultipliersList
          title={content.damage}
          types={content.damageTypes}
          isTypeClickabe={true}
          key={content.damage}
        />
      ))}
    </Grid>
  );
}
