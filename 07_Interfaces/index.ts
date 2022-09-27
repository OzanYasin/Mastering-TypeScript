// !! Interfaces !!

// Interfaces serve almost the exact same purpose as type aliases
// (with a slightly different syntax)

// We can use them to create reusable, modular types that describe the shapes of objects.

// * Interfaces are the most commonly used pieces of TypeScript.

// * Both Type Alias & Interfaces are very similar. But we will discuss it at the end of this section.

// Interfaces allow us to describe the shape of objects and only objects.

// ** Can not use interface for like a union type.

interface Point {
  // Remember, this not an object, it's curly braces, but it's TS.
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 12 };

// ----------------------------------

// !! Readonly & Optional Interface Properties !!

interface Person {
  readonly id: number; // readonly property
  first: string;
  last: string;
  nickname?: string; // It means it's optional.
}

const thomas: Person = {
  id: 123123,
  first: 'Thomas',
  last: 'Hardy',
};

thomas.first = 'blablabla'; // Ok
// thomas.id = 2354234; // Error

// ----------------------------------

// !! Interface Methods !!

// We can also describe the shape of an object in terms of what methods it includes and what those methods accept and what types they return.

interface Person2 {
  first: string;
  last: string;
  nickname?: string;
  // sayHi(): string // It works fine.
  sayHi: () => string; // ! We are not writing a function.
  // In this case, it means sayHi must be a method and it return string.
}

const Jesse: Person2 = {
  first: 'Jesse',
  last: 'Pinkman',
  nickname: 'Chef',
  sayHi: () => {
    return 'Hello!';
  },
};

// ----------------------------------

// !! Interface Method Parameters !!

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 90,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

// ----------------------------------

// !! Reopening Interfaces !!

// Another thing we can do with interfaces is reopen and add new properties to interfaces after we've already described an interface.
// * Unlike types alias.

interface Person3 {
  name: string;
}

interface Person3 {
  age: number;
}

//Perfectly okay - Person has name & age

const person: Person3 = {
  name: 'Jerry',
  age: 42,
};

// * Can not reopen types just like interfaces.

// ----------------------------------

// !! Extending Interfaces !!

// So another thing we can do with interfaces that's really nice is extend an interface or essentially inherit from another interface similar to the way with object oriented programming.

// I can have a class that will inherit functionality  from a parent class.

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

// ** So instead of recreating all if this stuff from scratch, I can just add on the extended keyword and then whatever interface I want to extend or inherit types from.

interface ServiceDog extends Dog {
  // ServiceDog already is going to have name, age, breed and bark as required.
  job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 4,
  breed: 'Lab',
  bark() {
    return 'Bark!';
  },
  job: 'guide dog', // It has to be spelled correctly.
};

// ----------------------------------

// !! Interface Multiple Inheritance !!

// We are not limited to a single inheritance model where service dog can only extend dog.

// If I had another interface, I can extend from multiple.

interface Person4 {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person4, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 12312,
  email: 'pierre@gmail.com',
  level: 'senior',
  languages: ['JS', 'Python'],
};

// ----------------------------------

// !! Interfaces VS Type Alias !!

// 1 - Interfaces can only describe the shape of an object.

type Color = 'red' | 'blue';

// Can not do that with interfaces, due to it's not a object type.

// 2 - With interfaces, we can reopen them and add on right after they've already been created.

// And when it comes to extending properties or inheriting from another interface, we can use the extend keyword.

// END
