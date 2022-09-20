import { greeting } from './components/helper';
import { default as add, multiply, divide } from './components/math';
// import { multiply } from './components/math';
// import { divide } from './components/math';

console.log('Greeting:', greeting)
console.log('Multiply:', multiply(7, 7))
console.log('Divide:', divide(14, 2))
console.log('Add:', add(6, 1))