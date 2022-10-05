function triple(value: number | string) {
  // We can't just do value times three, because TS is smart and it knows, this could be a string or a number. TS won't let us do it.
  // return value * 3 // Error
}

// !! Typeof Guards !!

// typeof Type Guards involve simply doing a type check before working with a value.

// Since unions allow multiple types for a value, we can first check what came through before working with it.

// So this concept of a guard is basically just using typeof in a conditional it's a fancy phrase that refers to doing that below code block ->

function triple2(value: number | string) {
  if (typeof value === 'string') return value.repeat(3);
  // TS knows the only way we make it here is if value is a number
  // So it's not only analyzing the conditionals, it's analyzing the return statements, and it knows the function is done.
  return value * 3; // TS understand it should only return number due to if statement above.
}

// --------------------------

// !! Truthiness Guards !!

// Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.

// This is helpful in avoiding errors when values might be null or undefined.

const el = document.getElementById('idk');
if (el) {
  // TS knows el has to be HTML Element
  el;
} else {
  // TS knows el has to be null
  el;
}

//Another Example
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log('YOU DID NOT PASS IN A WORD!');
  }
};

// --------------------------

// !! Equality Narrowing !!

// equality Type Guards involve comparing types to each other before doing certain operations with values.

// By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    // Do not use double equals (==) in that case. Always use triple equals (===)
    return [x, y];
  }
}

// --------------------------

// !! in Operator Narrowing !!

// JavaScript's  in operator helps check if a certain property exist in an object.

// This means we can use it to check if a value exist in an object, according to its type alias or aliases, before working with it.

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
  if ('episodeDuration' in media) {
    // TS knows it has to be TVShow type
    return media.episodeDuration * media.numEpisodes;
  }
  // TS knows else is Movie type
  return media.duration;
}

getRunTime({ title: 'Amadeus', duration: 140 });
getRunTime({ title: 'Spongebob', numEpisodes: 80, episodeDuration: 30 });

// --------------------------

// !! instanceof Narrowing !!

// instanceof is a Javascript operator that allow us to check if one thing is an instance of another (remember prototype? :))

// This can help us narrow types when working with things like classes

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date().toUTCString());
  }
}

class User {
  public username: string;
  constructor(username: string) {
    this.username = username;
  }
}

class Company {
  constructor(public name: string) {}
}

// It's a better option to use instanceof instead of in keyword to work with classes.

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// --------------------------

// !! Type Predicates !!

// TypeScript allows us to write custom functions that can narrow the type of a value. These functions have a very special return type called a type predicate.

// A predicate takes the form parameterName is Type

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Dog | Cat): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Dog | Cat) {
  if (isCat(animal)) {
    animal;
    return 'Meow';
  } else {
    animal;
  }
}

// --------------------------

// !! discriminated unions !!

// A common pattern in TypeScript involves creating a literal property that is common across multiple types.

// We can then narrow the type using that literal property.

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
  isAlive: boolean;
}

// So the concept of a discriminated union is that we add something called a discriminant, which is just a fancy name for a property that all our types will have in common.

type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      // animal
      return 'Oink!';
    case 'cow':
      // animal
      return 'Moooo!';
    case 'rooster':
      // animal
      return 'Cockadoodledoo!';
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
};

// console.log(getFarmAnimalSound(stevie));

// --------------------------

// !! Never (Exhaustiveness) Checking !!

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: 'sheep';
}

function getFarmAnimalSound2(animal: FarmAnimal) {
  switch (animal.kind) {
    case 'pig':
      // animal
      return 'Oink!';
    case 'cow':
      // animal
      return 'Moooo!';
    case 'rooster':
      // animal
      return 'Cockadoodledoo!';
    case 'sheep':
      // animal
      return 'Baaa';
    default:
      // We should never make it here, if we handled all cases correctly
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
    // By doing that, we'll know if we need to implement another case in here if we get an error because of this exhaustive check.
  }
}

// END
