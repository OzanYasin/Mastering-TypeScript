"use strict";
// !! Generics !!
// Generics allows us to define reusable functions and classes that work with multiple types rather than a single type.
// The syntax is...not pretty. They are used all over the place, so it's best to get comfortable with them :)
// const nums: number[] = [];
const nums = [];
const colors = [];
const inputEl = document.querySelector('#username');
console.dir(inputEl);
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
