/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.prototype.indexOf()

    Array.prototype.push()

    Array.prototype.join()

    String.prototype.substr()

    String.prototype.split()

*/

function translatePigLatin(str) {

    const arrStr = str.split("");
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const vowels = ["a", "e", "i", "o", "u"];
    const isFirstLetterVowel = vowels.some( el => {
        return el == str[0];
    });

    if(isFirstLetterVowel){
        console.log(str + "way");
    } else {
        for (let i = 0, numLetters = arrStr.length; i < numLetters; i++){
            const isLetterConsonant = consonants.some( el => {
                return el == arrStr[i];
            });
            
            if(!isLetterConsonant){
               const subConsonants = str.substr(0, i);
               str = str.substr(i) + subConsonants + "ay";

               console.log(str);
               break;
            }
        }
        
    }

    // return str;
}

translatePigLatin("consonant");

translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove");      // should return "oveglay".
translatePigLatin("algorithm");  // should return "algorithmway".
translatePigLatin("eight");      // should return "eightway". 