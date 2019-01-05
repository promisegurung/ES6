function getName() {
    return Promise.resolve('Bob');
}

function getAge() {
    return Promise.resolve(10);
}

// better alternative to .then and .catch *********

async function main() {
    try {
        const [name, age] = await Promise.all([
            getName(),
            getAge()
        ])
        name;
        age;
    } catch (err) {
        console.log(err);
    }
    
}

main();