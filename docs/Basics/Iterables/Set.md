# Set
Set is a data structure in JavaScript used to store unique values of any type and length. In this reference manual, we will explore how to create and work with sets in JavaScript.

## Creating a Set

To create a new Set, use the new keyword followed by Set(). For example:

```javascript
const mySet = new Set();
```
To create a Set with initial values, pass an iterable such as an array, set or nodelist to the Set() constructor. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
```

## Properties and Methods of a Set

### Size
The size property returns the number of elements in the Set. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
console.log(mySet.size); // Output: 4
```

### Adding Elements to a Set
To add an element to a Set, use the add() method. For example:

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add('Hello');
```
You can also add multiple elements at once by passing them as arguments to the add() method. For example:

```javascript
const mySet = new Set();
mySet.add(1, 2, 3);
```

### Checking if an Element Exists in a Set
To check if an element exists in a Set, use the has() method. It returns a boolean indicating whether the element is present or not. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
console.log(mySet.has(3)); // Output: true
console.log(mySet.has(5)); // Output: false
```

### Removing Elements from a Set
To remove an element from a Set, use the delete() method. It returns a boolean indicating whether the element was successfully removed or not. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
mySet.delete(3);
console.log(mySet); // Output: Set(3) {1, 2, 4}
```

### Clearing a Set
To remove all elements from a Set, use the clear() method. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
mySet.clear();
console.log(mySet); // Output: Set(0) {}
```

### Iterating Over a Set
Sets are iterable objects. You can use the for..of loop to iterate over a Set. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
for (const value of mySet) {
  console.log(value);
}
/*
Output:
1
2
3
4
*/
```
You can also use the forEach() method to iterate over a Set. For example:

```javascript
const mySet = new Set([1, 2, 3, 4]);
mySet.forEach((value) => console.log(value));
/*
Output:
1
2
3
4
*/
```