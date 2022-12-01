String.prototype.toAlternatingCase = function (word) {
  return this.split('').map((letter) => {
    return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
  }).join('');
}

console.log(''.toAlternatingCase())