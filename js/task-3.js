const findLongestWord = function(string) {
    string = string.split(' ');
    let longestWord = "";
    for (const word of string) {
        longestWord = longestWord.length < word.length ? longestWord = word : longestWord;
    }
    return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'