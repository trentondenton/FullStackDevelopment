function romanToInt(x) {
  let romanInts = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let total = 0
  for (i = 0; i < x.length; i++) {
    let currentNum = romanInts[x[i]];
    const nextNum = romanInts[x[i]]

    if (currentNum < nextNum) {
      total += nextNum - currentNum;
      i++
    } else {
      total += currentNum
    }
  }
  return total;
}

console.log(romanToInt('XVI'));