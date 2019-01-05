const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([544, 983, 094, 592, 298]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = { title: 'Fresh Tomato Pasta', publisher: 'Gucci Italiano' };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = { title: 'Fresh Tomato Pasta', publisher: 'Gucci Italiano' };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    })
}

async function getRecipesAW() {
    const IDs = await getIDs;                                IDs;
    const recipe = await getRecipe(IDs[2]);                  recipe;
    const related = await getRelated('Gucci Italiano');      related;
    return recipe;
}

getRecipesAW().then(result => console.log(`${result} is a delicious meal, for sure`));



// LESSER APPROACH

// getIDs
//     .then(IDs => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     })
//     .then(recipe => {
//         console.log(recipe);
//         return getRelated('Gucci Italiano');
//     })
//     .then(recipe => {
//         console.log(recipe);
//     })
//     .catch(error => console.log("Error happened!"));