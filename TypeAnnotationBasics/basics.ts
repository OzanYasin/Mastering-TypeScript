console.log('HELLO!');
console.log('GOODBYE!');
console.log(Math.round(3.41234123));
let pi: number = 3.14159;

// terminal -> tsc basics.ts
// It creates a basics.js that is ready to run safely.

// ---------------------------------

// Variable Types
// Assigning a basic type to a variable is easy - just add :Type after the variable name.
// Also called 'Type Annotation'

// let myVar: type = value

let movieTitle: string = 'Amadeus';
// movieTitle = 'Arrival' // Ok
// movieTitle = 23 // Not Ok
// movieTitle.upper // TS knows .upper method could not used by a string. So, its highlights it to warn.
movieTitle.toUpperCase(); // Ok
