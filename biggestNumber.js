const numbers = [1, 5, 9, 3];

function getMax(arr) {
    let max = -Infinity;
    arr.forEach(function (number) {
        max = Math.max(max, number);
    });
    return max;
}

const max = getMax(numbers);
max;

const biggest = (arr) => {
    let bigst = -Infinity;
    arr.forEach(digit => {
        bigst = Math.max(bigst, digit);
    })
    return bigst;
}

const c = biggest(numbers);
c;


// WOWWW! No need for above process; --------------------------------------------------------****
const digits = [1, 2, 3, 7, 9, 43];
const largest = Math.max(...digits);
largest;