function simpleSymbols(str) {
    const startingChar = str[0];
    const endingChar = str[str.length - 1];

    if (startingChar === '+' && endingChar === '+' ) {
        return true;
    } else {
        return false;
    }
}

const isTrue = simpleSymbols('+d+=3=+s+');
isTrue;
const isFalse  = simpleSymbols('f++d+'); 
isFalse;
