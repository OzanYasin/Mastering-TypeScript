// Working with the DOM

// TypeScript does know about the document, it does know about DOM elements and all the different element types and add event listener and query selector.

// document -> type definition, it's shown every type of document object.

// * There is an option to turn that off.
// (if not working with the DOM)

// For example, you might want to work with Node. In that case you have no use for any of this defined document type stuff.

// !! Lib !!

// TypeScript includes a default set of type definitions for built-in JS APIs (like Math), as well as type definitions for things found in browser environments (like document).

// ----------------------------

// Exclamation point (!)
// If we put exclamation point after code line of below, this tells TS stop worrying, this is guaranteed not to be null.

// Only would use this in situations where you know for sure that a value will be found or it won't be null.

const btn = document.getElementById('btn')!;

btn.addEventListener;

// ----------------------------

// !! Type Assertions !!

let mystery: unknown = 'Hello World!';

// const numChars = mystery.length // Error

// This is where we can use the type assertion syntax.

const numChars = (mystery as string).length;

// Let's talk about real world example of "Type Assertions"

const input = document.getElementById('todoInput')! as HTMLInputElement;

// We need to use a type assertion there to tell TypeScript that this is an HTML Input Element, not just a generic element.

// btn.addEventListener('click', () => {
//   console.log(input.value);
//   input.value = '';
// });

// * Alternative way of Type Assertion

// (<HTMLInputElement>input).value;

// *** It's less common in general but does not work with JSX.

// ----------------------------

// !!! PROJECT SECTION !!!

const form = document.querySelector('form')!;
const ul = document.querySelector('#todoList')!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodoText = input.value;
  const newLi = document.createElement('li');
  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  newLi.append(newTodoText);
  newLi.append(checkbox);
  ul.append(newLi);
  input.value = '';
}

form.addEventListener('submit', handleSubmit);
