function triple(value: number | string) {
  // We can't just do value times three, because TS is smart and it knows, this could be a string or a number. TS won't let us do it.
  // return value * 3 // Error
}

// !! Typeof Guards !!

// typeof Type Guards involve simply doing a type check before working with a value.

// Since unions allow multiple types for a value, we can first check what came through before working with it.

// So this concept of a guard is basically just using typeof in a conditional it's a fancy phrase that refers to doing that below code block ->

function triple2(value: number | string) {
  if (typeof value === 'string') return value.repeat(3);
  // TS knows the only way we make it here is if value is a number
  // So it's not only analyzing the conditionals, it's analyzing the return statements, and it knows the function is done.
  return value * 3; // TS understand it should only return number due to if statement above.
}

// --------------------------

// !! Truthiness Guards !!
