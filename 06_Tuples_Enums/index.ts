// !! Tuples !!

// Tuples are special type exclusive to TS
// * They don't exist in JS

// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.

const stuff: (string | number)[] = ['asd', 'asasdaqqd', 'sdccxzdq', 12, 44];

// Tuples are different.
// Tuples are fixed in their length and in their types.

const color: [number, number, number] = [255, 255, 255]; // You should enter 3 number. Must be number type and also the length must be three as it represented.

// * Order does matter

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];

// After the array has been created, TS just lets push method works fine.
goodRes.push(123); // OK. This is just how JS arrays works.
goodRes.pop();

// Tuples are just important as order and length matters.
// Other than that, using object model is more clear and readable.

const response: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
];

// -----------------------------------------

//  !! Enums !!

// Enums allow us to define a set of named constants. We can give these constants numeric or string values.

// There's quite a few options when it comes to enums!

//Numeric Enums
enum ResponsesNumeric {
  no,
  yes,
  maybe,
}

//String Enums
enum ResponsesString {
  no = 'No',
  yes = 'Yes',
  maybe = 'Maybe',
}

//Heterogenous Enums
enum ResponsesHeterogenous {
  no = 0,
  yes = 1,
  maybe = 'Maybe',
}

enum OrderStatus { // Each one has been assigned a number.
  PENDING, //0
  SHIPPED, //1
  DELIVERED, //2
  RETURNED, //3
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(myStatus: OrderStatus) {
  return myStatus === OrderStatus.DELIVERED;
}

// They are set of named constants that we can reuse throughout our code.

enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

// Overall, the concept, as you've seen, is that it's just a set of different names that we can refer back to.

// ** Enums actually result in some additional code when it comes to compile to JS.

// END
