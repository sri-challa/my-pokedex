import InfoCard from "../InforCard/InfoCard";
import { usePokemon } from "../../Services/api/useFetchPokemon";
import { calculateIdForImage } from "../../utils/calculateIdForImage";

interface RandomPokemonListItem {
  id: number;
}
export default function RandomPokemonListItem({ id }: RandomPokemonListItem) {
  const { isLoading, data } = usePokemon(id.toString());

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {data && (
        <InfoCard
          imageUrl={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${calculateIdForImage(
            id
          )}.png`}
          types={data.types}
          name={data.name}
          pokedexId={data.id}
        />
      )}
    </>
  );
}
