// Given 2 array, create a function that lets a user know (true/false)
// whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ----------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.
// ----------------------
// 2 parameters - arrays - no size limit
// return true or false



// Time Complexity: O(a * b)
// Space Complexity: O(1)
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containsCommonItem(array1, array2);


// Time Complexity: O(a + b)
// Space Complexity: O(a)
function containsCommonItem2(arr1, arr2) {
  // Loop through first array and create object where properties === items in array.
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // Loop through second array to see if item already exists in object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem2(array1, array2);


// Time Complexity: O(a + b)
// Space Complexity: O(a)
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

containsCommonItem3(array1, array2);