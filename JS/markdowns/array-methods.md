# JavaScript Arrays and Methods

## What is an Array ?
An array in JavaScript is a special type of object that lets you store multiple values in a single variable. Instead of creating multiple variables for different values, you can group them inside an array.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

- #### Resizable and Flexible
  - You can add or remove items from and array dynamically.
  - An array can hold different data types together.
  
    ```javascript
    let mixedArray = [42, "hello", true, { key: "value" }];
    ```

- #### Use Number Indexes
  - Arrays store items in an ordered list, where each item has a position number (index) and index start from zero (Zero-Indexed).
  - JavaScript arrays do not work like objects with named keys.

    ```javascript
    let colors = ["Red", "Blue", "Green"];
    console.log(colors[0]); // "Red" (first item, index 0)
    console.log(colors[1]); // "Blue" (second item, index 1)
    ```

## Array Constructor
The `Array()` constructor creted `Array` objects.

```javascript
const newArray = new Array("Dharmendra", "Prajapati");
```

> Note: `Array()` can be called with or without `new`. Both create new `Array` instance.

### Array constructor with a single parameter
- Arrays can be created with single parameter. If that parameter is number type then it sets array length, but that elements will be empty.
- `RangeError` Exception: Thrown if there's only one argument that is a number, but its value is not an integer or not between 0 and 232 - 1 (inclusive).
  
  ```javascript
  const newArr1 = new Array(5);
  console.log(newArr1);   // Output:  [ <5 empty items> ]
  console.log(`Size of the array create by array constructor: ${newArr1.length}`); // Output: 5

  const newArr2 = new Array("Hello");
  console.log(newArr2); // Output: [ 'Hello' ]
  console.log(`Size of the array create by array constructor: ${newArr2.length}`); // Output: 1
  ```

### Array constructor with multiple parameters
- If more than one argument is passed to the constructor, a new `Array` with the given elements is created.
  
  ```javascript
  const newArr3 = new Array(1, 2, 3, 4, 5);
  console.log(newArr3); // Output: [ 1, 2, 3, 4, 5 ]
  console.log(`Size of the array create by array constructor: ${newArr3.length}`); // Output: 5
  ```

## Array Instance Methods

#### `.at()` 
- Take integer value as argument and return item at that index, allowing both positive and negative integers. Negative integers count from the end of the item.
  
  ```javascript
  const arr = ['mango', 'elephant', 'Ertiga', 256, 20, 'Wide'];
  console.log(arr.at(4)); // Output: 20
  console.log(arr.at(-4)); // Output: Ertiga
  ```

  > Note: `.at()` is also available for the stings.

#### `.concat()`
- Used to merge two or more arrays, This method does not change existing array but return a new array.
  
  ```javascript
  const arr1 = ['mango', 'elephant', 'Ertiga', 256, 20, 'Wide'];
  const arr2 = ['apple', 'lion', 'Swift', 512, 40, 'Narrow'];
  const arr3 = arr1.concat(arr2);
  console.log(arr3); // Output: [ 'mango', 'elephant', 'Ertiga', 256, 20, 'Wide', 'apple', 'lion', 'Swift', 512, 40, 'Narrow' ]
  ```

#### `.find()`
- Returns the first element from the provided array that satisfies the provided testing function. If no values satisfy the testing function, returned `undefined`.
  
  ```javascript
  const sampleArray = [5, 12, 10, 120, 56];
  const found = sampleArray.find(element => element > 10);
  console.log(found); // Output: 12
  ```

- Other methods like `.find()` method with some extra things.
  - If you need the index of the found element in the array, use `.findIndex()`.
  - If you need to find if any element satisfies the provided testing function, use `.some()`.
  - If you need to find all elements that satisfy the provided testing function, use `.filter()`.


<br>

> Click [here](/JS/array-methods.js) to get code of this.
> 
> There are many more instance method in the array, check [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)