// Using Map
const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);

// Using Spread Operator
const mergeSortedArrays2 = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
