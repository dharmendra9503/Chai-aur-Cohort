const human = {
    greet() { console.log('Hello'); },
    skills: new Set(["Engineering", "Physics"]),
};

const serialized = JSON.stringify(human);
// console.log(serialized);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fun = function () {
            return "Hello";
        }
    }
}

Person.prototype.getKeys = function () {
    return Object.keys(this);
};

const p1 = new Person("Dharmendra", 22);
console.log(p1.getKeys());
console.log(p1);

const serialized2 = JSON.stringify(p1);
console.log(serialized2);
const dese = JSON.parse(serialized2);
console.log(dese);



//Full example.
class Human {
    constructor(name, birthDate, skills) {
        this.name = name;
        this.birthDate = birthDate;
        this.skills = skills;
    }

    toJSON() {
        return {
            type: "Human",
            name: this.name,
            birthDate: this.birthDate.toISOString(),
            skills: [...this.skills],
        };
    }

    static fromJSON(json) {
        return new Human(
            json.name,
            new Date(json.birthDate),
            new Set(json.skills)
        );
    }
}

// Serialization
const astronaut = new Human("Alex", new Date("1993-01-15"), new Set(["Piloting", "Engineering"]));
const serializedAstronaut = JSON.stringify(astronaut);

// Transmission...

// Deserialization (with reviver)
const receivedAstronaut = JSON.parse(serializedAstronaut, (key, value) => {
    if (value?.type === "Human") return Human.fromJSON(value);
    return value;
});

console.log(receivedAstronaut);
console.log(receivedAstronaut.birthDate instanceof Date); // true
console.log(receivedAstronaut.skills instanceof Set); // true
