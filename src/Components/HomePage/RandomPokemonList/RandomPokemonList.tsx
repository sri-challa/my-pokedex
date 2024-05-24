import InfoCard from "../InfoCard/InfoCard";
import { usePokemon } from "../../../Services/api/useFetchPokemon";
import { calculateImageUrl } from "../../../utils/calculateImageUrl";

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
          imageUrl={calculateImageUrl(id)}
          types={data.types}
          name={data.name}
          pokedexId={data.id}
        />
      )}
    </>
  );
}
