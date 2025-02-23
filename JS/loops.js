/**
 * for loop
 */
console.log("for loop");
let numbers = [4, 8, 10, 55, 21];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/**
 * While loop
 */
console.log("while loop");
let num = [5, 10, 15];
let i = 0;

while (i < num.length) {
    console.log(num[i]);
    i++;
}

/**
 * do...while loop
 */
console.log("do...while loop");
let j = 0;
do {
    console.log(j);
    j += 1;
} while (j < 5);

/**
 * How `for`, `while`, and `do...while` Works for Objects.
 */
//Using Object.keys()
/**
 * Object.keys() returns an array of a given object's own enumerable property names
 */
console.log(`####################### Using Object.keys() ####################### `);

const person = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: function () {
        return "Gujarat, India";
    }
};
const keys = Object.keys(person);
console.log("************ Keys **************");
console.log(keys);

console.log("************ Values using for loop **************");
for (let i = 0; i < keys.length; i++) {
    console.log(person[keys[i]]);
}

console.log("************ Values using while **************");
let itr = 0;
while (itr < keys.length) {
    console.log(person[keys[itr]]);
    itr++;
}

console.log("************ Values using do...while **************");
let itr2 = 0;
do {
    console.log(person[keys[itr2]]);
    itr2++;
} while (itr2 < keys.length);


//Using Object.keys()
/**
 * Object.values() returns an array of a given object's own enumerable property values
 */
console.log(`####################### Using Object.values() ####################### `);

const car = {
    name: "Ertiga",
    model: "Hyundai",
    year: 2017,
    getDetails: function () {
        return this.name + " " + this.model + " " + this.year;
    }
};

const values = Object.values(car);
console.log("************ Values **************");
console.log(values);

console.log("************ Values using for loop **************");
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

console.log("************ Values using while **************");
let it = 0;
while (it < values.length) {
    console.log(values[it]);
    it++;
}

console.log("************ Values using do...while **************");
let it2 = 0;
do {
    console.log(values[it2]);
    it2++;
} while (it2 < values.length);


//Using Object.keys()
/**
 * Object.entries() returns an array of a given object's own enumerable property
 * key-value pairs.
 */
console.log(`####################### Using Object.entries() ####################### `);

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
console.log("************ Entries **************");
console.log(entries);

console.log("************ Entries using for loop **************");
for (let i = 0; i < entries.length; i++) {
    console.log(entries[i], `==> key: ${entries[i][0]}, value: `, entries[i][1]);
}

console.log("************ Entries using while **************");
let itr3 = 0;
while (itr3 < entries.length) {
    console.log(entries[itr3], `==> key: ${entries[itr3][0]}, value: `, entries[itr3][1]);
    itr3++;
}

console.log("************ Entries using do...while **************");
let itr4 = 0;
do {
    console.log(entries[itr4], `==> key: ${entries[itr4][0]}, value: `, entries[itr4][1]);
    itr4++;
} while (itr4 < entries.length);



const newone = Symbol();
const enums = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: "Gujarat, India",
    getDetails: function () {
        return this.name + " " + this.surname + " " + this.address();
    },
    subjects: ["Physics", "Chemistry", "Maths"],
    [newone]: "Dharmendra"
}
console.log(enums);
for (const keys in enums) {
    console.log(`${keys}: ${enums[keys]}`);
};


const obj = { a: 1 };

for (let key in obj) {
    obj.b = 2;
    console.log(key);
}

console.log(obj); // Output: { a: 1, b: 2 }


/**
 * Object with non-enumerable property
 */
const persons = { name: 'Alice' };

// Define a non-enumerable property 'secret'
// using Object.defineProperty
Object.defineProperty(persons, 'secret', {
    value: 'Hidden Info',
    enumerable: false  // explicitly set to false
});

for (let key in persons) {
    console.log(`Property: ${key}, Value: ${persons[key]}`);
}

/**
 * Object with Symbol property
 */
// Create a Symbol for a "favorite color" property
const favoriteColor = Symbol('favoriteColor');

const user = {
    name: 'Bob',
    [favoriteColor]: 'Blue'  // Symbol as key
};

for (let key in user) {
    console.log(`Key: ${key}, Value: ${user[key]}`);
}

const objs = { a: 1, b: 2, c: 3 };

for (const prop in objs) {
    console.log(`objs.${prop} = ${objs[prop]}`);
    Object.defineProperty(objs, "c", { enumerable: false });
}

for (const prop in objs) {
    console.log(`objs.${prop} = ${objs[prop]}`);
}

const proto = { a: 1 };
const objr = { __proto__: proto, a: 2 };

for (const prop in objr) {
    console.log(`objr.${prop} = ${objr[prop]}`);
}
console.log(objr.a);


/***
 * for...of loop
 */
const sample = { foo: 1, bar: 2 };

for (const e of Object.entries(sample)) {
  console.log(e);
}