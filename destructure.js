'use strict';

var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

const elGatos = ['stan', 'tom', 'bebe', 'alf'];
const [cat1, cat2, ...restOfGatos] = elGatos;
console.log(cat1); // "one"
console.log(cat2); // "two"
console.log(restOfGatos); // "three"
