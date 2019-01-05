// called Set in ES6

const duplicatedArray = [1, 2, 3, 3, 3, 3, 3, 4, 5];

const set = new Set(duplicatedArray);
set;

// Voila set is a new array with not duplications!!

const doesHave = set.has(999999999); // no the set do not have this ridicule
doesHave;