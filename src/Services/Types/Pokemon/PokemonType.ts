// ToDo - Name this better
export type Ability = {
  name: string;
  url: string;
};

export type Stat = {
  baseStat: number;
  name: string;
  url: string;
};

export type PokemonSpecies = {
  name: string;
  url: string;
};

export type PokemonType = {
  name: string;
  url: string;
};

export type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: Ability[];
  stats: Stat[];
  species: PokemonSpecies;
};
