## 1. What Is a JavaScript Object?

In JavaScript, **objects** are collections of key-value pairs. They are used to store multiple values as properties and methods in a structured way. Nearly everything in JavaScript (other than primitive data types such as strings, numbers, booleans, `null`, `undefined`, and symbols) is an object. Even arrays and functions are special types of objects under the hood.

Key points:

- Objects are mutable (their properties can be changed).
- Properties can be any valid data type, including functions (which then become methods).
- Keys are typically strings or symbols (newer ES6 feature), but you will most often use strings.

## 2. Ways to Create Objects

### 2.1 Object Literal Notation

This is the most common and straightforward way:

```
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing properties
console.log(person.name);  // "Alice"
console.log(person.age);   // 25

// Calling a method
person.greet();            // "Hello, my name is Alice"

```

- Use curly braces `{}`.
- Separate key-value pairs with commas.
- Access properties via dot notation or bracket notation.

### 2.2 Constructor Function

Before ES6 classes, a common pattern was to use a constructor function with the `new` keyword:

```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const alice = new Person("Alice", 25);
alice.greet(); // "Hello, my name is Alice"

```

- `this` refers to the newly created instance when you use `new`.
- Typically, the function name is capitalized to distinguish constructor functions from regular functions.

### 2.3 ES6 Classes

ES6 (ES2015) introduced the `class` keyword, which is syntactic sugar over prototype-based inheritance:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const bob = new Person("Bob", 30);
bob.greet(); // "Hello, my name is Bob"

```

- Classes make object-oriented patterns clearer, but they use the same prototype-based structure under the hood.

### 2.4 `Object.create()`

This allows you to create an object with a specific prototype:

```
const prototypeObject = {
  greet() {
    console.log("Hello from the prototype!");
  }
};

const obj = Object.create(prototypeObject);
obj.greet(); // "Hello from the prototype!"

```

- The `obj` created here has `prototypeObject` as its prototype.
- This is useful for advanced inheritance patterns.

## 3. Object Properties

### 3.1 Defining Properties

When you create an object literal, you are defining its properties directly:

```
const car = {
  brand: "Toyota",
  model: "Corolla"
};

```

But you can also define properties dynamically:

```
car.year = 2022;
console.log(car); // { brand: "Toyota", model: "Corolla", year: 2022 }

```

Or with bracket notation:

```
car["color"] = "blue";
console.log(car); // { brand: "Toyota", model: "Corolla", year: 2022, color: "blue" }

```

### 3.2 Property Descriptors

Every property in JavaScript has an associated **property descriptor** that includes:

- `configurable` (can be redefined or deleted)
- `enumerable` (shows up in loops)
- `writable` (can be changed)
- `value` (the data stored)
- `get` and `set` (for getters and setters)

For example:

```
const obj = {};
Object.defineProperty(obj, "secret", {
  value: 42,
  writable: false,      // cannot change its value
  enumerable: false,    // won't show up in for...in loops
  configurable: false   // cannot delete or redefine
});

console.log(obj.secret); // 42
obj.secret = 100;        // throws an error in strict mode, or silently fails
console.log(obj.secret); // still 42

```

Check descriptors:

```
console.log(Object.getOwnPropertyDescriptor(obj, "secret"));
// {
//   value: 42,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

```

## 4. Methods

In JavaScript, **methods** are just object properties that happen to be functions. For instance:

```
const mathUtilities = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(mathUtilities.add(2, 3));     // 5
console.log(mathUtilities.multiply(4, 5)); // 20

```

You can also create methods using traditional function syntax:

```
const mathUtilities2 = {
  add: function (a, b) {
    return a + b;
  }
};

```

Both styles are valid; the former is just shorthand introduced in ES6.

## 5. `this` Keyword

Within a method, `this` typically refers to the object upon which the method is called. For example:

```
const user = {
  name: "Carol",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.greet(); // "Hi, I'm Carol"

```

But `this` depends on the context of the call. If you assign `user.greet` to a variable and then call it, `this` might become undefined (in strict mode) or the global object (in non-strict mode). For example:

```
const greetFunction = user.greet;
greetFunction(); // "Hi, I'm undefined" in strict mode

```

To control `this`, you can use methods like `.bind()`, `.call()`, `.apply()`.

## 6. Prototype and Inheritance

JavaScript uses **prototype-based inheritance**. Every object has an internal link to another object called its **prototype**. Methods and properties not found directly on the object are looked up on the prototype chain.

### 6.1 Object Prototype

Every object you create (via literal or constructor) has a prototype behind the scenes:

```
const objLiteral = {};
console.log(Object.getPrototypeOf(objLiteral));
// This is usually Object.prototype

```

### 6.2 Constructor Functions & Prototypes

When you create an object with a constructor function or class, the `.prototype` property of that function/class is used as the new object’s prototype.

```
function Animal(name) {
  this.name = name;
}
Animal.prototype.move = function () {
  console.log(this.name + " is moving");
};

const cat = new Animal("Kitty");
cat.move(); // "Kitty is moving"

```

Here, `cat` inherits the `move` method from `Animal.prototype`.

### 6.3 Prototype Chain

If `cat` doesn’t have a property or method, JavaScript looks at `Animal.prototype`. If it doesn’t find it there, it looks at `Object.prototype`, and so on. This chain can be arbitrarily long.

## 7. Built-In Objects

JavaScript provides many built-in objects for common tasks. Some key ones:

- **Array**: extends `Array.prototype`; has methods like `.push()`, `.forEach()`, etc.
- **String**: extends `String.prototype`; methods like `.toUpperCase()`, `.substring()`, etc.
- **Number**, **Boolean**, **Date**, **RegExp**, **Error**, **Map**, **Set**, and more.

All of these are specialized objects with properties and methods designed for their respective data types.

## 8. Object Methods (Static Methods on `Object`)

JavaScript has various static methods on the global `Object` constructor:

1. **`Object.keys(obj)`**: Returns an array of the object’s own enumerable property keys.
2. **`Object.values(obj)`**: Returns an array of the object’s own enumerable property values.
3. **`Object.entries(obj)`**: Returns an array of `[key, value]` pairs.
4. **`Object.assign(target, source)`**: Copies properties from source to target.
5. **`Object.create(proto, [propertiesObject])`**: Creates a new object with a specified prototype.
6. **`Object.defineProperty(obj, prop, descriptor)`**: Defines or modifies a property.
7. **`Object.defineProperties(obj, props)`**: Defines or modifies multiple properties.
8. **`Object.freeze(obj)`**: Makes an object’s properties immutable.
9. **`Object.seal(obj)`**: Prevents new properties from being added, but existing ones are still writable.
10. **`Object.getOwnPropertyDescriptor(obj, prop)`**: Returns property descriptor for a specific property.
11. **`Object.getPrototypeOf(obj)`**: Returns the prototype of `obj`.
12. **`Object.setPrototypeOf(obj, proto)`**: Sets the prototype of `obj`.

Example:

```
const user = { name: "Dana", age: 28 };

// 1. Get keys
console.log(Object.keys(user));   // ["name", "age"]

// 2. Get values
console.log(Object.values(user)); // ["Dana", 28]

// 3. Get entries
console.log(Object.entries(user)); // [["name","Dana"], ["age",28]]

// 4. Assign properties
const newUser = Object.assign({}, user, { city: "Barcelona" });
console.log(newUser); // { name: "Dana", age: 28, city: "Barcelona" }

```

## 9. Getters and Setters

**Getters** and **setters** allow you to intercept property access and assignment. Useful for computed properties or validation.

```
const rectangle = {
  width: 10,
  height: 5,

  get area() {
    return this.width * this.height;
  },

  set size({ width, height }) {
    if (width > 0) this.width = width;
    if (height > 0) this.height = height;
  }
};

console.log(rectangle.area); // 50
rectangle.size = { width: 20, height: 10 };
console.log(rectangle.area); // 200

```

- `area` is accessed like a property, but it runs code internally.
- `size` is assigned like a property, but you can enforce logic or constraints.


## 10. Advanced Topics

### 10.1 Symbols as Object Keys

Symbols (introduced in ES6) are unique and immutable primitive values. They can be used as special, non-clashing object keys:

```
const MY_KEY = Symbol("myKey");
const obj = {
  [MY_KEY]: "secretValue"
};

console.log(obj[MY_KEY]); // "secretValue"

```

They don’t appear in normal property enumeration (`Object.keys`, `for...in`, etc.).

### 10.2 Private Fields in Classes

ESNext (class fields syntax) introduced truly private fields using `#`:

```
class BankAccount {
  #balance = 0; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
// console.log(account.#balance); // Syntax error - can't access outside class

```

This ensures you cannot access `#balance` outside the class body.

### 10.3 Property Descriptor Manipulation

You can modify how properties behave:

```
const config = {};
Object.defineProperty(config, "env", {
  value: "production",
  writable: false,    // cannot change
  enumerable: true,   // visible in loops
  configurable: true  // can delete or redefine
});

console.log(config.env); // "production"
config.env = "development"; // fails silently in non-strict or throws in strict

```

### 10.4 Prototype Manipulation

You can dynamically change an object’s prototype using `Object.setPrototypeOf(obj, newProto)`, though it’s typically discouraged for performance reasons.

## 11. Summary and Best Practices

- **Object Literals** are the easiest and most common way to create objects.
- Use **classes** (ES6) or **constructor functions** if you need multiple similar objects and want to manage inheritance or share methods.
- Understand that **JavaScript’s prototype chain** is the basis of inheritance.
- Use **getters and setters** for controlled property access.
- Manipulate **property descriptors** for advanced behaviors like read-only properties.
- Use **`this`** carefully—context matters.
- Know how to use built-in **`Object` methods** like `.keys()`, `.assign()`, `.create()`, and others for everyday tasks.

By mastering objects, their prototypes, and the built-in methods, you will be well-prepared to tackle more complex patterns in JavaScript and libraries/frameworks that rely heavily on object manipulation.

---

### Example Recap

**Simple Object Example**:

```
const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  printInfo() {
    console.log(`${this.title} by ${this.author}`);
  }
};

book.printInfo(); // "Eloquent JavaScript by Marijn Haverbeke"

```

**Constructor + Prototype Example**:

```
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.printInfo = function() {
  console.log(`${this.title} by ${this.author}`);
};

const myBook = new Book("JavaScript: The Good Parts", "Douglas Crockford");
myBook.printInfo(); // "JavaScript: The Good Parts by Douglas Crockford"

```

**Class Example**:

```
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  printInfo() {
    console.log(`${this.title} by ${this.author}`);
  }
}

const myBook = new Book("You Don’t Know JS", "Kyle Simpson");
myBook.printInfo(); // "You Don’t Know JS by Kyle Simpson"

```

---

**That’s the deep dive into JavaScript objects!** If you grasp these concepts, you’ll have a strong foundation for building advanced JavaScript applications, working with frameworks, and understanding the underlying mechanics of the language.