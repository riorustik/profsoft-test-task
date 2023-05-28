//№3
function arraySearch(item) {
  const sortedArray = [0, 9, 13, 24, 54, 85, 100];
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let center = Math.floor((start + end) / 2);
    if (sortedArray[center] === item) {
      return center;
    } else if (sortedArray[center] < item) {
      start = center + 1;
    } else {
      end = center - 1;
    }
  }
  return null;
}
const searchResult = arraySearch(13);
console.log(`Индекс искомого элемента: ${searchResult}`);
