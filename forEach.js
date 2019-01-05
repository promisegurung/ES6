// map return a new array while forEach does not.
const john = ['John', 'Smith', 1998, 'designer', false, 'blue'];

john.forEach((el, indx) => {
    console.log(indx, ':', el);
})

// essentially a filter
const newArray = [];

const noJohn = john.map(el => {
    if (el !== 'John') {
        newArray.push(el);
    } 
});

john;

// notice newArray no longer holds 'John': FILTERED
newArray;

console.log(newArray.reverse());

