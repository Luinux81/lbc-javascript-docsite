---
sidebar_position: 2
---
# Variables
In JavaScript, a variable is a container that stores a value. You can use variables to store a wide variety of data types, such as numbers, strings, booleans, and objects.

## Declaración
To declare a variable, you use the **var** keyword followed by the name of the variable.
* You can also declare a variable and assign a value to it in a single statement. 
* You can also declare multiple variables in a single statement by separating the variables with commas.

```javascript
var x;
var x = 10;
var x = 10, y = 20, z = 30;
```

You can also use the **let** and **const** keywords to declare variables. 
* The *let* keyword is similar to var, but it has block-level scope, which means that the variable is only accessible within the block in which it is defined.
* The *const* keyword is used to declare a constant, which is a variable that cannot be reassigned a new value.

```javascript
let a = 10;
const b = 20;

a = 30;  // valid
b = 40;  // invalid, causes an error

if(a == 10){
    let c = 20;
}
console.log(c); //undefined, c is only defined in the block where is declared
```

You can also use template literals to assign values to variables. Template literals are string literals that allow you to embed expressions within the string. To use a template literal, you enclose it in backticks () and use the ${}` syntax to embed expressions within the string.

```javascript
const name = 'John';
const message = `Hello, ${name}!`;

console.log(message);  // "Hello, John!"
```

## Tipos de variables
In JavaScript, there are several different types of variables that you can use to store values.
However variables are not explicitly typed. This means that you do not need to specify the type of a variable when you declare it. Instead, the type of a variable is determined at runtime based on the value that is assigned to it. This makes JavaScript a *dynamically typed language*.

These include:

* **Numbers:** Numbers can be either integers or floating-point values. You can use the Number constructor to create a number object, or you can simply use a numeric literal. For example:

```javascript
const x = 10;              // numeric literal
const y = new Number(20);  // number object
```
In this example, x is assigned the value 10 and y is assigned the value 20.

* **Strings:** Strings are sequences of characters. You can use either single quotes or double quotes to create a string literal.
```javascript
const name = 'John';  
const message = "Hello, World!";  
```

* **Boolean:** This type is used to store values that can be either true or false. For example, true and false are both boolean values.

* **Null:** This type is used to represent a variable that has no value. In JavaScript, null is a value that represents the intentional absence of any object value.

* **Undefined:** This type is used to represent a variable that has not been assigned a value. If a variable has been declared but not assigned a value, its value is undefined.

* **Object:** This type is used to store collections of data, including properties and methods. Objects in JavaScript are created using the object literal notation {} or the new Object() constructor.

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

const car = new Object();
car.make = 'Honda';
car.model = 'Civic';
car.year = 2015;
```

* **Array:** This type is used to store collections of data, typically of the same type. Arrays in JavaScript are created using the array literal notation [] or the new Array() constructor.

```javascript
const numbers = [1, 2, 3, 4, 5];

const names = new Array('John', 'Mary', 'Bob');
```

* **Function:** This type is used to store executable code. Functions in JavaScript are created using the function keyword, and can be called using parentheses ().

```javascript
function addNumbers(a, b) {
  return a + b;
}

const multiplyNumbers = function(a, b) {
  return a * b;
};
```

* **Symbol:** This type is used to create unique identifiers for object properties. Symbols are created using the Symbol() function.

```javascript
const mySymbol = Symbol();

const obj = {
  [mySymbol]: 'value'
};
```
