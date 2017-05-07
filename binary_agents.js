/*

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.prototype.charCodeAt() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

    String.fromCharCode() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

*/

function binaryAgent(str) {

    const arrStr = str.split(" ");
    let sentence = "";

    for(let i = 0; i < arrStr.length; i++){
        const str = arrStr[i];
        const target = "1";
        let position = -1;
        let sum = 0;

        while((position = str.indexOf(target, position + 1)) != -1){
            switch(position){
                case 0:
                    sum += 128;
                    break;
                case 1:
                    sum += 64;
                    break;
                case 2:
                    sum += 32;
                    break;
                case 3:
                    sum += 16;
                    break;
                case 4:
                    sum += 8;
                    break;
                case 5:
                    sum += 4;
                    break;
                case 6:
                    sum += 2;
                    break;
                case 7:
                    sum += 1;
                    break;
            } 
        }
        sentence += String.fromCharCode(sum);
    }

    console.log(sentence);
    //return str;
}

// should return "Aren't bonfires fun!?"
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// should return "I love FreeCodeCamp!"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");