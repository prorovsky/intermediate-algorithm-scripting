/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

    String.prototype.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

*/

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    str = str.replace(/(\s)|(_)/g, "-");
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

    console.log(newStr.toLowerCase());
    //return str;
}

spinalCase("This Is Spinal Tap");     // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap");        // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh");  // should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things");    // should return "all-the-small-things".
