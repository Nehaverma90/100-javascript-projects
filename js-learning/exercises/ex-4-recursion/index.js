/*
 * sum
 *
 * A recursive function that adds up all of the numbers
 * in an array, and all the numbers in a sub-array.
 *
 * Returns the sum of a set of numbers, as a number.
 */

const foo = [ 1, [ 2, 3, 4, 5, [ 6, 7, 8 ] ] ]; // 36


const sum = function(param) {
    param.reduce(function(total, elem, index) {
        console.log("total is " + total);
        console.log("elem is " + elem + " — isArray(elem) is " + Array.isArray(elem));

        // check to see if elem (the item being iterated over) is an array
        if (Array.isArray(elem) === false) {
            total += elem;
            console.log("now the total is " + total);
            // if it IS NOT: add it to the accumulator (total)
            // if it IS: call function recursively to see if elem is an array...
        } else {
            console.log("i must be an array");
            sum(elem);
        }
    });
}

console.log("test foo should be 36, is: " + sum(foo) ); // 36

module.exports = sum;
