//-------------------------------------
// Advent of Code 2022
// Trenton Denton
// Day 25:  Calorie Counting
// 12/2/2022
// https://adventofcode.com/2022/day/1
//-------------------------------------



// Part One
const fs = require('fs');
const path = require('path');

// Read Input & Clean Data
const input = fs.readFileSync(path.join(__dirname, 'myinput.txt'), 'utf8');
let lines = input.split('\n').map(line => line.trim());
let count = 0;

// Grab Indexes, Split into Array
const dayOne = () => {
  // --------------------------------
  // Part One
  // --------------------------------

  // Helper Function
  function splitArray(arr, val) {
    const result = [[]]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        result.push([])
      } else {
        result[result.length - 1].push(arr[i])
      }
    }
    return result
  }

  let elves = splitArray(lines, '');

  // Change Calories to Integers
  let parseInts = elves.map((elf) => {
    return elf
      .map((calories) => { return parseInt(calories) })
  })

  // Get Total Calories per Elf
  let totals = parseInts.map((elf) => {
    return elf.reduce((a, b) => a + b, 0)
  })

  // Get Max Total Calories
  let max = Math.max(...totals);
  console.log(max);

  // --------------------------------
  // Part Two
  // --------------------------------

  // Get Total Calories of Top 3 Elves
  let sortedElves = totals.sort((a, b) => b - a);
  let topThree = sortedElves.slice(0, 3);
  let topThreeTotal = topThree.reduce((a, b) => a + b, 0);
  console.log(topThreeTotal);
}
dayOne();