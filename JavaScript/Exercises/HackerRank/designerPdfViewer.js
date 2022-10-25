let h = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'.split(' ').map(Number);
console.log(h)
let word = 'abc';

function designerPdfViewer(h, word) {
  let maxHeight = h.map((letter, index) => {
    return word.charCodeAt(index) - 97;
  }).reduce((max, index) => {
    return h[index] > max ? h[index] : max;
  }, 0);
  console.log(maxHeight * word.length);
  return maxHeight * word.length;
}

designerPdfViewer(h, word);