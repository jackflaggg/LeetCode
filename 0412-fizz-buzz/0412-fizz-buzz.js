/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = Array.from({ length: n}, (_, i) => i + 1);
    return arr.map((elem) => {
        if (elem % 3 === 0 && elem % 5 === 0) {
            return "FizzBuzz";
        } else if (elem % 3 === 0) {
            return "Fizz";
        } else if (elem % 5 === 0) {
            return "Buzz";
        } else {
            return elem.toString();
        }
    });
};

