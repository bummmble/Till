> A set of object utilities

## Usage

### mapObject

Takes an object and a function to be called once for each enumerable property in the object and returns a new object with the same keys.

```js
const input = { lowest: 42, highest: 72 };
const mapped = mapObject(input, (value, key) => {
    return value * 2
});
console.log(mapped);
// Outputs: { lowest: 84, highest: 144 }
```

### mapObjectValues

Takes an object and a function to be called once for each enumerable property in the object and returns an array containing the results of the function provided.

```js
const input = { low: 10, mid: 50, high: 90 };
const mapped = mapObjectValues(input, (value, key) => {
    return value * 2
});
console.log(mapped);
// Outputs: [ 20, 100, 180 ]
```

### mergeAllObjects

Accepts a list of objects to merge together into a list. Objects are merged in the order that they are inserted. 

```js
const obj1 = { foo: 1 };
const obj2 = { bar: 2} ;
const obj3 = { baz: 3 };
const merged = mergeAllObjects([obj1, obj2, obj3]);
console.log(merged);
// Outputs { foo: 1, bar: 2, baz: 3 }
```
