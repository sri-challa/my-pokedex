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

export type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: string[];
  abilities: Ability[];
  stats: Stat[];
  species: PokemonSpecies;
};
