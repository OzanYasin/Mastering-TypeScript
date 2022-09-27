// !! Array Types !!

// Arrays can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.

// Note: These arrays only allow data of that one type inside them.

const activeUsers: string[] = [];
// This is one of those situations where we definitely annotate a variable.
activeUsers.push('Tony'); // Ok
// activeUsers.push(12); // Error

const ageList: number[] = [45, 33, 56, 13];
ageList[0] = 99; // Ok
// ageList[0] = 'hi' // Error

// ----------------------------------

// !! More Array Syntax !!

// const bools: Array<boolean> = []
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 4 });

const board: string[][] = [
  // It means two dimensional array.
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
];

const demo: number[][][] = [[[1]]]; // Three dimensional array.
