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
