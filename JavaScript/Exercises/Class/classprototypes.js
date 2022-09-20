// Exercise 1: Complete the Movie App
// Routes for Reviews:

//   @desc Add a review
// @route /review/add
// star_rating
// review_text
// movie_id

// @desc Delete a review
// @route /review/delete
// review_id

// Exercise 2: Create a new String method
// Add a method to the String prototype called emojify
// This method should return the string with each character replaced by an emoji
String.prototype.emojify = function (str) {
  let emojis = ['😵', '😎', '😆', '😮', '😓', '🥶', '🐪', '🦾', '🤷‍♂️'];
  return str.replace(/[a-z]/gi, (char) => {
    let index = char.charCodeAt(0) % emojis.length;
    return emojis[index];
  });
}

let myStr = 'Gary is a bad dog';
console.log(String.prototype.emojify(myStr));

// Exercise 3: Class Inheritance
// Create a class called Character that takes in a name, and weapon.
// Create a method called attack that returns a string stating the name of the character and the weapon they are attacking with.

// Create a class called Warrior that has its own private property of useShield and method shield().
// Create a class called Mage that has its own private property and method spell().
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack = function () {
    return `${this.name} attacks with a ${this.weapon}`;
  }

  charType = function () {
    return `${this.name} is a ${this.type}`;
  }
}

class Warrior extends Character {
  #useShield = true;
  constructor(name, weapon) {
    super(name, weapon);
  }
  shield = function () {
    return `${this.name} blocks attack with a Shield`;
  }
}

class Mage extends Character {
  #useSpell = true;
  constructor(name, weapon) {
    super(name, weapon);
  }

  spell = function () {
    return `${this.name} casts a Spell`;
  }
}

const kai = new Warrior('Kai', 'Sword');
console.log(kai.shield());
console.log(kai.attack());

const koda = new Mage('Koda', 'Staff');
console.log(koda.spell());
console.log(koda.attack());

const gary = new Character('Gary', 'teeth');
console.log(gary.attack());
