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

###### Сортировка по убыванию
```
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
```
###### Поиск пути
```
function pathExist(list, start, end) {
  if (!start) return false;
  if (start === end) return true;
  if (start.visited) return false;
  start.visited = true;
  for (value of Object.values(start)) {
    if (!value.visited & pathExist(list, list[value], end)) return true;
  }
  return false;
}
```
###### Поиск элемента
```
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
```

### Часть 2. Работа с данными  
> Задания реализованы и расположены в каталоге по маршруту "Part 2. Working with data\sql_queries".  
> На странице представлен код запросов.

###### SQL запросы
```
№1
SELECT
    R.name
FROM
    Restaurants AS R
    JOIN Employees AS E ON R.id = E.restaurantId
    JOIN Positions AS P ON P.id = E.positionId
WHERE
    P.title = 'waiter'
GROUP BY
    R.name
HAVING
    COUNT(E.positionId) >= 2
ORDER BY
    R.name DESC

№2
INSERT INTO
    Employees (
        restaurantId,
        firstname,
        lastname,
        phone,
        positionId
    )
VALUES
    (3, 'Rustam', 'Kusiapkulov', '89658788851', '4')
```

### Часть 3. Frontend  
> Задание №3 реализовано и расположено в каталоге по маршруту "Part 3. Frontend\scripts\task_third".  
> Результат выполнения задания №3 представлен в консоли на  странице сверстанного сайта.

###### Асинхронный запрос на выборку данных
```
async function request() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    return data;
  } else {
    console.log("error", response.status);
  }
}

```

