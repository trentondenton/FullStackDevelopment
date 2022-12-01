function findOdd(A) {
  let counts = new Map;
  for (let i = 0; i < A.length; i++) {
    counts.set(A[i], (counts.get(A[i]) || 0) + 1);
  }
  for (let [key, value] of counts) {
    if (value % 2 !== 0) {
      return key;
    }
  }

  return 0;
}
numArr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
numArr2 = [0, 1, 0, 1, 0]
console.log(findOdd(numArr))
console.log(findOdd(numArr2))