class info {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    getBmi() {
        return this.weight / (this.height * this.height );
    }
}

const mark = new info( 50, 1.8);
const john = new info(55, 1.9);

console.log('Is Mark\'s higher than John\'s? :', mark.getBmi() > john.getBmi())

// confirmation

console.log(mark)
console.log(john);

console.log(mark.getBmi());
console.log(john.getBmi());