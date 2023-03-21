# Maps

In JavaScript, a map is a data structure used to store key-value pairs of data of any kind and length. It is similar to objects, but maps allow anything to be used as a key, whereas objects only allow strings, symbols, and numbers as keys. Maps are iterables and come with various methods.

To create a map, you use the new keyword with the Map constructor. You can create an empty map or initialize the map with some initial key-value pairs. The example below shows how to create a map and add key-value pairs to it:

```javascript
Copy code
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
```

## Functions
The first line creates an empty map, and the next two lines add key-value pairs to the map using the set method. The keys in the map can be of any type, including objects and functions.

Maps have several methods and properties that you can use to retrieve, add, delete, check, and clear all the elements in the map. Some of the most commonly used methods are:

* set(key, value): Adds a new key-value pair to the map.
* get(key): Retrieves the value associated with the specified key.
* has(key): Returns true if the specified key exists in the map.
* delete(key): Removes the specified key-value pair from the map.
* clear(): Removes all key-value pairs from the map.
* size: Returns the number of key-value pairs in the map.

```javascript
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap.get('key1')); // Output: 'value1'
console.log(myMap.has('key2')); // Output: true
myMap.delete('key2');
console.log(myMap.size); // Output: 1
myMap.clear();
console.log(myMap.size); // Output: 0
```

### How to iterate over a Map

The methods entries(), keys() and values() return a MapIterator. It is an array-like object of key-value pairs, with each pair represented as an array containing 2 elements. The MapIterator can be used in a for...of loop to iterate over all key-value pairs in a Map object.

* **entries()**
With entries, you can get all the data, both the key and value of a map.
```javascript
const player = new Map([['key','value'],['small','medium'],['fruit','another']]);

console.log(player.entries());
//MapIterator {'key' => 'value', 'small'=> 'medium', 'fruit' => 'another'}
```

* **keys()**
With the keys method, you can get all the keys of a map, and it also runs a for or for-of loop:
```javascript
const players = new Map([['key','value'],['small','medium'],['fruit','another']]);

for(const player of players.keys()){
  console.log(player);
}

// key
// small
// fruit
```

* **values()**
This is the method you should use when getting only values in the map is the priority.
```javascript
const players = new Map([['key','value'],['small','medium'],['fruit','another']]);

for(const player of players.values()){
  console.log(player);
}

// value
// medium
// another
```

* **forEach()**
For easy iteration in maps, you can use the popular forEach method as shown below:

```javascript
const players = new Map([['key','value'],['small','medium'],['fruit','another']]);

players.forEach((key, value) =>{
  const message = `I want to be remeembered as the best ${key} pair ${value}`;
    console.log(message)
})
// I want to be remembered as the best value pair key
// I want to be remembered as the best medium pair small
// I want to be remembered as the best another pair fruit
```