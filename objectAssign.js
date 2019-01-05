const obj1 = {
    lastname: 'Moore'
};

const obj2 = {
    firstname: 'Bobby',
    age: 10,
    location: 'Venice'
};

// Dump  the content of obj2 into obj1 : overwriting NOT merging

Object.assign(obj1, obj2);

obj1;

const object = {};
Object.assign(object, obj1, obj2);

object;