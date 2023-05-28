//№1
const originalArray = [1, 16, 23, 2, 25, 14, 32, 3, 90, 24];
let array = originalArray.slice();
function inAscendingOrder(arr, left, right) {
  let index;
  if (arr.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? arr.length - 1 : right;
    index = swap(arr, left, right);
    if (left < index - 1) {
      inAscendingOrder(arr, left, index - 1);
    }
    if (index < right) {
      inAscendingOrder(arr, index, right);
    }
  }
  return arr;
}
function swap(arr, left, right) {
  let center = arr[~~((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < center) {
      i++;
    }
    while (arr[j] > center) {
      j--;
    }
    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}
const result = inAscendingOrder(array);
console.log(
  `Сортировка по возрастанию:\n Исходный массив: ${originalArray}\n Отсортированный массив: ${result}`
);
