function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  let index = numbers.indexOf(min);
  let newArr = numbers.slice(0, index).concat(numbers.slice(index + 1));
  return newArr;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));