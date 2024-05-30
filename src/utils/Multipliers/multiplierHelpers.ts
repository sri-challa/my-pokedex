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

export function contentsForMultipliersTab(
  isAttack: boolean,
  attack: MultiplierData[],
  defence: MultiplierData[]
) {
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

  return contents;
}
