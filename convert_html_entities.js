/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

    HTML Entities https://dev.w3.org/html5/html-author/charref

    String.prototype.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

*/

function convertHTML(str) {
    // &colon;&rpar;

    let strArr = str.split("");

    for(let i = 0; i < strArr.length; i++) {
        switch (strArr[i]) {
            case "&":
                strArr[i] = "&amp;";
                break;
            case "<":
                strArr[i] = "&lt;";
                break;
            case ">":
                strArr[i] = "&gt;";
                break;
            case "\"":
                strArr[i] = "&quot;";
                break;
            case "'":
                strArr[i] = "&apos;";
                break;
        }
    }

    console.log(strArr.join(""));
    // return str;
}

convertHTML("Dolce & Gabbana");            // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve");             // should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List");            // should return Shindler&​apos;s List.
convertHTML("<>");                         // should return &​lt;&​gt;.
convertHTML("abc");                        // should return abc. 