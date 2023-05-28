//№1.2
const arr = [1, 16, 23, 2, 25, 14, 32, 3, 90, 24];
let items = arr.slice()
function inDescendingOrder(items) {
  for (let i = items.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (items[j] < items[j + 1]) {
        let temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }
  return items;
}
const resultSort = inDescendingOrder(items);
console.log(
  `Сортировка по убыванию:\n Исходный массив: ${arr}\n Отсортированный массив: ${resultSort}`
);