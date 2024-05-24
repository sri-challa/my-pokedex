function calculateIdForImage(id: number) {
  if (id.toString().length === 1) {
    return "00" + id;
  } else if (id.toString().length === 2) {
    return "0" + id;
  }
  return id.toString();
}

export function calculateImageUrl(id: number) {
  const imageId = calculateIdForImage(id);
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageId}.png`;
}
