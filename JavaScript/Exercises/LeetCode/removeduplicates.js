var myFunction = function (arrayOne, slice) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] == slice) {
      arrayOne.splice(i, 1);
      i--;
    }
  }
  return arrayOne;
};
let z = [1, 2, 3, 4, 5, 6, 7, 8, 8, 2, 9];
console.log(myFunction(z,));