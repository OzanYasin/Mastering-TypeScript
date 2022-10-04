// !! Generics !!

// Generics allows us to define reusable functions and classes that work with multiple types rather than a single type.

// The syntax is...not pretty. They are used all over the place, so it's best to get comfortable with them :)

// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);
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
