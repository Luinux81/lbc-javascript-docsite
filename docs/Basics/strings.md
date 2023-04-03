---
sidebar_position: 2
---
# Strings
A String is a sequence of characters intended to represent text
A string is a data type that represents a sequence of characters in JavaScript, which can include letters, numbers, and special characters. They are commonly used to represent text in a program.

## Creating Strings
In JavaScript, there are different ways to create a string. You can wrap the text inside single quotes (' '), double quotes (" "), or backticks ( ), which are known as template literals. For instance:

```javascript
// Single quote string
let string1 = 'I am a string!';

// Double quote string
let string2 = "I am a string!";

// Template literal string
let string3 = `I am a string!`;
```

Note that strings created using different quotes are treated equally, meaning they can be compared:
```javascript
string1 === string2; // true
string1 === string3; // true
string2 === string3; // true
```

Additionally, you can create strings using the String() constructor. If called with new, it generates a string object, while calling it without new coerces the value to a primitive string.

```javascript
let str1 = new String('What am I?');
typeof str1; // 'object'

let str2 = String('What am I?');
typeof str2; // 'string'

let str3 = "What am I?";
typeof str3; // 'string'
```
From now on, we will focus on manipulating primitive strings, which are immutable.

## Basic String Manipulation
### String Indexing
You can access each character of a string using bracket notation and its numeric index, starting from zero.

```javascript
let str = 'hello';
str[0]; // 'h'
str[1]; // 'e'
str[2]; // 'l'
str[3]; // 'l'
str[4]; // 'o'
```

Also, you can use the charAt() method to retrieve a specific character:
```javascript
str.charAt(0); // 'h'
```

### The length Property
You can get the length of a string using the length property:

```javascript
let sentence = 'The quick brown fox jumps over the lazy dog';
sentence.length; // 43
```

## String Concatenation
You can concatenate multiple strings using the + operator or the += operator:

```javascript
let a = 'Hello,';
let b = ' world!';
let c = a + b;
console.log(c); // 'Hello, world!'

a += b;
console.log(a); // 'Hello, world!'
```

You can also use template literals to concatenate strings:

```javascript
let a = 'Hello,';
let b = ' world!';
let c = `${a}${b}`;
console.log(c); // 'Hello, world!'
```

### Common String Methods
JavaScript has many [built-in methods](https://www.w3schools.com/js/js_string_methods.asp) for manipulating strings. 

#### slice()
La función slice() devuelve una porción de una cadena especificada por el índice inicial y final. El índice final no está incluido. Si se omite el índice final, se devolverá la porción desde el índice inicial hasta el final de la cadena.

```javascript
const str = "Hola, mundo!";
const res = str.slice(0, 4); // Devuelve "Hola"
```
#### substring()
La función substring() devuelve una porción de una cadena especificada por el índice inicial y final. El índice final no está incluido. Si se omite el índice final, se devolverá la porción desde el índice inicial hasta el final de la cadena. A diferencia de slice(), substring() no acepta índices negativos.

```javascript
const str = "Hola, mundo!";
const res = str.substring(0, 4); // Devuelve "Hola"
```

#### substr()
La función substr() devuelve una porción de una cadena especificada por el índice inicial y la longitud de la porción. Si se omite la longitud, se devolverá la porción desde el índice inicial hasta el final de la cadena.

```javascript
const str = "Hola, mundo!";
const res = str.substr(0, 4); // Devuelve "Hola"
```

#### replace()
La función replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón reemplazadas por una cadena de reemplazo.

```javascript
const str = "Hola, mundo!";
const res = str.replace("mundo", "tierra"); // Devuelve "Hola, tierra!"
```

#### replaceAll()
La función replaceAll() devuelve una nueva cadena con todas las coincidencias de un patrón reemplazadas por una cadena de reemplazo.

```javascript
const str = "Hola, mundo!";
const res = str.replaceAll(",", "."); // Devuelve "Hola. mundo!"
```

#### toUpperCase()
La función toUpperCase() devuelve una nueva cadena con todos los caracteres en mayúscula.

```javascript
const str = "Hola, mundo!";
const res = str.toUpperCase(); // Devuelve "HOLA, MUNDO!"
```

#### toLowerCase()
La función toLowerCase() devuelve una nueva cadena con todos los caracteres en minúscula.

```javascript
const str = "Hola, mundo!";
const res = str.toLowerCase(); // Devuelve "hola, mundo!"
```

#### concat()
La función concat() se usa para unir dos o más cadenas y devuelve una nueva cadena.

```javascript
const str1 = "Hola";
const str2 = "mundo";
const res = str1.concat(", ", str2, "!"); // Devuelve "Hola, mundo!"
```

#### trim()
La función trim() devuelve una nueva cadena sin los espacios en blanco iniciales y finales.

```javascript
const str = "   Hola, mundo!   ";
const res = str.trim(); // Devuelve "Hola, mundo!"
```

#### trimStart()
La función trimStart() devuelve una nueva cadena sin los espacios en blanco iniciales.

```javascript
const str = "   Hola, mundo!   ";
const res = str.trimStart(); // Devuelve "Hola, mundo!   "
```

#### charAt()
La función charAt() devuelve el carácter en un índice específico dentro de una cadena. El índice de los caracteres comienza en 0.

```javascript
const str = 'Hola mundo!';
console.log(str.charAt(1)); // devuelve "o"
```

#### charCodeAt()
La función charCodeAt() devuelve el valor numérico del carácter en un índice específico dentro de una cadena. El índice de los caracteres comienza en 0.

```javascript
const str = 'Hola mundo!';
console.log(str.charCodeAt(1)); // devuelve 111
```

#### split()
La función split() divide una cadena en un array de subcadenas basadas en un separador especificado y devuelve el array resultante.

```javascript
const str = 'Hola,mundo,!';
const arr = str.split(',');
console.log(arr); // devuelve ["Hola", "mundo", "!"]
```

