const lastDigit = function (str1, str2) {
  return Math.pow(parseInt(str1), parseInt(str2)) % 10;
}

console.log(lastDigit("4", "1"));