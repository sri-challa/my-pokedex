export type AbilityApiEffectEntries = {
  effect: string;
  language: {
    name: string;
    url: string;
  };
  short_effect: string;
};

export type AbilityApiPokemon = {
  is_hidden: false;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
};
