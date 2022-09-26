// !! Union Types !!

// Union types allow us to give a few different possible types. If the eventual value's type is included, TS will be happy :).

// We can create a union type by using the single | (pipe character) to separate the types we want to include. It's like saying, "This thing is allowed to be this, this, or this". TS will enforce it from there.

let age: number | string = 21;
age = 23;
age = '24';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 312.354, long: 23.321 };

// Type Narrowing w/ Union Types

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);
printAge('24');

function calculateTax(price: number | string, tax: number) {
  // price could be number or string
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
}

console.log(calculateTax(45, 0.07)); // 3.15
console.log(calculateTax('$45', 0.7)); // 3.15

// Unions - Narrowing the Type

// Narrowing the Type is simply doing a type check before working with a value. If your value is a string you may want to use it differently than if you got a number.

// Since unions allow multiple types for a value, it's good to check what came through before working with it.

// * TS is smart enough to know what we're working with.

const stuff: (number | string)[] = [1, 2, 3, 'das']; // Ok
// const stuff: number[] | string[] = [1, 2, 3, 'asd']; // Error

const coords: (Point | Loc)[] = [];
coords.push({ lat: 312.123, long: 23.312 });
coords.push({ x: 212, y: 12 });
