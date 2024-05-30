import PokemonsList from "../../Components/PokemonsList/PokemonsList";

export default function HomePage() {
  // const randomNumbers = Array.from({ length: 12 }, () =>
  //   Math.floor(Math.random() * 899)
  // );

  return (
    <div>
      <span>Search for Pokemon by name or its pokedex number</span>
      {/* <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
        ]}
        gap={4}
      >
        {randomNumbers.map((id, index) => (
          <button key={index}>
            <GridItem>
              <RandomPokemonListItem id={id} />
            </GridItem>
          </button>
        ))}
      </Grid> */}
      <PokemonsList
        pokemonsToDisplay={Array.from({ length: 100 }, (_, index) =>
          (index + 1).toString()
        )}
      />
    </div>
  );
}
