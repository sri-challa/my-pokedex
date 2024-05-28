import React from "react";
import { Type } from "../../../../Services/Types/PokemonType/Type";
import {
  calculateAttackMultipliers,
  calculateDefenceMultipliers,
} from "../../../../utils/calculateMultipliers";
import PokemonTypes from "../../../atoms/PokemonTypes/PokemonTypes";
import { Grid, GridItem, Text } from "@chakra-ui/react";

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

  const contents = [
    {
      damage: "Quadruple Damage (X4)",
      damageTypes: filterTypes(4, isAttack ? attack : defence),
    },
    {
      damage: "Double Damage (X2)",
      damageTypes: filterTypes(2, isAttack ? attack : defence),
    },
    {
      damage: "Half Damage (X0.5)",
      damageTypes: filterTypes(0.5, isAttack ? attack : defence),
    },
    {
      damage: "Quater Damage (X0.25)",
      damageTypes: filterTypes(0.25, isAttack ? attack : defence),
    },
    {
      damage: "No Damage (X0)",
      damageTypes: filterTypes(0, isAttack ? attack : defence),
    },
  ];

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={"0.5rem"}>
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
  );
}

type MultiplierData = {
  value: number;
  type: {
    name: string;
    url: string;
  };
};

function filterTypes(multiplier: number, data: MultiplierData[]) {
  switch (multiplier) {
    case 4: {
      return data.filter((type) => type.value === 4).map((type) => type.type);
    }
    case 2: {
      return data.filter((type) => type.value === 2).map((type) => type.type);
    }
    case 0.5: {
      return data.filter((type) => type.value === 0.5).map((type) => type.type);
    }
    case 0.25: {
      return data
        .filter((type) => type.value === 0.25)
        .map((type) => type.type);
    }
    case 0: {
      return data.filter((type) => type.value === 0).map((type) => type.type);
    }
    default: {
      return data.filter((type) => type.value === 1).map((type) => type.type);
    }
  }
}
