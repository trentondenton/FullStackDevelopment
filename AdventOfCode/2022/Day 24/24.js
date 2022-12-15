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
    A: { X: 3, Y: 6, Z: 0 },
    b: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 }
  };

  const moveValues = { X: 1, Y: 2, Z: 3 };

  const getScore = (rounds) => {
    const [opponent, self] = rounds;
    const gameValues = map[opponent][self];

    return gameValues[self]

  }

  getScore(lines)





  dayOne();

