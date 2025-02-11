let foo;
console.log(`Variable foo is unassigned variable that holds " ${foo} " and is of type "${typeof foo}"`);

foo = 42;
console.log(`Variable foo holds the value " ${foo} " and is of type "${typeof foo}"`);

foo = 'bar';
console.log(`Variable foo holds the value " ${foo} " and is of type "${typeof foo}"`);

foo = true;
console.log(`Variable foo holds the value " ${foo} " and is of type "${typeof foo}"`);

foo = null;
console.log(`Variable foo holds the value " ${foo} " and is of type "${typeof foo}`);

foo = BigInt(325252252);
console.log(`Variable foo holds the value " ${foo} " and is of type "${typeof foo}"`);

foo = Symbol("Hello");
console.log('Variable foo holds the value', foo , `and is of type "${typeof foo}"`);

const newObj = {
    name: "Dharmendra",
    surname: "Prajapati",
    address: "Gujarat, India",
}
console.log(newObj);
console.log(typeof newObj);

const newObj2 = Object({
    teaName: "Green tea",
    origin: "Assam"
});
console.log(newObj2);
console.log(typeof newObj2);


const newArr = ["dharmendra", "prajapati", 45, "Gujarat, India"];
console.log(newArr);
console.log(typeof newArr);

const newArr2 = Array("hello", "how", "are", "you");
console.log(newArr2);
console.log(typeof newArr2);


console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(5455));