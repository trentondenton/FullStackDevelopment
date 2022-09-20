// Exercise 1:
var myFunction = function (arrayOne, slice) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] == slice) {
      arrayOne.splice(i, 1);
      i--;
    }
  }
  return arrayOne;
};

let z = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9, 9, 10, 11];
console.log(myFunction(z, 9));

// Exercise 2:
let myString = '';

for (let i = 1; i < 8; i++) {
  myString += i
  console.log(myString)
}

// Exercise 3:
numbersArray = [1, 25, 67, 4, 9, 10];

let largestNumber = function (numbersArray) {
  let largestNum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > largestNum) {
      largestNum = numbersArray[i]
    }
  }
  return largestNum
}

console.log(largestNumber(numbersArray))

//   Exercise 4:
function myFunctionAgain(numOne, numTwo, math) {
  switch (math) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    case '/':
      return numOne / numTwo;
    default:
      break;
  }
}
console.log(myFunctionAgain(3, 2, '+'))

// Exercise 5:
let year = 2000
function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 === 0 || year % 4 === 0) {
    return 'Is a leap year';
  }
  else {
    return 'Is not a leap year';
  }
}
console.log(isLeapYear(year));

// Exercise 6:
let temp = 97;
const tempConverter = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9
}

console.log(tempConverter(temp))

// Exercise 7:
let gradeBook = {
  1: {
    name: 'Trenton',
    grade: 60
  },
  2: {
    name: 'Antione',
    grade: 80
  },
  3: {
    name: 'Antonio',
    grade: 82
  }
}

function gradingPapers(gradeBook) {
  for (let grade in gradeBook) {
    if (gradeBook[grade].grade >= 70) {
      return `${gradeBook[grade].name} passed with a score of ${gradeBook[grade].grade}%`
    }
    else {
      return `${gradeBook[grade].name} failed with a score of ${gradeBook[grade].grade}%`
    }
  }
}
console.log(gradingPapers(gradeBook));