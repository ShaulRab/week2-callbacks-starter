/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array#reduce, utilizing the
first element of the array as the default accumulator.

In other wordsw, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/

let mySimpleReduce = function(arr, cb) {

    // Defines the first value in array as starting value
    let cumma = arr[0];

    // Loops through remaining elements in array
    arr.forEach((ele, i) => {

        // Skips the first element
        if (i === 0){
            return
        } else {

            // accumalates the results by reassigning cumma each loop
            cumma = cb(cumma, ele);
        }
    });

    // Returns the results
    return cumma;

};

/////////////////////////////////////////////////////////////////////////////////////

/*
To have a optional inital cumma...

1. I would add logic to the initialisation of the "cumma" variable to check if a inital value was given.
2. I would change the logic inside the beginning of the forEach() statement to check if a inital value was given
    2b. don't skip the first element of the array if an alternate inital value was given
 */

/////////////////////////////////////////////////////////////////////////////////////
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySimpleReduce;
