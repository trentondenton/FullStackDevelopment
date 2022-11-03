/*
Given five positive integers, find the minimum and maximum values that can be
calculated by summing exactly four of the five integers.Then print the respective
minimum and maximum values as a single line of two space - separated long integers.
*/

function miniMaxSum(arr) {
  // Sum of 4 smallest numbers
  let minSortedArr = arr.sort((a, z) => (a - z)).slice(0, 4).reduce((a, b) => a + b)
  // Sum of 4 largest numbers
  let maxSortedArr = arr.sort((a, z) => (z - a)).slice(0, 4).reduce((a, b) => a + b)

  console.log(`${minSortedArr} ${maxSortedArr}`)
}

// Terry's Solution
// let myArr = [1, 3, 5, 7, 9]
// miniMaxSum(myArr);

// function miniMaxSum(arr) {
//   let subarray = [];

//   if (arr.every((num) => num === arr[0])) {
//     arr = [arr[0] * 4, arr[0] * 4];
//   } else {
//     arr = arr.map((i) => {
//       subarray = arr.filter((num) => i !== num);
//       return subarray.reduce((a, b) => a + b);
//     }).sort((a, b) => a - b);
//   }
//   console.log(arr[0], arr[arr.length - 1]);
// }
