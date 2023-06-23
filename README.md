# Тестовое задание для направления «Frontend-разработчик»  
### Школа разработки ПрофСофт 2023  
---
###### Демонстрация
<dl>
  <dd>
    <dl>
      <dd>
        <h3><a href="https://riorustik.github.io/profsoft-test-task/">GitHub Pages</a></h3>
      </dd>
    </dl>
  </dd>
</dl> 


### Часть 1. Алгоритмы  
> Задания реализованы и расположены в каталоге по маршруту "Part 1. Algorithms\scripts\".  
> На странице представлен код функций. Результат работы функций представлен в консоли.

###### Сортировка по возрастанию
```
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
```

### Часть 2. Работа с данными  
> Задания реализованы и расположены в каталоге по маршруту "Part 2. Working with data\sql_queries".  
> На странице представлен код запросов.
>  
### Часть 3. Frontend  
> Задание №3 реализовано и расположено в каталоге по маршруту "Part 3. Frontend\scripts\task_third".  
> Результат выполнения задания №3 представлен в консоли на  странице сверстанного сайта.

