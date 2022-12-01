function rgb(r, g, b) {

  function toHex(val) {
    if (val < 0) { return "00"; }
    if (val > 255) { return "FF"; }
    return ("0" + Number(val).toString(16)).slice(-2).toUpperCase()
  }

  return toHex(r) + toHex(g) + toHex(b);
}



console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(0, 0, -20)); // returns 000000