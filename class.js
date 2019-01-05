class Scores {
    constructor(score1, score2, score3) {
        this.score1 = score1,
        this.score2 = score2,
        this.score3 = score3
    }
    getAverageScore() {
        return (this.score1 * this.score2 * this.score3) / 3;
    }
}

const johners = new Scores(30, 50, 50 );
const mikings = new Scores(30, 50, 50 );
const maryLins = new Scores(30, 50, 50 );

const avgJohners = johners.getAverageScore();
const avgMikings = mikings.getAverageScore();
const avgMarLins = maryLins.getAverageScore();

if (avgJohners === avgMikings && avgJohners === avgMarLins) {
    console.log('IT is aaaaaa 3-wayyyy :DRAW')
} else if(avgJohners > avgMikings  && avgJohners > avgMarLins) {
    console.log('The Johners are the new BALLERS')
} else if(avgMikings > avgJohners  && avgMikings > avgMarLins) {
    console.log('The great warrios: Mikings') 
} else if (avgMarLins > avgJohners  && avgMarLins >avgMikings) {
    console.log('names can be decieving: the mighty MarLins')
} else {
    console.log('Something went wrong')
}