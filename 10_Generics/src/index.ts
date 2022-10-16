// !! Generics !!

// Generics allows us to define reusable functions and classes that work with multiple types rather than a single type.

// The syntax is...not pretty. They are used all over the place, so it's best to get comfortable with them :)

// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// console.dir(inputEl);
inputEl.value = 'Hacked!';

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

// -------------------------------

// !! Writing Our First Generic !!

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

// Above functions are not coming handy.

// Generic functions are where it comes become useful.

//Syntax
function identity<Type>(item: Type): Type {
  return item;
}

identity<number>(7);
identity<string>('hello');

//Common Language
function identity1<T>(item: T): T {
  return item;
}

// -------------------------------

// !! Writing Another Generic Function !!

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

// [4,5,6,7]
// [true, false, false]
// [{},{},{}]

console.log(getRandomElement<string>(['a', 'b', 'c']));
console.log(getRandomElement<number>([5, 2, 23, 44, 565, 101]));
console.log(getRandomElement<boolean>([true, false, false]));

// !! Inferred Generic Type Parameters !!

// TypeScript is smart enough to understand what is the type of the function even if we don't mention it.

getRandomElement(['a', 'asd', 'cxv']);
getRandomElement([123, 23, 11, 44]);

// -------------------------------

// !! Generics with Multiple Types !!

// We can also write generic functions that have more than one type parameter.

function merge<T extends object, U extends object>(
  object1: T,
  object2: U
): T & U {
  // If you have a second type parameter you would go with the new letter in the alphabet
  // T and U has to be object due to 'extends'
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });

// --------

interface Lengthy {
  length: number;
}

//Generic
function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

//Without Generic
function printTripleLength(thing: Lengthy): number {
  return thing.length * 3;
}

printDoubleLength('asd');
// printDoubleLength(24);

// --------

function makeEmptyArray<T = number>(): T[] {
  // Default value of the T assigned to number
  return [];
}

const numsArray = makeEmptyArray(); // Default on number
const strgins = makeEmptyArray<string>(); // Changed to array of numbers

// -------------------------------

// !! Writing Generic Classes !!

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(element: T) {
    this.queue.push(element);
  }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();

// END
