let weights = {
  win: 1,
  lose: 2
}

function weightedLottery(weights) {
  let containerArray = [];

  Object.keys(weights).forEach(key => {
    for (let i = 0; i < weights[key]; i++) {
      containerArray.push(key);
    }
  })

  return containerArray[Math.random() * containerArray.length | 0];
}
console.log(weightedLottery(weights))


// Converting to Array
// let weights2 = [weights['win'], weights['lose']]

// function weightedLotteryTwo(weights) {
//   let container = [];
//   for (let i = 0; i < weights.length; i++) {
//     for (let j = 0; j < weights[i]; j++) {
//       container.push(i);
//     }
//   }
//   return container[Math.floor(Math.random() * container.length)];
// }
// console.log(weightedLotteryTwo(weights2))