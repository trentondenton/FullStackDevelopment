const nthElement = (arr, i = 0) => (i > 0 ? arr.slice(i, i + 1) : arr.slice(i))[0];
const arr = ['a', 'b', { key: 'value' }, 1]

console.log(nthElement(arr, -2));
console.log(nthElement(arr, 2));