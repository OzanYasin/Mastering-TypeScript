"use strict";
function triple(value) {
    // We can't just do value times three, because TS is smart and it knows, this could be a string or a number. TS won't let us do it.
    // return value * 3 // Error
}
// !! Typeof Guards !!
// typeof Type Guards involve simply doing a type check before working with a value.
// Since unions allow multiple types for a value, we can first check what came through before working with it.
// So this concept of a guard is basically just using typeof in a conditional it's a fancy phrase that refers to doing that below code block ->
function triple2(value) {
    if (typeof value === 'string')
        return value.repeat(3);
    // TS knows the only way we make it here is if value is a number
    // So it's not only analyzing the conditionals, it's analyzing the return statements, and it knows the function is done.
    return value * 3; // TS understand it should only return number due to if statement above.
}
// --------------------------
// !! Truthiness Guards !!
// Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.
// This is helpful in avoiding errors when values might be null or undefined.
const el = document.getElementById('idk');
if (el) {
    // TS knows el has to be HTML Element
    el;
}
else {
    // TS knows el has to be null
    el;
}
//Another Example
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log('YOU DID NOT PASS IN A WORD!');
    }
};
// --------------------------
// !! Equality Narrowing !!
// equality Type Guards involve comparing types to each other before doing certain operations with values.
// By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.
function someDemo(x, y) {
    if (x === y) {
        // Do not use double equals (==) in that case. Always use triple equals (===)
        return [x, y];
    }
}
function getRunTime(media) {
    if ('episodeDuration' in media) {
        // TS knows it has to be TVShow type
        return media.episodeDuration * media.numEpisodes;
    }
    // TS knows else is Movie type
    return media.duration;
}
getRunTime({ title: 'Amadeus', duration: 140 });
getRunTime({ title: 'Spongebob', numEpisodes: 80, episodeDuration: 30 });
// --------------------------
// !! instanceof Narrowing !!
// instanceof is a Javascript operator that allow us to check if one thing is an instance of another (remember prototype? :))
// This can help us narrow types when working with things like classes
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date().toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
// It's a better option to use instanceof instead of in keyword to work with classes.
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return 'Meow';
    }
}
