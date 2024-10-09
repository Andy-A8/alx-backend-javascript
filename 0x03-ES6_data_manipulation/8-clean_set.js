export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }
  const result = Array.from(set)
    .filter((value) => value.startsWith(string))
    .map((value) => value.slice(string.length));

  return result.join('-');
}
