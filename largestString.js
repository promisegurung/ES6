let largestString;

function findLargestString(strings) {
    // set largestString to point to the 
    // longest string found in the strings array passed in
    let max = -Infinity;
    strings.forEach(string => {
        if (string.length > max) {
            max = string.length;
            largestString = string;
        } else {
            return null;
        }
    });
}

const strings = ["apple", "ball", "cat"] // expected "apple"
const result = findLargestString(strings);

largestString; // 5