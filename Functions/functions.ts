// Function Parameter Types

// In TS, we can specify the type of function parameters in a function definition.

// This allows TS to enforce the types for the values being passed into your function.

// * Typing parameters is just like typing variables.

// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation:
function greet(person: string = 'stranger'): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet('Tonya Harding');
doSomething('ChickenFace', 78, true);

// ---------------------------------

// !! Function Return Types !!

// We can specify the returned by a function. Even though TS can often infer this, I prefer the explicit annotations.

// Add the type annotation after function parameter list.

// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// ---------------------------------

// !! Anonymous Functions !!

// When TS can infer how an unnamed function is going to be called, it can automatically infer its parameters' types.

// Contextual Type Clues
const colors = ['red', 'orange', 'yellow'];
colors.map((color) => {
  return color.toUpperCase();
});

// ---------------------------------

// !! The Void Type !!

// Void is a return type for functions that don't return anything. It means just that - this function is void of any data.

// TS can infer this type fairly well, but sometimes it may want you to annotate a function with a void return explicitly.

// Void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// ---------------------------------

// Never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log('GAME LOOP RUNNING!');
  }
}
