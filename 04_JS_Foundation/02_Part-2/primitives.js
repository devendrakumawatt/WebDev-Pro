// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// NULL and Undefined
let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

// String
let myString = "hello";
let myStringOne = "Hola";
let username = "Devendra";

let oldGreet = myString + " Dev";
// console.log(oldGreet);

let greekMessage = `Hello Coder, ${username} !`;
// console.log(greekMessage);

// Symbol
let sm1 = Symbol("devendra");
let sm2 = Symbol("devendra");

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);
