console.log("Reduce");

// reduce function
const arr = [5, 1, 3, 2, 6, 8, 9];

// Find sum and max
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];

//     }
//     return sum;
// }
// console.log("Sum of Array is: " + findSum(arr));
//  

// This function is itterated each and every array
/* 1st arrgument is a func and 2nd argument is any 
intial value which you need to pass inside this accumilator*/
const output = arr.reduce(function (accumilator, current) {
    accumilator = accumilator + current;
    return accumilator;
}, 0);
console.log("Sum of Array is: " + output)


// Find sum and max
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Max of Array is: " + findMax(arr));


// Reduce Example
const users = [
    { firstname: "Asma", lastname: "Ghafoor", age: 20 },
    { firstname: "Ayesha", lastname: "Ayesha", age: 21 },
    { firstname: "Amna", lastname: "Amna", age: 18 }
]
// acc = {20->1, 21->1, 18->1}
const result = users.reduce(function (acc, curr) {
    // if 20 age person is not present than assign work to age 1
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1
    }
    return acc;
}, {})
console.log(result);