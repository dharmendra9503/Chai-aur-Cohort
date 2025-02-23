# JavaScript Loops: Detailed Guide

> [!NOTE]
> JS code to run : [click here](/JS/loops.js)

Loops in JavaScript allow you to iterate over collections like arrays and objects, executing code multiple times efficiently.

## 1️⃣ `for` Loop
JavaScript `for` loop repeats until specified condition match. It uses an **index** to iterate over elements.

```javascript
let numbers = [4, 8, 10, 55, 21];

for(let i=0;i<numbers.length;i++) {
    console.log(numbers[i]);
}
//Output: 4 8 10 55 21
```

## 2️⃣ `while` Loop
A `while` loop repeatedly executes a block of code as long as a specified condition is `true`.

```javascript
let numbers = [5, 10, 15];
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++; // Manual increment required
}
// Output: 5, 10, 15
```

- The condition is checked before each iteration.
- If the condition is `true`, the statements inside the loop are executed.
- If the condition is `false`, the loop stops, and control moves to the next part of the program.

## 3️⃣ `do...while` Loop
A `do...while` loop always runs its code block at least once and then keeps repeating as long as the condition remains true.

```javascript
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```
- It executes the code inside the `do` block once and inside that it is incrementing value by 1.
- Then it checks the condition.
- If the condition is `true`, it repeats the code block.
- If the condition is `false`, it stops and moves on to the next part of the program.

## ✅ How `for`, `while`, and `do...while` Works for Objects.
To iterate over an object using these loops, you need to use `Object.keys()`, `Object.values()`, or `Object.entries()`.

### Using `Object.keys()`
`Object.keys()` is a JavaScript method that returns an array of all property names (keys) in an object, including those that hold functions.

#### Example (With `for` loop)
```javascript
const person = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: function () {
        return "Gujarat, India";
    }
};
const keys = Object.keys(person); // [ 'name', 'surname', 'address' ]

for(let i=0;i<keys.length;i++){
    console.log(person[keys[i]]);
}
/* Output
 *
 * Dharmendra
 * Prajapati
 * [Function: address]
 * /
```

#### Example (With `while` loop)
```javascript
const person = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: function () {
        return "Gujarat, India";
    }
};
const keys = Object.keys(person); // [ 'name', 'surname', 'address' ]

let itr = 0;
while(itr<keys.length){
    console.log(person[keys[itr]]);
    itr++;
}
/* Output
 *
 * Dharmendra
 * Prajapati
 * [Function: address]
 * /
```

#### Example (With `do...while` loop)
```javascript
const person = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: function () {
        return "Gujarat, India";
    }
};
const keys = Object.keys(person); // [ 'name', 'surname', 'address' ]

let itr2 = 0;
do{
    console.log(person[keys[itr2]]);
    itr2++;
} while(itr2<keys.length);
/* Output
 *
 * Dharmendra
 * Prajapati
 * [Function: address]
 * /
```

### Using `Object.values()`
The `Object.values()` method retrieves all the values from an object, including functions if they exist as property values, and returns them as an array. The values appear in the same order as they are defined in the object.

#### Example with `for` loop
```javascript
const car = {
    name: "Ertiga",
    model: "Hyundai",
    year: 2017,
    getDetails: function () {
        return this.name + " " + this.model + " " + this.year;
    }
};

const values = Object.values(car); // Output: [ 'Ertiga', 'Hyundai', 2017, [Function: getDetails] ]

for(let i=0;i<values.length;i++){
    console.log(values[i]);
}
/** Output
 * 
 * Ertiga
 * Hyundai
 * 2017
 * [Function: getDetails]
 */
```
#### Example with `while` loop
```javascript
const car = {
    name: "Ertiga",
    model: "Hyundai",
    year: 2017,
    getDetails: function () {
        return this.name + " " + this.model + " " + this.year;
    }
};

const values = Object.values(car); // Output: [ 'Ertiga', 'Hyundai', 2017, [Function: getDetails] ]

let it = 0;
while(it<values.length){
    console.log(values[it]);
    it++;
}
/** Output
 * 
 * Ertiga
 * Hyundai
 * 2017
 * [Function: getDetails]
 */
```
#### Example with `do...while` loop
```javascript
const car = {
    name: "Ertiga",
    model: "Hyundai",
    year: 2017,
    getDetails: function () {
        return this.name + " " + this.model + " " + this.year;
    }
};

const values = Object.values(car);

let it2 = 0;
do{
    console.log(values[it2]);
    it2++;
} while(it2<values.length);
/** Output
 * 
 * Ertiga
 * Hyundai
 * 2017
 * [Function: getDetails]
 */
```

### Using `Object.entries()`
The `Object.entries()` method gets all key-value pairs from an object. If the object has functions as values, it includes them just like any other property, but it doesn’t run them—it just returns the function itself.

```javascript
const student = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: "Gujarat, India",
    getDetails: function () {
        return this.name + " " + this.surname + " " + this.address();
    },
    subjects: ["Physics", "Chemistry", "Maths"]
};

const entries = Object.entries(student);
console.log(entries);
```
```javascript
// Output
[
  [ 'name', 'Dharmendra' ],
  [ 'surname', 'Prajapati' ],
  [ 'address', 'Gujarat, India' ],
  [ 'getDetails', [Function: getDetails] ],
  [ 'subjects', [ 'Physics', 'Chemistry', 'Maths' ] ]
]
```
The output of Object.entries() consists of multiple arrays, where each array represents a property and its value from the object—the first element in each array is the property name, and the second element is its corresponding value.

This output is stored in `entries` variable and we can now iterate through `for`, `while` and `do...while` loop.

#### Example with `for` loop
```javascript
for(let i=0;i<entries.length;i++){
    console.log(entries[i], `==> key: ${entries[i][0]}, value: `, entries[i][1]);
}
/**
 * Output:
 * [ 'name', 'Dharmendra' ] ==> key: name, value:  Dharmendra
 * [ 'surname', 'Prajapati' ] ==> key: surname, value:  Prajapati
 * [ 'address', 'Gujarat, India' ] ==> key: address, value:  Gujarat, India
 * [ 'getDetails', [Function: getDetails] ] ==> key: getDetails, value:  [Function: getDetails]
 * [ 'subjects', [ 'Physics', 'Chemistry', 'Maths' ] ] ==> key: subjects, value:  [ 'Physics', 'Chemistry', 'Maths' ]
 *
 */
```
#### Example with `while` loop
```javascript
let itr3 = 0;
while(itr3<entries.length){
    console.log(entries[itr3], `==> key: ${entries[itr3][0]}, value: `, entries[itr3][1]);
    itr3++;
}
/**
 * Output:
 * [ 'name', 'Dharmendra' ] ==> key: name, value:  Dharmendra
 * [ 'surname', 'Prajapati' ] ==> key: surname, value:  Prajapati
 * [ 'address', 'Gujarat, India' ] ==> key: address, value:  Gujarat, India
 * [ 'getDetails', [Function: getDetails] ] ==> key: getDetails, value:  [Function: getDetails]
 * [ 'subjects', [ 'Physics', 'Chemistry', 'Maths' ] ] ==> key: subjects, value:  [ 'Physics', 'Chemistry', 'Maths' ]
 *
 */
```
#### Example with `do...while` loop
```javascript
let itr4 = 0;
do{
    console.log(entries[itr4], `==> key: ${entries[itr4][0]}, value: `, entries[itr4][1]);
    itr4++;
} while(itr4<entries.length);
/**
 * Output:
 * [ 'name', 'Dharmendra' ] ==> key: name, value:  Dharmendra
 * [ 'surname', 'Prajapati' ] ==> key: surname, value:  Prajapati
 * [ 'address', 'Gujarat, India' ] ==> key: address, value:  Gujarat, India
 * [ 'getDetails', [Function: getDetails] ] ==> key: getDetails, value:  [Function: getDetails]
 * [ 'subjects', [ 'Physics', 'Chemistry', 'Maths' ] ] ==> key: subjects, value:  [ 'Physics', 'Chemistry', 'Maths' ]
 *
 */
```

## 4️⃣ `for...in` Loop
The `for...in` best for iterating over object properties. It loops through all **_enumerable string properties_** of an object, including those inherited, but **_ignores properties keyed by symbols_**.

> [!NOTE]
> **Enumerable properties** are those with their internal enumerable flag set to true. By default, this is the case for properties created using simple assignment or a property initializer. However, properties defined with methods like `Object.defineProperty()` are non-enumerable unless explicitly specified.
> 
> The main reason to make a property non-enumerable is to hide it from iteration, keeping internal details private and preventing unintentional access or modification.


> [!NOTE]
> **Properties keyed by Symbol** means object properties whose keys are `Symbol` values instead of strings.
> ```javascript
> const sym = Symbol('uniqueKey');
> const obj = {
>   [sym]: 'Hidden value',
>   normalKey: 'Visible value'
> };
> ```

### Using `for...in` With Objects
The basic structure of a for...in loop is:

```javascript
for (let key in myObject) {
  // Do something with myObject[key]
}
```
- key is a variable that takes each enumerable property name (string) in myObject (including those inherited from the prototype chain, unless filtered out).

#### Example 1: Straightforward (Regular) Properties
Let’s begin with a simple object where all properties are defined normally (i.e., directly using literal notation), which means they are automatically enumerable by default.

```javascript
const car = {
  brand: 'Tesla',
  model: 'Model 3',
  year: 2022
};

for (let key in car) {
  console.log(`Property: ${key}, Value: ${car[key]}`);
}

/** Here all properties are enumrable so `for...in` happily iterates over them
 * 
 * Output:
 * 
 * Property: brand, Value: Tesla
 * Property: model, Value: Model 3
 * Property: year, Value: 2022
 */
```

#### Example 2: Non-Enumerable Properties
By default, properties created in an object literal are enumerable. However, we can change that behavior. For instance, if you want a property to exist on the object but not be listed by for...in, you can define it as non-enumerable.

```javascript
const person = { name: 'Alice' };

Object.defineProperty(person, 'secret', {
  value: 'Hidden Info',
  enumerable: false  // explicitly set to false
});

for (let key in person) {
  console.log(`Property: ${key}, Value: ${car[key]}`);
}

/**
 * Here We use Object.defineProperty to add a new property secret with the option { enumerable: false }. That makes secret non-enumerable.
 * And `for...in` iterates only enumrable property so we got this output.
 * 
 * Output:
 * 
 * Property: name, Value: Alice
 * 
 */
```

#### Example 3: `Symbol` as a Property
Symbols are a special primitive type in JavaScript often used to create unique property keys. They are not enumerable by default, which means they typically don’t show up in for...in loops (or many other built-in methods that work with property keys).

```javascript
// Create a Symbol for a "favorite color" property
const favoriteColor = Symbol('favoriteColor');

const user = {
  name: 'Bob',
  [favoriteColor]: 'Blue'  // Symbol as key
};

for (let key in user) {
  console.log(`Key: ${key}, Value: ${user[key]}`);
}

/**
 * In this example, we created a Symbol and added it as a property of the object. However, since for...in does not iterate over Symbol properties, that property is omitted from the loop’s output.
 * 
 * Output:
 * 
 * Key: name, Value: Bob
 *
 */
```

> [!TIP]
> Remember, for...in also iterates over properties inherited from the object’s prototype chain. If you want to avoid that, you can use Object.hasOwnProperty within the loop:
> ```javascript
> for (let key in someObject) {
>   if (someObject.hasOwnProperty(key)) {
>       // Only the object’s own enumerable keys
>   }
> }
> ```

### Can We Use `for...in` With Arrays?
Yes, it works on arrays too, but it’s not the best choice in most cases. Here’s a quick example:

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];

for (let index in fruits) {
  console.log(`Index: ${index} - Fruit: ${fruits[index]}`);
}
```
You’ll get:
```javascript
Index: 0 - Fruit: Apple
Index: 1 - Fruit: Banana
Index: 2 - Fruit: Orange
```

### Why might this not be ideal for arrays?

- JavaScript doesn’t guarantee you’ll see these items in numerical order (though in practice, you usually do).
- If anyone adds extra custom properties to the array, they will also show up.


## 5️⃣ `for...of` Loop
The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, sets, and more. It does not work directly on plain objects because they are not iterable by default.

### 1. Using `for...of` with Arrays
With arrays, `for...of` loops over the values of each element:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry
```

- Here, fruit gets the value of each array element, one by one.
- If you need the index, use Array.entries():

```javascript
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}
// Output:
// 0 apple
// 1 banana
// 2 cherry
```

### 2. Using `for...of` with Strings
You can use `for...of` to loop through each character of a string:

```javascript
const text = 'Hello';

for (const char of text) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

### 3. Using `for...of` with Objects (Indirectly)
`for...of` cannot be used directly on plain objects because they are not iterable. If you try, you'll get an error:

```javascript
const person = { name: 'Alice', age: 25 };

// This will cause an error
// for (const prop of person) {
//   console.log(prop);
// }
```
Instead, you can loop through:

- Keys using Object.keys()
- Values using Object.values()
- Entries using Object.entries()

<br>

Examples:
- Looping through keys:

```javascript
for (const key of Object.keys(person)) {
  console.log(key);
}
// Output:
// name
// age4
```

- Looping through values:

```javascript
for (const value of Object.values(person)) {
  console.log(value);
}
// Output:
// Alice
// 25
```

- Looping through entries (key-value pairs):

```javascript
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25
```

<br>

> [!NOTE] SOURCE
> [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement)
> 
> [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
> 
> [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)