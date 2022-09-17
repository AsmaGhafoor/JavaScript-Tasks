console.log("Filter");

// filter function
const arr = [5, 1, 3, 2, 6, 7, 9];

// Filter the Odd values
function isOdd(x) {
    return x % 2;
}
const output1 = arr.filter(isOdd);
console.log(output1);


// Filter the Even values
function isEven(x) {
    return x % 2 === 0;
}
const output2 = arr.filter(isEven);
console.log(output2);

// Find all the values which are greater than 4
const output3 = arr.filter((x) => x > 4);
console.log(output3);

// const output3 = arr.filter(function isGreaterthan4(x) {
//     return x > 4;
// });
// console.log(output3);

