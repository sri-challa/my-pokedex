import { useQueries, useQuery } from "@tanstack/react-query";
import { Type } from "../Types/PokemonType/Type";
import { PokemonType } from "../Types/Pokemon/PokemonType";
import { TypeApiPokemon } from "../Types/PokemonType/TypeAPI";

const typeDoesNotExist = "Type does not exist";

export const fetchType = async (url: string) => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();

    const formattedData: Type = {
      doubleDamageFrom: data.damage_relations.double_damage_from,
      doubleDamageTo: data.damage_relations.double_damage_to,
      halfDamageFrom: data.damage_relations.half_damage_from,
      halfDamageTo: data.damage_relations.half_damage_to,
      noDamageFrom: data.damage_relations.no_damage_from,
      noDamageTo: data.damage_relations.no_damage_to,
      name: data.name,
      typeId: data.id,
      generation: data.generation.name ?? "None",
      moveDamageClass: data.move_damage_class
        ? data.move_damage_class.name
        : "None",
      pokemon: data.pokemon.map((item: TypeApiPokemon) => item.pokemon.name),
    };

    return formattedData;
  } else {
    if (response.status === 404) {
      throw new Error(typeDoesNotExist);
    }
  }
};

export const useFetchType = (url: string) => {
  return useQuery({
    queryKey: ["getType", { url }],
    queryFn: () => fetchType(url),
    retry: (_count, { message }) => message !== typeDoesNotExist,
  });
};

export const useFetchMultipleTypes = (types: PokemonType[]) => {
  return useQueries({
    queries: types.map(({ url }) => {
      return {
        queryKey: ["getType", { url }],
        queryFn: () => fetchType(url),
        retry: (_count: number, { message }: { message: string }) =>
          message !== typeDoesNotExist,
      };
    }),
  });
};
