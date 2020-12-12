const findLongestWord = function(string) {
    const wordArray = string.split(' ');
    let longestWord = wordArray[0];
    for (const word of wordArray) {
        longestWord = longestWord.length < word.length
            ? word
            : longestWord;
    }
    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'