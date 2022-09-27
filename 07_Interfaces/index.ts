// !! Interfaces !!

// Interfaces serve almost the exact same purpose as type aliases
// (with a slightly different syntax)

// We can use them to create reusable, modular types that describe the shapes of objects.

// * Interfaces are the most commonly used pieces of TypeScript.

//An interface
interface Person {
  name: string;
  age: number;
}

//Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning on ${person.age}!`;
};

sayHappyBirthday({ name: 'Henry', age: 24 });

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
