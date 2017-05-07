/*

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.isArray() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?v=example

*/

function steamrollArray(arr) {
    // I'm a steamroller, baby

    const result = [];

    arrRecursion(arr);

    function arrRecursion(arrInArr){
        for(let i = 0; i < arrInArr.length; i++){
            if(Array.isArray(arrInArr[i])){
                arrRecursion(arrInArr[i]);
            } else {
                result.push(arrInArr[i]);
            }
        }
    }

    console.log(result);
    // return arr;
}

steamrollArray([[["a"]], [["b"]]]);   // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);  // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);  // should return [1, {}, 3, 4]. 