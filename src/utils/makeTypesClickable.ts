import { PokemonType } from "../Services/Types/Pokemon/PokemonType";

export function makeTypesClickable(types: PokemonType[]) {
  return types.map(({ name, url }) => {
    return {
      name,
      url,
      isClickable: true,
    };
  });
}
