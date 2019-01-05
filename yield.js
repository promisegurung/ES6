function* myGenerator () {
    yield 1;
}

const iter = myGenerator();
console.log(iter.next());
console.log(iter.next());