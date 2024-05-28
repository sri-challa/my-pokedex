import { PokemonType } from "../Pokemon/PokemonType";

export type Type = {
  doubleDamageFrom: PokemonType[];
  doubleDamageTo: PokemonType[];
  halfDamageFrom: PokemonType[];
  halfDamageTo: PokemonType[];
  noDamageFrom: PokemonType[];
  noDamageTo: PokemonType[];
  name: string;
};
