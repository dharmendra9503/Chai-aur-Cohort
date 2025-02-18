/**
 * Shallow Copy
 */
const newArr = [1,2,3,[4,5,6,[7,8]]];
const copyArrByRef = newArr;

copyArrByRef[1] = 84;

console.log(newArr);
console.log(copyArrByRef);

const copyArr = [...newArr];
console.log(copyArr);

copyArr[1] = 78;
console.log(copyArr);

copyArr[3][0] = 9555;
console.log(newArr);
console.log(copyArr);

/**
 * Deep Copy
 */
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

const original = {
    name: "hello",
    address: {
        state: "Gujarat",
        country: "India"
    }
};
const deepCopy = deepClone(original);
console.log(original);
console.log(deepCopy);

deepCopy.address.country = "USA";
console.log(original);
console.log(deepCopy);