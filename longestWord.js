function longestWord(sen) {
    let cleanup = sen.replace(/\W/g, ' ');
    let split = cleanup.split(' ');
    let longestWord = '';
    split.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }else {
            return;
        }
    })
    return longestWord;
}
console.log(longestWord("Apple%%%ball!* car"));
console.log(longestWord("man aint pissed roaarrr"));

function longestString(sen) {
    // Remove anything except alphabets and numbers.
    const arr = sen.match(/[a-z0-9]+/gi);
    arr;
    // sort the array based on the length (descending order)
    var sorted = arr.sort((a,b) => b.length - a.length);
    sorted;
    // Return the first element of the array
    return sorted[0];
}

console.log(longestString("the $$$longest# word is coderbyte"));