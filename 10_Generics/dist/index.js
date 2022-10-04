"use strict";
// !! Generics !!
// Generics allows us to define reusable functions and classes that work with multiple types rather than a single type.
// The syntax is...not pretty. They are used all over the place, so it's best to get comfortable with them :)
// const nums: number[] = [];
const nums = [];
const colors = [];
const inputEl = document.querySelector('#username');
// console.dir(inputEl);
inputEl.value = 'Hacked!';
const btn = document.querySelector('.btn');
// -------------------------------
// !! Writing Our First Generic !!
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any {
//   return item;
// }
// Above functions are not coming handy.
// Generic functions are where it comes become useful.
//Syntax
function identity(item) {
    return item;
}
identity(7);
identity('hello');
//Common Language
function identity1(item) {
    return item;
}
// -------------------------------
// !! Writing Another Generic Function !!
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
// [4,5,6,7]
// [true, false, false]
// [{},{},{}]
console.log(getRandomElement(['a', 'b', 'c']));
console.log(getRandomElement([5, 2, 23, 44, 565, 101]));
console.log(getRandomElement([true, false, false]));
// !! Inferred Generic Type Parameters !!
// TypeScript is smart enough to understand what is the type of the function even if we don't mention it.
getRandomElement(['a', 'asd', 'cxv']);
getRandomElement([123, 23, 11, 44]);
// -------------------------------
// !! Generics with Multiple Types !!
// We can also write generic functions that have more than one type parameter.
function merge(object1, object2) {
    // If you have a second type parameter you would go with the new letter in the alphabet
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
