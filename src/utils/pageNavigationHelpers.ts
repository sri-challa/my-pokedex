const PokemonsPerPage = 6;

export function calculatePokemonsForPage(
  pageSize: number,
  currentList: string[]
) {
  let startIndex = 0;
  let endIndex = PokemonsPerPage;
  // We only show 6 pokemons at once one the screen.
  // Therefore only fetch those pokemon.
  if (pageSize > 1) {
    startIndex = (pageSize - 1) * PokemonsPerPage;
    endIndex = pageSize * PokemonsPerPage;
  }
  return currentList.slice(startIndex, endIndex);
}

export function calculateStartAndEndIndex(pageSize: number) {
  return {
    startIndex: (pageSize - 1) * PokemonsPerPage,
    endIndex: pageSize * PokemonsPerPage,
  };
}

export function calculateCurrentPageText(pageSize: number, maxLength: number) {
  const startIndex = calculateStartAndEndIndex(pageSize).startIndex + 1;
  const endIndex = calculateStartAndEndIndex(pageSize).endIndex;
  return `Showing ${startIndex} - ${endIndex} of ${maxLength}`;
}
