function getDataFromAPI(ID) {
    fetch(`https://myserver.com/api/something/${ID}`) // the api loaction
        .then(result => {
            return result.json()                             // with axios no need to perform .json()
        })
        .then(data => {                                      // this data now holds json object(redundatn with axios) 
            const something = data.something[0];
            return something;
        })
        .catch(error => error);                             // if error occured return error
}

getDataFromAPI(9873847);

// BETTTER ALTERNATIVE

async function getDataFromAPIAW(ID) {
    try {
        const result = await fetch(`https://myserver.com/api/something/${ID}`);
        const data = await result.json();
        return data;
    }
    catch(error) {
        return error;
    }
}

let something;
getDataFromAPIAW(8991881).then(data => {
    something = data;
    console.log(something);
});