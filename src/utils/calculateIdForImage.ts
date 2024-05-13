export function calculateIdForImage(id: number) {
  if (id.toString().length === 1) {
    return "00" + id;
  } else if (id.toString().length === 2) {
    return "0" + id;
  }
  return id.toString();
}
