// !! Tuples !!

// Tuples are special type exclusive to TS
// * They don't exist in JS

// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.

const stuff: (string | number)[] = ['asd', 'asasdaqqd', 'sdccxzdq', 12, 44];

// Tuples are different.
// Tuples are fixed in their length and in their types.

const color: [number, number, number] = [255, 255, 255]; // You should enter 3 number. Must be number type and also the length must be three as it represented.

// * Order does matter

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];

// After the array has been created, TS just lets push method works fine.
goodRes.push(123); // OK. This is just how JS arrays works.
goodRes.pop();

// Tuples are just important as order and length matters.
// Other than that, using object model is more clear and readable.

const response: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
];
