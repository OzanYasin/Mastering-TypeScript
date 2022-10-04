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
