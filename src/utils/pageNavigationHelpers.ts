export function calculatePokemonsForPage(
  pageNumber: number,
  currentList: string[],
  pokemonsPerPage = 6
) {
  let startIndex = 0;
  let endIndex = pokemonsPerPage;
  // We only show a fixed no of pokemons at once one the screen.
  // Therefore only fetch those pokemon.
  if (pageNumber > 1) {
    startIndex = (pageNumber - 1) * pokemonsPerPage;
    endIndex = pageNumber * pokemonsPerPage;
  }
  return currentList.slice(startIndex, endIndex);
}

export function calculateStartAndEndIndex(
  pageNumber: number,
  pokemonsPerPage = 6
) {
  return {
    startIndex: (pageNumber - 1) * pokemonsPerPage,
    endIndex: pageNumber * pokemonsPerPage,
  };
}

export function calculateCurrentPageText(
  pageSize: number,
  maxLength: number,
  pokemonsPerPage = 6
) {
  const startIndex =
    calculateStartAndEndIndex(pageSize, pokemonsPerPage).startIndex + 1;
  const endIndex = calculateStartAndEndIndex(
    pageSize,
    pokemonsPerPage
  ).endIndex;
  return `${startIndex} - ${endIndex} of ${maxLength}`;
}
