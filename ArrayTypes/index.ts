// Array Types

// Arrays can be typed using a type annotation followed by empty array brackets, like number[] for an array of numbers.

// Note: These arrays only allow data of that one type inside them.

const activeUsers: string[] = [];
// This is one of those situations where we definitely annotate a variable.
activeUsers.push('Tony'); // Ok
// activeUsers.push(12); // Error

const ageList: number[] = [45, 33, 56, 13];
ageList[0] = 99; // Ok
// ageList[0] = 'hi' // Error
