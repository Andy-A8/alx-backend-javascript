/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [idx, item] of Object.entries(reportWithIterator)) {
    result += `${item}`;

    if (parseInt(idx) !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return result;
}
