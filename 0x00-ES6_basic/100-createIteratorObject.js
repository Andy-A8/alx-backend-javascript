export default function createIteratorObject(report) {
  const marray = [];
  for (const item of Object.values(report.allEmployees)) {
    marray.push(...item);
  }

  return marray;
}
