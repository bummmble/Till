> A set of array utility functions

## Usage

### compactArray

Returns a new Array containg all the items in the original array except 'null' and 'undefined'.

```js
const input = [1, 2, null, undefined];
const compact = compactArray(input);
console.log(compact);
// Outputs: [1, 2]
```

### flatmapArray

Applies a function to every item in an array and concatenates the results into a new flat array.

```js
const input = [1, 2, 3, [4]];
const mapped = flatmapArray(input, x => x + 2);
console.log(mapped);
// Outputs: [3, 4, 5, 6]
```

### groupArray

Groups all items in an array using a provided function. An object is returned where the keys are the group names, and the values are arrays of all the items in the group.

```js
const input = [4, 5];
const fn = item => {
    if (item < 5) {
        return 'lower';
    }
    return 'enough';
};
const grouped = groupArray(input, fn);
console.log(grouped);
// Outputs: { lower: [4], enough: [5] }
```

### partitionArray

Filters an array and partitions the results into an array containg two arrays. The first array is the group which satisfies a given function, and the second is the group that does not.

```js
const input = [1, 2, 3, 4, 5];
const partitioned = partitionArray(input, x => x < 3);
console.log(partitioned);
// Outputs: [[1, 2], [3, 4, 5]]
```
