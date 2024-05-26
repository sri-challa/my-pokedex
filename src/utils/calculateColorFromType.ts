export function calculateColorFromType(types: string[]) {
  const length = types.length;
  if (length > 1) {
    return types[length - 1];
  }
  return types[0];
}
