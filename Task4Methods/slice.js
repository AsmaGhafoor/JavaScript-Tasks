console.log("Slice");

// Slice function
const names = ["Asma", "Zeeshan", "Amna", "Ayesha"];
//  ["-4", "-3", "-2", "-1"];
document.write(names + "<br>");
// const result = names.slice(1, 2);
const result = names.slice(-4, -3) // output is Asma
document.write(result + "<br>");
//slice(start,end)