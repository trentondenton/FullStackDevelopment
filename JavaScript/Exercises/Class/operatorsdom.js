// Exercise 1
let movies = {
  movieOne: {
    name: 'The Fantastic 4',
    year: 2015,
    status: 'watched'
  },
  movieTwo: {
    name: 'The Silver Surfer',
    year: 2007,
    status: 'watched'
  },
  movieThree: {
    name: 'The Black Panther',
    year: 2018,
    status: 'watched'
  },
  movieFour: {
    name: 'Spiderman',
    year: 2002,
    status: 'watched'
  };
  function MovieStatus(movies) {
    for (let i in movies) {
  (movies[i].status === 'watched' ? console.log(`I have seen ${movies[i].name}`) : console.log(`I want to see ${movies[i].name}`))
}
}
MovieStatus(movies)

// Exercise 2:
let aString = "Hello"

let reverseString = (aString) => {
  let splitString = aString.split('').reverse().join('')
  return splitString
}
console.log(reverseString(aString))

// Exercise 3:
let item = "$"
function makingShapes(item) {
  for (let i = 0; i <= 7; i++) {
    if (i % 2 != 0) {
      console.log(item.repeat(i))
    }
  }
  for (let i = 5; i >= 1; i--) {
    if (i % 2 != 0) {
      console.log(item.repeat(i))
    }
  }
}
makingShapes(item)

// Exercise 4:
document.getElementById('search-field-small').value = 'Searching';

// Exercise 5:
function getPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(pokeInfo => { console.log(pokeInfo) })
}
getPokemon('flygon');
