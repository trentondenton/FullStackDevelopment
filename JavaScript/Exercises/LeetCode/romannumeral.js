function romanToInt(x) {
  let romanInts = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };


  // Single Line Solution
  // Create Array, Map Indexes, Check if Next Value > Than Current Value, TRUE: Make Negative (to Subtract in Reduce), FALSE: Keep Current Value, Reduce to Add All Values.
  return [...x].map((char, i) => romanInts[char] < romanInts[x[i + 1]] ? -Math.abs(romanInts[char]) : romanInts[char]).reduce((a, b) => a + b)

  // Initial Solution
  // let total = 0
  // for (i = 0; i < x.length; i++) {
  //   let currentNum = romanInts[x[i]];
  //   let nextNum = romanInts[x[i + 1]]

  //   if (currentNum < nextNum) {
  //     total += nextNum - currentNum;
  //     i++
  //   } else {
  //     total += currentNum
  //   }
  // }
  // return total;
}
console.log(romanToInt('MCMXCIV'));