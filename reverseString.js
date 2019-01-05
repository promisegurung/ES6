function firstReverse(str) {
    const reversedArray = [...str].reverse();
    return reversedArray.join('');
}

const x = firstReverse("promise gurung");
x;


// string to array 
const string = "i am a string";
string;
const array = [...string];
array;