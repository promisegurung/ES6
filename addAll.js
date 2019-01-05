const numArray = [1, 10, 20, 30];

// ADD ALL
function sum(...numbers) {
    return numbers.reduce((total, number) => {
        total; // for visual purpose
        number; // for visual purpose
        return total + number
    })
}

const total = sum(...numArray);
total;


// SUBTRACT ALL
function difference(...numbers) {
    return numbers.reduce((total, number) => {
        total; // for visual purpose
        number; // for visual purpose
        return total - number
    })
}

const diff = difference(...numArray);
diff;