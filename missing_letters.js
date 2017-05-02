/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.prototype.charCodeAt() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

    String.fromCharCode() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

*/

function fearNotLetter(str) {

    const arrStr = str.split("");

    let missingLetter = undefined;

    for(let i = 1; i < arrStr.length; i++){
        let currentIndexCharCode = arrStr[i].charCodeAt();
        let previousIndexCharCode = arrStr[i - 1].charCodeAt();
        if(currentIndexCharCode - 1 != previousIndexCharCode) {
            missingLetter = String.fromCharCode(currentIndexCharCode - 1);
        }
    }

    console.log(missingLetter);
    // return str;
}

fearNotLetter("abce");            // should return "d".
fearNotLetter("abcdefghjklmno");  // should return "i".
fearNotLetter("bcd");             // should return undefined.
fearNotLetter("yz");              // should return undefined.