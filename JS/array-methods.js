// Create new array 
const values = ['mango', 'elephant', 'Ertiga', 256, 20, 'Wide'];
console.log(values);

// length property to get size of the array
console.log(`Size of the array: ${values.length}`);

// Array constructor
/**
 * Array constructor creates Array objects.
 * 
 * Array() can be called with or without new. Both create a new Array instance.
 * 
 * A JavaScript array is initialized with the given elements. 
 */
const array = new Array('mango', 'elephant', 'Ertiga', 256, 20, 'Wide');
console.log(array);

/**
 * Array constructor with the single parameter.
 */
const newArr1 = new Array(5);
console.log(newArr1);
console.log(`Size of the array create by array constructor: ${newArr1.length}`); // 5

const newArr2 = new Array("Hello");
console.log(newArr2);
console.log(`Size of the array create by array constructor: ${newArr2.length}`); // 1

/**
 * Array constructor with multiple parameters.
 */
const newArr3 = new Array(1, 2, 3, 4, 5);
console.log(newArr3); // Output: [ 1, 2, 3, 4, 5 ]
console.log(`Size of the array create by array constructor: ${newArr3.length}`); // Output: 5

// .at() method
const arr = ['mango', 'elephant', 'Ertiga', 256, 20, 'Wide'];
console.log(arr.at(4)); // Output: 20
console.log(arr.at(-4)); // Output: Ertiga

// .concat() method
const arr1 = ['mango', 'elephant', 'Ertiga', 256, 20, 'Wide'];
const arr2 = ['apple', 'lion', 'Swift', 512, 40, 'Narrow'];
const arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [ 'mango', 'elephant', 'Ertiga', 256, 20, 'Wide', 'apple', 'lion', 'Swift', 512, 40, 'Narrow' ]

// .find method
const sampleArray = [5, 12, 10, 120, 56];
const found = sampleArray.find(element => element > 10);
console.log(found); // Output: 12

/**
 * The find() method is an iterative method. It calls a provided callbackFn function once for 
 * each element in an array in ascending-index order, until callbackFn returns a truthy value. 
 * find() then returns that element and stops iterating through the array. If callbackFn never 
 * returns a truthy value, find() returns undefined. 
 * 
 * .find method with `thisArg` parameter.
 * 
 * find(callbackFn, thisArg)
 * 
 * passed thisArg as the second argument in find(). It sets the this value inside the callback function
 */
const obj = {
    threshold: 20,
    check(num) {
        return num > this.threshold;
    }
};

const numbers = [10, 15, 25, 30];
const callbackFn = function (num) {
    return this.check(num);
};

// Passing `obj` as `thisArg`
const result = numbers.find(callbackFn, obj);
console.log(result); // Output: 25



/**
 * .entries() method
 * 
 * The entries() method of Array instances returns a new array iterator object that 
 * contains the key/value pairs for each index in the array.
 */
const arrItr = ["a", "b", , "c"];
const iterator1 = arrItr.entries();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// Iterating with index and element
for (const [index, element] of arrItr.entries()) {
    console.log(index, element);
}

// Using a for...of loop
for (const entry of arrItr.entries()) {
    console.log(entry);
}


/**
 * .every() method
 * 
 * The every() method of Array instances tests whether all elements in the array pass the 
 * test implemented by the provided function. It returns a Boolean value.
 * 
 * callbackFn is invoked only for array indexes which have assigned values. 
 * It is not invoked for empty slots in sparse arrays.
 */
const isBelowThreshold = (currentValue) => currentValue < 40;
const arrayEvery = [1, 30, 39, 29, 10, , 13];
console.log(arrayEvery.every(isBelowThreshold));

//Check if one array is subset of another.
const checkIsSubset = (array1, array2) => {
    return array1.every(element => array2.includes(element));
}
console.log(checkIsSubset([1, 2, 3, 4], [1, 2, 3, 4, 5])); // Output: true
console.log(checkIsSubset([1, 2, 3, 4], [1, 2, 3])); // Output: false

// Check is array in ascending order
const isAscending = (array) => {
    return array.filter(num => num > 0)
        .every((num, index, arr) => {
            if (index === 0) return true;
            return num > arr[index - 1];
        })
}
console.log(isAscending([-2, 5, -1, 7, 10, -3, 11]));
console.log(isAscending([-2, 5, -1, 7, 10, -3, 1]));


/**
 * .fill() method
 * 
 * The fill() method of Array instances changes all elements within a range of indices 
 * in an array to a static value. It returns the modified array.
 */
const array1 = [1, 2, 3, 4];

/**
 * Fill with 0 from position 2 until position 4, 2 is inclusive and 4 is exclusive
 */
console.log(array1.fill(0, 2, 3));

/**
 * Fill with 5 from position 1
 */
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]


