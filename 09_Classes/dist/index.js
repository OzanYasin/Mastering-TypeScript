"use strict";
class Player {
    // public readonly first: string;
    // public readonly last: string;
    // public score: number = 0;
    constructor(first, last, _score = 0 // Parameter Properties (Also known as shortcut syntax)
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore;
    }
}
const elton = new Player('Elton', 'Steele');
// elton.fullName = 'Something Else' // It's readonly on default. So, it throws Error
elton.score = 33;
// readonly -> Does not allow to change the property or method
// public -> It makes clear that property or method is reachable from outside.
// private -> It makes property or method is only accessible or usable inside the class.
