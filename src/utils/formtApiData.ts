import {
  AbilityApiEffectEntries,
  AbilityApiPokemon,
} from "../Services/Types/Ability/AbilityApiType";
import {
  PokemonApiAbility,
  PokemonApiStat,
} from "../Services/Types/Pokemon/PokemonAPIType";
import {
  SpeciesApiFlavourText,
  SpeciesApiGenera,
} from "../Services/Types/Species/SpeciesApiType";

export function formatDataForDescription(flavorTexts: SpeciesApiFlavourText[]) {
  const englishFlavorText = flavorTexts.filter(
    (item: SpeciesApiFlavourText) => item.language.name === "en"
  );
  return englishFlavorText[0].flavor_text;
}

export function formatDataForAbilities(abilities: PokemonApiAbility[]) {
  return abilities.map((item: PokemonApiAbility) => {
    return {
      name: item.ability.name,
      url: item.ability.url,
    };
  });
}

export function formatDataForStats(stats: PokemonApiStat[]) {
  return stats.map((item: PokemonApiStat) => {
    return {
      baseStat: item.base_stat,
      name: item.stat.name,
      url: item.stat.url,
    };
  });
}

export function formatDataForCategory(generas: SpeciesApiGenera[]) {
  const englishGenera = generas.filter(
    (item: SpeciesApiGenera) => item.language.name === "en"
  );
  return englishGenera[0].genus;
}

export function formatDataForAbilityDescription(
  effectEntries: AbilityApiEffectEntries[]
) {
  const englishDescription = effectEntries.filter(
    (item) => item.language.name === "en"
  );
  console.log("hi", englishDescription);
  return englishDescription[0].short_effect;
}

export function formatDataForPokemonNameFromAbility(
  pokemons: AbilityApiPokemon[]
) {
  return pokemons.map((pokemon) => pokemon.pokemon.name);
}
