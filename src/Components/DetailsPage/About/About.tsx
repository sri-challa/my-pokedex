import { useDetails } from "../../../Pages/DetailsPage/state/useDetails";
import PokemonTypes from "../../atoms/PokemonTypes/PokemonTypes";

export default function About() {
  const { pokemonData } = useDetails();
  const { types } = pokemonData!;

  return (
    <>
      <span>Story</span>
      <p>story here</p>
      <span>Type</span>
      <PokemonTypes types={types} />

      <p>Introduced</p>
      <p>Shape</p>
      <p>color</p>
      <p>height</p>
      <p>weight</p>
      <p>color</p>
      <p>Stats</p>
    </>
  );
}
