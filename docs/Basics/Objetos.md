---
sidebar_position: 2
---
# Objetos
In JavaScript, an object is a collection of key-value pairs, where the keys are strings and the values can be any JavaScript data type, including other objects. Objects are used extensively in JavaScript to represent complex data structures and provide a way to organize and manipulate data in a more intuitive way.

## Declaring Objects
In JavaScript, you can declare an object using either object literal notation or the new Object() constructor.

Object Literal Notation
Object literal notation is the most common way to declare an object in JavaScript. It allows you to create an object with one or more properties and their associated values, all enclosed in curly braces {}. For example:

```javascript
    const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    },
    hobbies: ['reading', 'swimming', 'hiking']
    };
```

This code creates an object called person with four properties: name, age, address, and hobbies. The address property itself is another object, and the hobbies property is an array of strings.

### The new Object() Constructor
You can also declare an object using the new Object() constructor. This creates an empty object that you can then add properties and values to using the dot notation or square bracket notation. For example:

```javascript
const person = new Object();
person.name = 'John';
person.age = 30;
person.address = {
  street: '123 Main St',
  city: 'Anytown',
  state: 'CA'
};
person.hobbies = ['reading', 'swimming', 'hiking'];
```

This code creates an object called person using the new Object() constructor, and then adds four properties to it using dot notation.

### Computed Property Names in ES6
In ECMAScript 6 (ES6) and later versions of JavaScript, there is a feature called "Computed Property Names" that allows developers to set dynamic property names on an object. This feature allows for more flexible and expressive object creation, as it allows developers to use expressions that evaluate to a value as property names.

To use computed property names in JavaScript, you simply wrap an expression in square brackets and use it as the property name. The expression can be any valid JavaScript expression that evaluates to a value, including variables, function calls, and conditional expressions.

For example, let's say we have an object person that we want to add a dynamic property to based on a certain condition:

```javascript
const age = 30;
const person = {
  name: "John",
  [age > 18 ? "isAdult" : "isMinor"]: true
};
```
In this example, we use a conditional expression to determine the property name for the new property on the person object. If the age variable is greater than 18, the property name will be "isAdult". Otherwise, it will be "isMinor". The resulting person object will have a property with a dynamic name based on the condition:

```javascript
console.log(person); // { name: "John", isAdult: true }
```
Computed property names can also be used with variables, as shown in the article's example:

```javascript
const key1 = "language";
const key2 = "isStudent";

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true
};
```
In this example, we use the key1 and key2 variables as property names on the obj object. The resulting obj object will have two dynamic properties with names based on the values of the variables:

```javascript
console.log(obj); // { name: "dillion", age: 1000, language: "javascript", isStudent: true }
```

### How to Use Special Keys in Objects
You need to inform JavaScript that it is a key by enclosing it in quotes, either single or double quotes will work. Using a name that can also be used as a variable is recommended instead of this exception method of setting a key.

```javascript
let person = {
  'last name':'kamal',
  age:30,
  friends:[
     'Shola','Ade','Ibraheem'
  ],
  greet:function(){
    alert('Hello World')
  }
}
```

### Method Shorthand Syntax
There is an alternative syntax you can use to define a method in a more efficient way. Traditionally, to create a method in an object, you need a key and a value, where you create the value as a method using the function keyword.
```javascript
let person = {
  name:'jamaldeen',
  age:30,
  hobbies:[
     'reading','playing','sleeping'
  ],
  speek:function(){
    return this.hobbies
  }
}
console.log(person.speak());
```

In the above code, the method is created with a function keyword after a colon. Alternatively, you could do this:
```javascript
let person = {
  name:'jamaldeen',
  age:30,
  hobbies:[
     'reading','playing','sleeping'
  ],
  speek(){
    return this.hobbies
  }
}
console.log(person.speak());
```
In JavaScript, creating a method with object short methods is a shorthand notation. Omitting the "function" keyword and the colon(:) before the function body is allowed using the short methods.

This is because with the short method syntax, the property is automatically defined as method, which renders the "function" keyword useless.

The code remains functional because the JavaScript engine recognizes the shorthand syntax and interprets it as a regular function definition.

## Object Structure
In JavaScript, an object is composed of one or more properties, which consist of a key-value pair. The key is a string that identifies the property, and the value can be any JavaScript data type, including other objects.

### Accessing Object Properties
You can access object properties using dot notation or square bracket notation. For example:

```javascript
console.log(person.name); // output: "John"
console.log(person['age']); // output: 30
```
In the first line, dot notation is used to access the name property of the person object. In the second line, square bracket notation is used to access the age property.

### Modifying Object Properties
You can modify object properties using either dot notation or square bracket notation. For example:

```javascript
person.name = 'Mary';
person['age'] = 35;
```
In the first line, dot notation is used to change the value of the name property to 'Mary'. In the second line, square bracket notation is used to change the value of the age property to 35.

### Adding Object Properties
You can add new properties to an object using either dot notation or square bracket notation. For example:

```javascript
person.gender = 'female';
person['job'] = 'teacher';
```
In the first line, dot notation is used to add a new gender property to the person object. In the second line, square bracket notation is used to add a new job property.

### Removing Object Properties
You can remove properties from an object using the delete operator. For example:

```javascript
delete person.address;
delete person['hobbies'];
```
In the first line, the delete operator is used to remove the address property from the person object. In the second line, the delete operator is used to remove the hobbies property.

### Object Destructuring
Object destructuring is an important feature in JavaScript that allows you to pull out values from an object and assign them to individual variables.

To perform object destructuring, you use a destructuring pattern on the left-hand side of an assignment statement, and the object that you want to extract values from on the right-hand side. For example:
```javascript
const person = { name: 'lawal', age: 39 };
const { person, age } = person;
console.log(name); // 'lawal'
console.log(age); // 39
```
The const statement uses object destructuring to extract the name and age properties from the person object and assign them to two separate variables. This is a concise and efficient way to extract values from an object, especially when dealing with complex objects.

Object destructuring also enables you to provide default values, in case the property you want to extract does not exist in the object. You can also rename the variables being extracted using an alias, giving you greater control over the structure and naming of the extracted values.


## Object Operators
JavaScript provides a number of operators that can be used with objects, including the following:

### The this keyword
**this** is a keyword used in referencing the current object in which it's used.
```javascript
let person = {
  name:'kamal',
  age:30,
  greet:function(){
    return `My name is ${this.name}, and my age is ${this.age} years old`;
  },
}
console.log(person.greet());
// My name is kamal, and my age is 30 years old.
```
Regardless of its location within an object, the this keyword always refers to the entity that executed the function in the code. Using this in different contexts within the code can produce distinct results. For instance:
```javascript
let person = {
  name:'kamal',
  age:30,
  greet:function(){
    return `My name is ${this.name}, and my age is ${this.age} years old`;
  },
}
console.log(this); // prints the window object
```

### The in Operator
The in operator can be used to check if an object contains a particular property. It returns true if the property is found and false otherwise. For example:

```javascript
console.log('name' in person); // output: true
console.log('salary' in person); // output: false
```
In the first line, the in operator is used to check if the person object has a name property. Since it does, the expression evaluates to true. In the second line, the in operator is used to check if the person object has a salary property. Since it does not, the expression evaluates to false.

### The instanceof Operator
The instanceof operator can be used to check if an object is an instance of a particular class or constructor function. It returns true if the object is an instance of the specified class or constructor function and false otherwise. For example:

```javascript
console.log(person instanceof Object); // output: true
console.log(person instanceof Array); // output: false
```
In the first line, the instanceof operator is used to check if the person object is an instance of the Object class. Since it is, the expression evaluates to true. In the second line, the instanceof operator is used to check if the person object is an instance of the Array class. Since it is not, the expression evaluates to false.

### The typeof Operator
The typeof operator can be used to check the data type of a variable or expression. When used with an object, it always returns 'object'. For example:

```javascript
console.log(typeof person); // output: "object"
```
### Object Spread Operator
The object spread operator is a popular and powerful syntax in JavaScript. The spread operator takes all the key-value pairs of an object and copies the key name and value into a new object.

An object is a reference value, and if you want a copy of the object without pointing to the same property in memory, the spread operator is the answer.

```javascript
let person = {
  name:'kamal',
  age:30,
  hobbies:[
     'reading','playing','sleeping'
  ]
}
console.log(person);
const person2 ={...person};
console.log(person2.age);
```
The syntax for object spread operator goes between the opening and closing brackets. Then there should be three dots and the object you want to spread into this object.

## Object Methods
JavaScript provides several built-in methods that can be used with objects to perform common operations, such as copying, merging, and iterating over properties. Some of the most commonly used methods include the following:

### Object.assign()
The Object.assign() method is used to copy the values of all enumerable properties from one or more source objects to a target object. For example:

```javascript
const person2 = { name: 'Mary', age: 35 };
Object.assign(person, person2);
console.log(person);
// output: { name: 'Mary', age: 35, gender: 'female', job: 'teacher' }
```
In this example, the Object.assign() method is used to copy the properties from the person2 object to the person object.

### Object.keys()
The Object.keys() method is used to return an array of all the keys in an object. For example:

```javascript
console.log(Object.keys(person));
// output: ["name", "age", "gender", "job"]
```
In this example, the Object.keys() method is used to return an array of all the keys in the person object.

### Object.values()
The Object.values() method is used to return an array of all the values in an object. For example:

```javascript
console.log(Object.values(person));
// output: ["Mary", 35, "female", "teacher"]
```
In this example, the Object.values() method is used to return an array of all the values in the person object.

### Object.entries()
The Object.entries() method is used to return an array of all the key-value pairs in an object, where each pair is represented as an array with two elements: the key and the value. For example:

```javascript
Copy code
console.log(Object.entries(person));
// output: [["name", "Mary"], ["age", 35], ["gender", "female"], ["job", "teacher"]]
```
In this example, the Object.entries() method is used to return an array of all the key-value pairs in the person object.

### Object.create()
The Object.create() method is used to create a new object with the specified prototype object and properties. For example:

```javascript
const person3 = Object.create(person);
person3.name = 'John';
console.log(person3.name);
// output: "John"
console.log(person3.age);
// output: 35
```
In this example, the Object.create() method is used to create a new object person3 with the person object as its prototype. The person3 object inherits the properties of the person object and can also define its own properties.

## Conclusion
In JavaScript, objects are a fundamental data type that allow you to store and manipulate collections of data in a structured way. They consist of key-value pairs and can be created using object literals, constructor functions, or the Object.create() method. Objects can be modified using various operators and methods, and their properties can be accessed using dot notation or bracket notation. By understanding how to work with objects, you can write more efficient and effective JavaScript code.