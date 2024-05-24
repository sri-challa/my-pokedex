export type PokemonApiTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonApiAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonApiStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
