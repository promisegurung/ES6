function replaceLetter(match) {
    const arr = [...match];
    let secondArr = [];
    arr.map(char => {
        if (char === 'z') {
            secondArr.push('a');
        } else {
            let ascii = char.charCodeAt(0);
            secondArr.push(String.fromCharCode(ascii + 1))
        }
    });
    return secondArr.join('');
}

const z = replaceLetter("abcdefghijkl");
z;