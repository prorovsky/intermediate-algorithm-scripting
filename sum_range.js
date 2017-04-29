/*  Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Here are some helpful links:

    Math.max() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

    Math.min() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

    Array.prototype.reduce() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example

*/

function sumAll(arr) {
    const arrMin = Math.min.apply(null, arr);
    const arrMax = Math.max.apply(null, arr);
    let result = 0;

    for(let min = arrMin, max = arrMax; min <= max; min++) {
        result += min;
    }


    console.log(result);
}

sumAll([1, 4]);   // should return a number.
sumAll([1, 4]);   // should return 10.
sumAll([4, 1]);   // should return 10.
sumAll([5, 10]);  // should return 45.
sumAll([10, 5]);  //should return 45. 