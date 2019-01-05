const users = new Map([
    ['001298', 'Adam'],
    ['002198', 'Ben'],
    ['118967', 'Chris']
]);

console.log(users);

console.log(users.get('002198'));
// name of the user with this id>>>


// Look into map data structures

const question = new Map();
question.set('question', 'What is your name?');
question.set(1, 'Adam');
question.set(2, 'Ben');
question.set(3, 'Chris');
question.set(4, 'Promise');
question.set('correct', 4);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong, Please try again!');

console.log(question.get('question'));
console.log(question.size);

// if (question.has(4)) {
//     question.delete(4); // the el with key 4 is deleted
// }
// console.log(question.size);

// question.forEach((value, key) => 
// console.log(`The key is set to  "${key}", and the value it holds is: ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}

// const ans = parseInt(prompt('Write correct answer'));
const ans = 4;
console.log(question.get(ans === question.get('correct')));
