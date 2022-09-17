console.log("Some");

// Some function
const numbers = [1, 2, 3, 4, 5, 8, 9]; // output is true b/c greater than 4 values
// const numbers=[1,2,3,4];    // output is false
const result = numbers.some(greterThanFour);
function greterThanFour(item) {
    return item > 4;
}
console.log(result);

const people = [
    { name: "A", age: 17 },
    { name: "B", age: 18 },
    { name: "C", age: 19 },
    { name: "D", age: 20 },
]
const isAnyAdult = people.some(person => person.age > 18);
console.log("Is any adult: " + isAnyAdult);
