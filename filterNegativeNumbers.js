const negativeNumbers = [];
const positiveNumbers = [];

function extractNegativeNumbers(numbers) {
    numbers.forEach(digit => {
        if (digit < 0) {
            negativeNumbers.push(digit);
        } else {
            positiveNumbers.push(digit);
        }
    })
}

const allNumbers = extractNegativeNumbers([1, 2, 3, -3, 4, -9, 11, -32]);
negativeNumbers;
positiveNumbers;