class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area // km^2
        this.numTrees = numTrees
    }
    treeDensity() {
        const density = this.numTrees/this.area;
        return `${this.name} has a tree density of "${density}" trees per square km.`;
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        return `${this.name} was built on year "${this.buildYear}", it is a ${classification.get(this.size)} size street.`;
    }
}

const allParks = [
    new Park('Green Park', 1964, 0.2, 215),
    new Park('Hyde Park', 1898, 0.3, 3462),
    new Park('Royal Oak Park', 1931, 0.6, 6027)
]
const allStreets = [
    new Street('Oxford street', 1871, 1.1, 3),
    new Street('Victoria street', 1909, 2.9, 4),
    new Street('Hyde Park Corner', 1945, 4.7, 5),
    new Street('Belham Road', 1991, 0.5, 2),
    new Street('Normal street', 1871, 1.4),
]

function calc(arr) {
    const sum =  arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(parks) {
    console.log('------------------PARKS REPORT----------------------');
    // Density
    parks.forEach(park => console.log(park.treeDensity()));

    // Average Age
    const ages = parks.map(park => new Date().getFullYear() - park.buildYear);      
    const [totalAge, avgAge] = calc(ages);                                  
    console.log(`Our ${parks.length} parks have an average of ${avgAge} years.`)
    
    // which parks has more than 1000 trees
    parks.forEach(park => {
        if (park.numTrees > 1000) {
            console.log(`${park.name} has more than 1000 trees [${park.numTrees}]`)
        }
    })
}

reportParks(allParks)

function reportStreets(streets) {
    console.log('------------------STREETS REPORT----------------------');
    // total and avg lengths of the town's streets
    const lengths = streets.map(street => street.length);
    const [totalLength, avgLength] = calc(lengths);
    console.log(`Our ${streets.length} streets have total length of ${totalLength}km, and an average of ${avgLength} km.`)
    
    // classify sizes
    streets.forEach(street => console.log(street.classifyStreet()))
}

reportStreets(allStreets);