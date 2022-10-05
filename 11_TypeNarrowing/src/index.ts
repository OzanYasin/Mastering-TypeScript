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

// Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.

// This is helpful in avoiding errors when values might be null or undefined.

const el = document.getElementById('idk');
if (el) {
  // TS knows el has to be HTML Element
  el;
} else {
  // TS knows el has to be null
  el;
}

//Another Example
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log('YOU DID NOT PASS IN A WORD!');
  }
};

// --------------------------

// !! Equality Narrowing !!

// equality Type Guards involve comparing types to each other before doing certain operations with values.

// By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    // Do not use double equals (==) in that case. Always use triple equals (===)
    return [x, y];
  }
}

// --------------------------

// !! in Operator Narrowing !!

// JavaScript's  in operator helps check if a certain property exist in an object.

// This means we can use it to check if a value exist in an object, according to its type alias or aliases, before working with it.

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
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

// !! Instance of Narrowing !!
