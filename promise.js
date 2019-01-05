function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('bob');
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

getName()
.then(name => {
    console.log(name);
})


getAge()
.then(age => {
    console.log(age);
})