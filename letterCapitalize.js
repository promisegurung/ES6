function letterCapitalize(str) {
    const originalSen = str.trim().split(' ');
    originalSen;
    let capitalizedSen = [];
    originalSen.map(word => {
         var x = word[0];
         x;
         var y = word.slice(1); // everything else starting from index 1
         y;
        newWord = word[0].toUpperCase() + word.slice(1);
        capitalizedSen.push(newWord);
    })
    return capitalizedSen.join(' ');
}

console.log(letterCapitalize(" i am a man "));
// expected: " I Am A Man "