// Primitives Vs Objects

// Primitives
let a = 21;
let b = a;
a = 10; // mutation

// these primitives hold their own copies of the values
// they are seperate entities.
a; // a is mutated
b; // b on the other hand did not.

// Objects
const obj1 = {
    name: 'John',
    age: 28
}
const obj2 = obj1;
obj1.age = 26;
// whereas these objects are essentially pointer to 
// the same memory address, hence affected
obj1;
obj2;

// Functions
let age = 27; // this global variable will not be mutated

const obj = {
    name: 'Mandy',
    city: 'California'
} // the obj will: it is a pointer(reference)
function change(x,y) {
    x = 30;
    y.city = 'Sydney';
}

change(age, obj);
age;
console.log(obj.city);