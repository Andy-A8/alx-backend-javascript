/* eslint-disable array-callback-return */
export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }
  return [...set]
    .filter((value) => (value !== undefined ? value.startsWith(string) : ''))
    .map((value) => (value !== undefined ? value.slice(string.length) : ''))
    .join('-');
}
