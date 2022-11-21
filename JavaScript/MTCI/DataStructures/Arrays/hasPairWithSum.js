// JavaScript Set() is a collection of unique values. It is similar to an array, but it cannot contain duplicate values. 
// The values in the Set are in no particular order. A value in the Set may only occur once; it is unique in the Set’s collection.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// Google Example Coding Interview Question
// https://www.youtube.com/watch?v=XKu_SEDAykw

// Time Complexity: O(n)
// Space Complexity: O(n)
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum)
        return true;
    }
  }

  return false;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9)