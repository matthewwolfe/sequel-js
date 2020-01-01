export function sortByProperty(array, property) {
  return array.sort((a, b) => a[property].localeCompare(b[property]));
}
