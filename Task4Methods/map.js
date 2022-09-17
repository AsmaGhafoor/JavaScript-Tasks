console.log("Map");

// Map function - To transform an array
const myArray = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}
// Double [10,2,6,4,12]
const output = myArray.map(double);
document.write("Double Array is: " + output);

function triple(x) {
    return x * 2;
}
// Triple [15,3,9,6,18]
const output2 = myArray.map(triple);
document.write("<br> Triple Array is: " + output2);

// You can also pass a function like that
const output3 = myArray.map(function binary(x) {
    return x.toString(2);
});
// Binary ["101"."1","11","10","110"]
document.write("<br> Binary Array is: " + output3);

// const output3=myArray.map((x) => x.toString(2));
// document.write(output3);


// Map Example
const users = [
    { firstname: "Asma", lastname: "Ghafoor", id: 10305 },
    { firstname: "Amna", lastname: "Amna", id: 10300 },
]
const result = users.map((x) => x.firstname + " " + x.lastname)
console.log(result);