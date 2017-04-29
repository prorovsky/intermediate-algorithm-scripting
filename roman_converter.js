/*

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Roman Numerals https://www.mathsisfun.com/roman-numerals.html

    Array.prototype.splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?v=example

    Array.prototype.indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?v=example

    Array.prototype.join() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?v=example

*/

function convertToRoman(num) {
    let romanNumber = "";

    const stringNum = num.toString();
    const romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const romanHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const romanThousands = ["", "M", "MM", "MMM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"];

    if(stringNum.length == 4){
        romanNumber += romanThousands[stringNum[0]];
        romanNumber += romanHundreds[stringNum[1]];
        romanNumber += romanTens[stringNum[2]];
        romanNumber += romanOnes[stringNum[3]];
    } else if(stringNum.length == 3) {
        romanNumber += romanHundreds[stringNum[0]];
        romanNumber += romanTens[stringNum[1]];
        romanNumber += romanOnes[stringNum[2]];
    } else if (stringNum.length == 2) {
        romanNumber += romanTens[stringNum[0]];
        romanNumber += romanOnes[stringNum[1]];
    } else if (stringNum.length == 1) {
        romanNumber += romanOnes[stringNum[0]];
    }
    
    console.log(romanNumber);
    // return num;
}

convertToRoman(36);

convertToRoman(2)    // should return "II".
convertToRoman(3)    // should return "III".
convertToRoman(4)    // should return "IV".
convertToRoman(5)    // should return "V".
convertToRoman(9)    // should return "IX".
convertToRoman(12)   // should return "XII".
convertToRoman(16)   // should return "XVI".
convertToRoman(29)   // should return "XXIX".
convertToRoman(44)   // should return "XLIV".
convertToRoman(45)   // should return "XLV"
convertToRoman(68)   // should return "LXVIII"
convertToRoman(83)   // should return "LXXXIII"
convertToRoman(97)   // should return "XCVII"
convertToRoman(99)   // should return "XCIX"
convertToRoman(500)  // should return "D"
convertToRoman(501)  // should return "DI"
convertToRoman(649)  // should return "DCXLIX"
convertToRoman(798)  // should return "DCCXCVIII"
convertToRoman(891)  // should return "DCCCXCI"
convertToRoman(1000) // should return "M"
convertToRoman(1004) // should return "MIV"
convertToRoman(1006) // should return "MVI"
convertToRoman(1023) // should return "MXXIII"
convertToRoman(2014) // should return "MMXIV"
convertToRoman(3999) // should return "MMMCMXCIX" 