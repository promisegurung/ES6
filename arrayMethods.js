const array = ['Billy', 'Havana', 1995, 'designer', false];

// pushes at the end position of the array
array.push('blue');
array;

// pushes the arg at the start position
array.unshift('Master');
array;

// it pops the last element of the array
array.pop();
array;

// it removes the first element off the array. // name clash
array.shift()
array;

console.log(array.indexOf(1995));
console.log(array.indexOf('blablablalbla'));
