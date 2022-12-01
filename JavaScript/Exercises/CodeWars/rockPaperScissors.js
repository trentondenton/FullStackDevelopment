const rps = (p1, p2) => {
  let map = new Map();
  map.set('rock', 'scissors');
  map.set('scissors', 'paper');
  map.set('paper', 'rock');
  if (p1 === p2) {
    return 'Draw!';
  }
  if (map.get(p1) === p2) {
    return 'Player 1 won!';
  }
  return 'Player 2 won!';
};

console.log(rps('rock', 'scissors'));