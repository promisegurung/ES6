class Expenses {
    constructor([...expenses], under50, under200, over200) {
        this.bills = [];
        this.tips = [];
        this.under50 = under50;
        this.under200 = under200;
        this.over200 = over200;
        expenses.map(exp => {
            this.bills.push(exp);
            if (exp < 50) { this.tips.push(Math.floor(exp * this.under50)) }
            else if (exp >= 50 && exp < 200) { this.tips.push(Math.floor(exp * under200)) }
            else { this.tips.push(Math.floor(exp * over200)) }
            console.log(this.bills);
            console.log(this.tips)
        })
    }
    getBills() {
        return this.bills;
    }
    getTips() {
        return this.tips;
    }
    getAverageTips() {
        let total = 0;
        this.tips.map(tip => {
            total += tip
        })
        return Math.floor(total / this.tips.length);
    }
}

const john = new Expenses([49, 120, 300, 500], .2, .15, .1);
console.log(john.getBills());
console.log(john.getTips());
console.log(john.getAverageTips());

const mike = new Expenses([67, 190, 800], .1, .20, .30);
console.log(mike.getBills());
console.log(mike.getTips());
console.log(mike.getAverageTips())