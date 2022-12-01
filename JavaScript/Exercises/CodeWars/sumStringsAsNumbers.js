function sumStrings(a, b) {
  function test(i) {
    return i === '' ? BigInt(0) : BigInt(parseInt(i));
  }
  return String(test(a) + test(b))
}

console.log(sumStrings('', '5'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))