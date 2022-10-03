// Using Loop
// function extraLongFactorials(n) {
//   let big = BigInt(n);
//   for (let i = n - 1; i > 0; i--) {
//     big *= BigInt(i);
//   }
//   return String(big);
// }
// console.log(extraLongFactorials(9999));

// Using Map
// function extraLongFactorials(n) {
//   let big = BigInt(n);
//   let arr = Array.from({ length: n }, (v, i) => i + 1);
//   arr.map((v) => (big *= BigInt(v)));
//   return String(big);
// }
// console.log(extraLongFactorials(9999));

// Using Recursion
// function extraLongFactorials(n) {
//   let total = BigInt(1);

//   function factorial(i) {
//     if (i === 1) {
//       return String(total);
//     } else {
//       total = total * BigInt(i);
//       return factorial(i - 1);
//     }
//   }
//   return factorial(n);
// }

// console.log(extraLongFactorials(9999));