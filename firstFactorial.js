function firstFactorial(num) {
    let ans = 1;
    if (num <= 0) {
        ans = 0;
    } else {
        for (let i = 1; i <= num; i++) {
            ans = ans * i
        }
    }
    return ans;
}

console.log(firstFactorial(4));

// What sorcery is this??

function FirstFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * FirstFactorial(num - 1);
    }
}

console.log(FirstFactorial(4))