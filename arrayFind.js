const arr = [1, 20, 10, 5, 10, 61];

const results = arr.find(number => number > 10);
results;
// sequentially runs through the arr elements. and find the first element that matches the criteria

const isTen = arr.find((number) => { return number == 10 });
isTen;


const is10 = arr.map(el => el === 10);
is10;
console.log(is10.indexOf(true));
// this way we get the index of the FIRST FOUND element that is 10

console.log(arr.findIndex(el => el === 10));
// VOILA! the ES6 way

