# Big O Notation

## [Big O Cheat Sheet](href="https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent")

--------------------------------------------------
             BigO Rules
--------------------------------------------------

1. Worst Case
2. Remove Constants
3. Different Terms for Inputs
4. Drop Non Dominants

--------------------------------------------------
             What Causes Time in a Function?
--------------------------------------------------

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function Call (function())

--------------------------------------------------
             What causes Space Complexity?
--------------------------------------------------

- Variables
- Data Structures
- Function Call
- Allocations

--------------------------------------------------
            O(n) Linear Time (Loops)
--------------------------------------------------

```javascript
const large = new Array(25).fill('nemo');
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}
findNemo(large)
```

--------------------------------------------------
            0(1) Constant Time (Flat Line)
--------------------------------------------------

```javascript
const boxes = [0, 1, 2, 3, 4, 5];
function compressFirstBox(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}
compressFirstBox(boxes);
```

--------------------------------------------------
             O(n^2) Quadratic Time (Nested Loops)
--------------------------------------------------

```javascript
const stuff = ['koda', 'kai', 'nova', 'jude', 'kaldr', 'gary'];
function allPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
allPairs(stuff);
```


--------------------------------------------------
             O(2^n) Exponential Time (Recursion)
--------------------------------------------------

```javascript
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

--------------------------------------------------
             Logarithmic Time (Binary Search)
--------------------------------------------------
  
  ```javascript
  function binarySearch(array, key) {
    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;
  
    while (low <= high) {
      mid = Math.floor((low + high) / 2, 10);
      element = array[mid];
      if (element < key) {
        low = mid + 1;
      } else if (element > key) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
  ```
  