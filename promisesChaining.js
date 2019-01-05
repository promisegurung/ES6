function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('bob');
            reject('something went wrong!');
        }, 1000)
    })
}
function getAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 4000)
    })
}

// getName()
// .then(name => {
//     console.log(name);
//     return getAge();
// })
// .then(age => {
//     console.log(age);
// })

Promise.all([
    getName(),
    getAge()
])
.then(([name, age]) => {
    console.log(name);
    console.log(age);
})
.catch(err => {
    console.log(err);
})
.then(() => { // yeah error happened! but we continue
    console.log('hello');
})
