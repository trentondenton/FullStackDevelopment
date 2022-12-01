// Cube at the bottom will be n^3
// Cube above that will be (n-1)^3
// N^3 + (n-2)^3 + (n-3)^3 + ... + 1^3 = m
// if it exists, return n (the number of cubes)
// if it doesn't exist, return -1

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}