import { Type } from "../../Services/Types/PokemonType/Type";

type MultiplierType = {
  value: number;
  url: string;
};

export function calculateDefenceMultipliers(types: Type[]) {
  const mutipliers = new Map<string, MultiplierType>();

  types.forEach((type) => {
    type.doubleDamageFrom.forEach((item) => {
      if (mutipliers.has(item.name)) {
        const exsistingValue = mutipliers.get(item.name);
        mutipliers.set(item.name, {
          value: (exsistingValue?.value ?? 1) * 2,
          url: item.url,
        });
      } else {
        mutipliers.set(item.name, { value: 2, url: item.url });
      }
    });
    type.halfDamageFrom.forEach((item) => {
      if (mutipliers.has(item.name)) {
        const exsistingValue = mutipliers.get(item.name);
        mutipliers.set(item.name, {
          value: (exsistingValue?.value ?? 1) * 0.5,
          url: item.url,
        });
      } else {
        mutipliers.set(item.name, { value: 0.5, url: item.url });
      }
    });
    type.noDamageFrom.forEach((item) => {
      if (mutipliers.has(item.name)) {
        const exsistingValue = mutipliers.get(item.name);
        mutipliers.set(item.name, {
          value: (exsistingValue?.value ?? 1) * 0,
          url: item.url,
        });
      } else {
        mutipliers.set(item.name, { value: 0, url: item.url });
      }
    });
  });

  return Array.from(mutipliers, ([name, value]) => ({
    value: value.value,
    type: {
      name,
      url: value.url,
    },
  }));
}

export function calculateAttackMultipliers(types: Type[]) {
  const mutipliers = new Map<string, MultiplierType>();

  types.forEach((type) => {
    type.doubleDamageTo.forEach((item) => {
      if (mutipliers.has(item.name)) {
        const exsistingValue = mutipliers.get(item.name);
        mutipliers.set(item.name, {
          value: (exsistingValue?.value ?? 1) * 2,
          url: item.url,
        });
      } else {
        mutipliers.set(item.name, { value: 2, url: item.url });
      }
    });
    type.halfDamageTo.forEach((item) => {
      if (mutipliers.has(item.name)) {
        const exsistingValue = mutipliers.get(item.name);
        mutipliers.set(item.name, {
          value: (exsistingValue?.value ?? 1) * 0.5,
          url: item.url,
        });
      } else {
        mutipliers.set(item.name, { value: 0.5, url: item.url });
      }
    });
    type.noDamageTo.forEach((item) => {
      if (mutipliers.has(item.name)) {
        const exsistingValue = mutipliers.get(item.name);
        mutipliers.set(item.name, {
          value: (exsistingValue?.value ?? 1) * 0,
          url: item.url,
        });
      } else {
        mutipliers.set(item.name, { value: 0, url: item.url });
      }
    });
  });

  return Array.from(mutipliers, ([name, value]) => ({
    value: value.value,
    type: {
      name,
      url: value.url,
    },
  }));
}
