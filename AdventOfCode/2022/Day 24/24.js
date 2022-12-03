//-------------------------------------
// Advent of Code 2022
// Trenton Denton
// Day 24:  Rock Paper Scissors
// 12/3/2022
// https://adventofcode.com/2022/day/2
//-------------------------------------

// Part One
const fs = require('fs');
const path = require('path');

// Read Input & Clean Data
const input = fs.readFileSync(path.join(__dirname, 'myinput.txt'), 'utf8');
const lines = input.trim().split('\n').map((i) => i.split(' '));

// Helper Map
// Opponent: A = Rock, B = Paper, C = Scissors
// Self: X = Rock, Y = Paper, Z = Scissors
const dayOne = () => {

  // Part One
  const map = {
    A: { name: 'rock', points: 1 },
    X: { name: 'rock', points: 1 },
    B: { name: 'paper', points: 2 },
    Y: { name: 'paper', points: 2 },
    C: { name: 'paper', points: 3 },
    Z: { name: 'paper', points: 3 },
  };

  let opponentTotal = 0;
  let selfTotal = 0;

  let totals = lines.map((line) => {
    const opponent = map[line[0]].points
    const self = map[line[1]].points;
    let diff = Math.abs(opponent - self);

    if (opponent === self) {
      return self + 3;
    } else if ((diff === 1 && self > opponent) || (self === 1 && opponent === 3)) {
      return self + 6;
    }
    else {
      return self
    }
  });

  console.log(totals.reduce((a, b) => a + b, 0));

  // Part Two
  ;
}





dayOne();

