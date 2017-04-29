/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Comparison Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators?v=test

    Array.prototype.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=example

    Array.prototype.filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example

    Array.prototype.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?v=example

    Array.prototype.concat() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example

*/

function diffArray(arr1, arr2) {
    var newArr = [];

    // Same, same; but different.

    const arr3 = arr1.concat(arr2);
    const obj = {};

    for(let i = 0, max = arr3.length; i < max; i++) {
        if(!(arr3[i] in obj)) {
            obj[`${arr3[i]}`] = arr3[i];
        } else {
            delete obj[`${arr3[i]}`];
        }
    }

    for(let key in obj) {
        newArr.push(obj[key]);
    }

    console.log(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return an array.
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// should return ["pink wool"].
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 
// should return ["diorite", "pink wool"].
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); 
// should return [].
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4].
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); 
// should return ["piglet", 4].
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); 
// should return ["snuffleupagus", "cookie monster", "elmo"].
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); 
// should return [1, "calf", 3, "piglet", 7, "filly"]. 