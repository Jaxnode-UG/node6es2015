# Repo for the May 2016 JaxNode meetup examples

This repo contains the examples from the JaxNode May 2016 presentation.
You can view the [slides](http://slides.com/davidfekke/node6docker#/  target="blank") for this presentation
at [slides.com/davidfekke/node6docker](http://slides.com/davidfekke/node6docker#/  target="blank").

## Random

The `Math.random()` function has been greatly improved. This will be important for authors of security modules that depend on 
good random algorythms.

```javascript
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

const random_base64 = function random_base64(length) {
    var str = "";
    for (var i=0; i < length; ++i) {
        var rand = Math.floor(Math.random() * ALPHABET.length);
        str += ALPHABET.substring(rand, rand+1);
    }
    return str;
}

console.log(random_base64(23));
```

## Default Parameters

ES2015 has given us the capability of using default paramters. This is a popular feature in other languages. 
Now JavaScript developers have this feature.

```javascript
function add(a, b = 0) {
	return a + b;
}
``` 

## Rest parameter

The rest parameter gives developers a way of denoting when you plan on passing an array of arguments to a function.

```javascript
function listAnimalsES2015(...animals) {
  animals.forEach(item => {
    console.log(item);
  });
}

listAnimalsES2015('dog', 'cat', 'platipus');
```

## Spread operator

The spread operator gives developers a cleaner way of concatinating arrays.

```javascript
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; 
```

## Destructuring

Destructuring is one of the more powerful features in ES2015. Developers have simpler way of assigning left hand values from a more complex object.

```javascript
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
```

## new.target

This property allows developers to limit the use of the `new` keyword or inforce its use.

```javascript
function Foo() {
  if (!new.target) 
    throw 'Foo() must be called with new';
  console.log('Foo instantiated with new');
}

new Foo(); // logs "Foo instantiated with new"
Foo(); // throws "Foo() must be called with new"
```

## Reflection

ES2015 adds an improved reflection API to JavaScript.

```javascript
var O = {a: 1};
Object.defineProperty(O, 'b', {value: 2});
O[Symbol('c')] = 3;

Reflect.ownKeys(O); // ['a', 'b', Symbol(c)]

function C(a, b){
  this.c = a + b;
}
var instance = Reflect.construct(C, [20, 22]);
console.log(instance.c);
```

## Proxy objects

Proxy objects allows developers to override the default meta data functions in the reflection API.

```javascript
var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);
```

## Symbol

ES2015 also adds a Symbol object for creating unique values that can be used as keys in structures.

```javascript
console.log(Symbol('foo') === Symbol('foo'));
console.log(Symbol('bar') !== Symbol('bar'));
```

Copyright JaxNode 2016
