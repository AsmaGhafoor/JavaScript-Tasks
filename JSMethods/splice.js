console.log("Splice");

// Splice function - Delete existent value
const numbers = [1, 2, 3, 4, 5, 6];

// splice(index, howmany, "new value", Delete); // 3 parameters in splice
// numbers.splice(2, 0, "Asma", "Ghafoor");
numbers.splice(2, 2, "Asma", "Ghafoor"); // 2 values delete
document.write(numbers + "<br><br>")



