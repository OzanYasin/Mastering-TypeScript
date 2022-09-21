console.log('HELLO!');
console.log('GOODBYE!');
console.log(Math.round(3.41234123));
let pi: number = 3.14159;

// terminal -> tsc basics.ts
// It creates a basics.js that is ready to run safely.

// ---------------------------------

// !! Variable Types !!

// Assigning a basic type to a variable is easy - just add :Type after the variable name.
// Also called 'Type Annotation'

// let myVar: type = value

let movieTitle: string = 'Amadeus';
// movieTitle = 'Arrival' // Ok
// movieTitle = 23 // Not Ok
// movieTitle.upper // TS knows .upper method could not used by a string. So, its highlights it to warn.
movieTitle.toUpperCase(); // Ok

// ---------------------------------

// !! Type Inference !!

// Type Inference refers to the TypeScript compiler's ability to infer types from certain values in our code.

// TypeScript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward.

let tvShow = 'Olive Kitteridge'; // TS understands by it-self that variable is a string.

// ---------------------------------

// !! Any !!

// 'any' is an escape hatch! It turns off type checking for this variable so you can do your thing.

// NOTE: It sort of defeats the purpose of TS and types, so use it sparingly!

let myComplicatedData: any = "I'm going to be complicated!";
myComplicatedData = 1;
myComplicatedData = false;
myComplicatedData();
myComplicatedData.toUpperCase();

// ---------------------------------

// !! Delayed Initialization & Implicit Any

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
// let foundMovie; // In that case type is 'Any'. That's not what we want.
let foundMovie: string;

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}
