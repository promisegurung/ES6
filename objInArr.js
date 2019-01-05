const state = {
    incomes: [
        {description: 'Salary', amount: 200},
        {description: 'Sold Car', amount: 100}
    ],
    expenses: [
        {Rent: 50},
        {Shopping: 20}
    ]
}

console.log(state.incomes[0].description);

////// Find the name of the person with selected ID *****************

const arrayOfObject = [
    { id: 'pro1', name: 'Promise' },
    { id: 'adam2', name: 'Adam' },
    { id: 33333, name: 'Kaalu' },
    { id: 'jhilk4',  name: 'Jhilkay' }
]

const selectedName = (id) => {
    // return arrayOfObject
    // [arrayOfObject.findIndex(el => el.id === id)]
    //     .name;
    return arrayOfObject.find(el => el.id === id).name;
}

console.log(selectedName('jhilk4'));
console.log(selectedName('pro1'));
console.log(selectedName(33333));

// findIndex returns Index number only
console.log(arrayOfObject.findIndex(el => el.id === 33333));

// whereas find returns the entire object (in our case) in that index
console.log(arrayOfObject.find(el => el.id === 33333).name);