### JavaScript: Deep Copy vs. Shallow Copy

When working with objects and arrays in JavaScript, understanding **deep copy** and **shallow copy** is essential to prevent unintended modifications and unexpected behavior.

---

## 1. **Shallow Copy**

A **shallow copy** creates a new object or array, but it only copies references for nested objects instead of creating a full independent copy. This means that if the original object contains nested objects, changes to those nested objects in the copied structure will also reflect in the original.

### 🔹 **Example of Shallow Copy**

Using the spread operator (`...`), `Object.assign()`, or `Array.slice()` creates a **shallow copy**.

```jsx
const original = {
    name: "Alice",
    details: { age: 25, city: "New York" }
};

// Shallow copy using spread operator
const shallowCopy = { ...original };

shallowCopy.details.city = "Los Angeles";

console.log(original.details.city);  // "Los Angeles" (Original object is also modified)
console.log(shallowCopy.details.city); // "Los Angeles"

```

📌 **Key Takeaways:**

- The `shallowCopy` object is a new object, but its `details` property still points to the same reference as `original.details`.
- Any modification to `details` in `shallowCopy` will also be reflected in `original`.

### ✅ **Common Ways to Create a Shallow Copy**

1. **Using the spread operator (`...`)**
    
    ```jsx
    const shallowCopy = { ...original };
    
    ```
    
2. **Using `Object.assign()`**
    
    ```jsx
    const shallowCopy = Object.assign({}, original);
    
    ```
    
3. **Using `Array.slice()` (for arrays)**
    
    ```jsx
    const numbers = [1, 2, 3];
    const shallowCopyArray = numbers.slice();
    
    ```
    
4. **Using `Array.from()`**
    
    ```jsx
    const shallowCopyArray = Array.from(numbers);
    
    ```
    

## 2. **Deep Copy**

A **deep copy** creates a new object or array and recursively copies all nested objects and arrays, ensuring complete independence from the original.

### 🔹 **Example of Deep Copy**

Using **structuredClone()**, JSON methods, or libraries like Lodash ensures a **deep copy**.

```jsx
const original = {
    name: "Alice",
    details: { age: 25, city: "New York" }
};

// Deep copy using structuredClone()
const deepCopy = structuredClone(original);

deepCopy.details.city = "Los Angeles";

console.log(original.details.city);  // "New York" (Original object is unchanged)
console.log(deepCopy.details.city);  // "Los Angeles"

```

📌 **Key Takeaways:**

- The `deepCopy` object is a fully independent copy of `original`.
- Any changes to `deepCopy.details` **do not affect** `original.details`.

### ✅ **Common Ways to Create a Deep Copy**

1. **Using `structuredClone()` (Best native solution)**
    
    ```jsx
    const deepCopy = structuredClone(original);
    
    ```
    
    - ✅ Supports most data types.
    - 🚨 Not available in older browsers.
2. **Using `JSON.parse(JSON.stringify(obj))` (Simple but limited)**
    
    ```jsx
    const deepCopy = JSON.parse(JSON.stringify(original));
    
    ```
    
    - ✅ Works well for simple objects.
    - 🚨 **Loses functions, `Date`, `RegExp`, `Map`, `Set`, and undefined values.**
3. **Using Lodash (`_.cloneDeep`)**
    
    ```jsx
    const _ = require('lodash');
    const deepCopy = _.cloneDeep(original);
    
    ```
    
    - ✅ Best for complex objects.
    - 🚨 Requires an external library.
4. **Using Recursive Function (Manual deep copy)**
    
    ```jsx
    function deepClone(obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
    
        if (Array.isArray(obj)) {
            return obj.map(deepClone);
        }
    
        const clone = {};
        for (let key in obj) {
            clone[key] = deepClone(obj[key]);
        }
    
        return clone;
    }
    
    const deepCopy = deepClone(original);
    
    ```
    

## 3. **Comparison Table**

| Feature | Shallow Copy | Deep Copy |
| --- | --- | --- |
| Copies references for nested objects? | ✅ Yes | ❌ No |
| Modifying a nested object affects the original? | ✅ Yes | ❌ No |
| Performance | ⚡ Fast | 🐢 Slower |
| Suitable for simple objects? | ✅ Yes | ✅ Yes |
| Suitable for nested/complex objects? | ❌ No | ✅ Yes |
| Common methods | `Object.assign()`, `...spread`, `Array.slice()` | `structuredClone()`, `JSON.parse(JSON.stringify())`, `_.cloneDeep()` |


## 4. **When to Use Each?**

### Use **Shallow Copy** when:

- The object is **flat** (i.e., no nested objects).
- You only need to modify top-level properties.
- Performance is a priority.

### Use **Deep Copy** when:

- The object has **nested objects or arrays**.
- You need a truly **independent** copy.
- You want to **prevent unintended side effects**.


## 5. **Final Thought**

- **Shallow copy** is fine for simple objects.
- **Deep copy** ensures full separation but can be **performance-intensive**.
- `structuredClone()` is the best modern method for **deep copying**.
- Be mindful of edge cases like **functions, `Date`, `RegExp`, `Map`, and `Set`** when choosing your copy method.

<br>

>
> NOTE: JS file to experiment, check [here](JS/shallow_vs_deep_copy.js)
