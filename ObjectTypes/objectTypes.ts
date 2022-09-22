// !! Objects !!

// Objects can be typed by declaring what the object should look like in the annotation.

// Accessing a property that isn't defined or performing operations without keeping types in mind will throw errors!

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: 'Thomas', last: 'Shelby' });

// ----------------------------------

let coordinate: { x: number; y: number } = { x: 24, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// We can have a function with a return type annotation of an object literal.
// Those examples not useful, but it's valid.

// ----------------------------------

// !! Excess Properties !!

// If you do it on line with an object literal, TS will complain about it.
// printName({first: 'Mick', last: 'Jagger', age: 45}) // Error

// But if you define it in a separate variable first, then it's only going to check for the properties that we outlined in.
// Any excess properties are ignored.
const singer = { first: 'Mick', last: 'Jagger', age: 45, isAlive: true };
printName(singer);

// ----------------------------------

// !! Type Alias !!

// Instead of writing out object types in an annotation, we can declare them separately in a type alias, which is simply the desired shape of the object.

// This allows us to make our code more readable and even reuse the types elsewhere in our code.

function doublePoint(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: point.x * 2, y: point.y * 2 };
}

// Instead of repeating that objects everywhere, what I can do is just make a type alias.

// We use the "type" keyword.

type Point = {
  x: number;
  y: number;
};

let coordinate2: Point = { x: 12, y: 4 };

function randomCoordinate2(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint2(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// ----------------------------------

// !! Nested Objects !!

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 1231234,
  credits: {
    producer: 'Phil Specter',
    writer: 'Alex North',
  },
};

calculatePayout(mySong);
printSong(mySong);

// ----------------------------------

// !! Optional Properties !!

// Question mark (?) makes it optional.

type Point2 = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point2 = { x: 1, y: 3 }; // Ok

// ----------------------------------

// !! The Readonly Modifier !!

type User = {
  readonly id: number; // That means it's read only, can not modified.
  username: string;
};

const user: User = {
  id: 12312,
  username: 'Alan',
};

// user.id = 21312; // Error

// ----------------------------------

// !! Intersection Types !!

// That is a way of combining more than one type.

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 4,
};
