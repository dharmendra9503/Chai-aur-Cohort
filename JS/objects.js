const obj = {
    name: "dharmendra",
    age: 22,
    sample: {
        name: "Dharmendra",
        age: 22
    },
    getDetails: function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const nonenumrable = Object.defineProperty(obj, "dax", {
    value: "dax",
    enumerable: false
})

// console.log(obj);


// const copied = {...obj};
const copied = Object.assign({}, obj);

copied.age = 25;
if(copied.dax) copied.dax = "HElLO"

copied.sample.age = 600;

// console.log(obj);
// console.log(copied);


const o = new Object();
console.log(o);

const o2 = new Object();
console.log(o2);

const o3 = new Object(null);
console.log(o3);


const arr = [1];
console.log(Array.isArray(arr) ? "Array" : typeof arr);

const obje = {
    user: {
        name: "Dharmendra",
        address: {
            city: "Mehsana"
        }
    }
}

console.log(Object.keys(obje, Infinity));
