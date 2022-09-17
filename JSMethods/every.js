console.log("Every");

// Every function
const people = [
    { name: "A", age: 17 },
    { name: "B", age: 18 },
    { name: "C", age: 19 },
    { name: "D", age: 20 },
]

const isEveryOneAdult = people.every(person => person.age > 18);
console.log("Is Every one adult: " + isEveryOneAdult);
