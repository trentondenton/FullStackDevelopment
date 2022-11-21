// Create a function that reverses a string:
// 'Hi My name is Trenton' should be:
// 'notnerT si eman yM iH'

// Solution 1
function reverseAString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return str;
  }
  return str.split('').reverse().join('');
}

console.log(reverseAString('Hi My name is Trenton'));

// Solution 2
const reverseAString2 = str => [...str].reverse().join('');

console.log(reverseAString2('Hi My name is Trenton'));
