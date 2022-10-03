"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
}
const elton = new Player('Elton', 'Steele');
// readonly -> Does not allow to change the property or method
// public -> It makes clear that property or method is reachable from outside.
// private -> It makes property or method is only accessible or usable inside the class.
