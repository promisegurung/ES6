class Person  {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }
    whoAreYou() {
        return `I am a Person and a ${this.job}`;
    }
}
class Athlete extends Person {
    constructor(name, yearOfBirth, job, sports, medal) {
        super(name, yearOfBirth, job);
        this.sports = sports;
        this.medal = medal;
    }
    whoAreYou() {
        return 'I AM A LEGEND, I AM AN ATHLETE!'
    }
    whatSportDoYouPlay() {
        return `I play the majestic game of ${this.sports}`
    }
    wonMedal() {
        this.medal ++;
        return `I have won ${this.medal} medals and COUNTING!`;
    }
}

const Adam = new Person ('Adam', 1990, 'teacher');
const Ben = new Athlete('Ben', 1993, 'athlete', 'swimming', 5);

console.log(Adam.calculateAge());
console.log(Adam.whoAreYou());
// console.log(Adam.whatSportDoYouPlay());
// console.log(Adam.wonMedal());            these two functions are not applied to a Person class

console.log(Ben.calculateAge());
console.log(Ben.whoAreYou());
console.log(Ben.whatSportDoYouPlay());
console.log(Ben.wonMedal());