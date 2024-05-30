import { InfoTileProps } from "../Components/atoms/InfoTile/InfoTile";
import { Type } from "../Services/Types/PokemonType/Type";
import { calculateGeneration } from "./calculateGeneration";
import { Capitalize } from "./capitalize";

export function contentsForMultipliersOnTypeModal(data: Type) {
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
  return contents;
}

export function contentsForInfoTileOnTypeModal(data: Type) {
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
  return tilesInfo;
}
