# JavaScript Datatyps

**JavaScript is a cross-platform, object-oriented scripting language used to make web pages interactive, enabling features like animations, clickable buttons, and dynamic content updates. It runs both in the browser (client-side) for manipulating the Document Object Model (DOM) and on the server (server-side) using environments like Node.js, allowing for database interactions, file handling, and real-time applications. With a rich standard library, JavaScript provides powerful tools like Arrays, Maps, and Math, making it a versatile language for web development. 🚀**

## JavaScript has two main categories of data types: Primitive and Non-Primitive (Reference).

### Primitive DataType

> In JavaScript, primitive values are immutable - once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value. By contrast, objects and arrays are mutable by default - their properties and elements can be changed without reassigning a new value.

1. **Number:** Stores numeric value include both integers and floating-point numbers. (e.g., 15, 3.15)
2. **String:** Stores text (e.g., "Dharmendra", "Prajapati")
3. **Boolean:** Stores `true` and `false`.
4. **Undefined:** A variable declared but not assigned a value.
5. **null:** Represents an empty or unknown value (e.g., let y = null;)
6. **BigInt:** Handles very large numbers (e.g., 12345678901234567890n)
7. **Symbol:** Unique and immutable value (used for object properties)

<br>

 - All primitive types, except `null`, can be tested by the typeof operator. typeof null returns "object", so one has to use === `null` to test for null. 

    | Type        | `typeof` return value |
    | ----------- | --------------------- |
    | `Null`      | `"object"`            |
    | `Undefined` | `"Undefined"`         |
    | `Boolen`    | `"boolean"`           |  
    | `Number`    | `"number"`            |
    | `String`    | `"string"`            |
    | `BigInt`    | `"bigint"`            |
    | `Symbol`    | `"symbol"`            |

### Non-Primitive DataType

1. **Object:** Stores key-value pairs (e.g., { name: "John", age: 25 })
2. **Array:** Ordered list of values (e.g., [1, 2, 3])


## JavaScript is a dynamic and weakly typed programming language, but How ?

### Dynamic Typed

- In JavaScript, variable can be created using `let` and `const`.
- You can assign any type of value to a variable without specifying its type.
  
    ```javascript
    let data = 117;      // Number
    data = "Dharmendra"  // String
    ```

### Weakly Typed

- JavaScript performs implicit type conversions when different types interact.
  
    ```javascript
    const foo = 42; // foo is a number
    const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
    console.log(result); // 421
    ```
    While useful, weak typing can cause bugs.
    To avoid issues:
    - Use strict equality (===) to compare values.
    - Convert types explicitly with Number() and String().

<br>

> <br>
> 
> `NOTE:` 
> 
> [Run this](/JS/datatypes.js) to see actual view of this datatype.
> 
> <br>