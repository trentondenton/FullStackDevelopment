const removeFirstAndLast = arr => {
  if (arr.length >= 3) {
    return arr.slice(1, -1)
  } else {
    throw "You need at least 3 elements in the array.";
  }
}

let element = [1, 2, 3, 4, 5, 6];
let ele = ['A', 'B', 'C', 'D', 'E'];

console.log(removeFirstAndLast(element));
console.log(removeFirstAndLast(ele));
