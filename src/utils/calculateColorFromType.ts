import { PokemonType } from "../Services/Types/Pokemon/PokemonType";

export function calculateColorFromType(types: PokemonType[]) {
  const length = types.length;
  if (length > 1) {
    return types[length - 1];
  }
  return types[0].name;
}
