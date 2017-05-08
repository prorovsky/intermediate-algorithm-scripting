/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Closures https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

    Arguments object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

*/

function addTogether() {
    var sum = 0;
    
    let argumentsArr = [].slice.call(arguments);

    if(argumentsArr.length > 1){
        return add();
    } else {
        if(typeof argumentsArr[0] === "number"){
            var num = argumentsArr[0];
            return addAnotherNumber(num);
        } else {
            return undefined;
        }
    }

    function add(){
        for(let i = 0; i < argumentsArr.length; i++){
            if(typeof argumentsArr[i] === "number"){
                sum += argumentsArr[i];
            } else {
                return undefined;
            }
        }
        console.log(sum);
    }

    function addAnotherNumber(num){
        return function numerTwo(num2){
            if(typeof num2 === "number"){
                 console.log(num + num2);
            } else {
                return undefined;
            }
        }
    }

    // return add();
    // return false;
}

addTogether(2, 3);                    // should return 5.
addTogether(2)(3);                    // should return 5.
addTogether("http://bit.ly/IqT6zt");  // should return undefined.
addTogether(2, "3");                  // should return undefined.
addTogether(2)([3]);                  // should return undefined.