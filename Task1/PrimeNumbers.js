console.log("TASK 01");
console.log("How to find prime number");
//A prime number is a positive integer that is only divisible by 1 and itself.
// 2, 3, 5, 7, 11 are the first few prime numbers. 
function isPrime(num) {
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            }
            else if (num === i * i) {
                return ("It is a prime numb");
            }
            else {
                return ("It is a not prime numb");
            }
        }
    }
    else {
        return ("It is a not prime numb");
    }
}
console.log(isPrime(12));
