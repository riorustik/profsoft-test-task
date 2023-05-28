//№2
var list = {
  A: ["B", "C"],
  B: ["D", "F"],
  C: ["K", "L"],
  D: ["M", "N"],
  E: ["P", "X"],
  F: ["Y", "Z"],
  K: ["C"],
  L: ["C"],
  M: ["D"],
  N: ["D"],
  P: ["E"],
  X: ["E"],
  Y: ["F"],
  Z: ["F"],
};
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
let boolResult = pathExist(list, list.A, list.L);
console.log(`Искомый пусть: ${boolResult}`); // вернёт true
boolResult = pathExist(list, list.E, list.F);
console.log(`Искомый пусть: ${boolResult}`); // вернёт false
