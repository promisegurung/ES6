function multiplyBy2(base, ...numbers) {
    return numbers.map(digit => {
        return digit * 2 + base
    })
}

const input = [100, 1, 5, 20, 10];
console.log(multiplyBy2(...input));