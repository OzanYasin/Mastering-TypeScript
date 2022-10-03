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
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} Jacket`);
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'Black');
const elton = new Player('Elton', 'Steele');
// elton.fullName = 'Something Else' // It's readonly on default. So, it throws Error
elton.score = 33;
// readonly -> Does not allow to change the property or method
// public -> Available anywhere
// private -> Only available in the exact class you define it
// protected -> Available in the class you defined on & any classes that inherit from that class
// Abstract Class -> We define a pattern, methods that must be implemented by a child class. It needs to exist in any class that extends that they inherit.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee('Betty', 'White', 95000);
console.log(betty.getPay());
const billy = new PartTimeEmployee('Billy', 'Billerson', 24, 1100);
console.log(billy.getPay());
// END
